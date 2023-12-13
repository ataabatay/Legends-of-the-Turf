import { useLoaderData } from 'react-router-dom'
import { useEffect, useState, } from 'react'
import Filters from './Filters.jsx'

import ARS from '../assets/images/arsenal.png'
import AVL from '../assets/images/astonVilla.png'
import BOU from '../assets/images/bournemouth.png'
import BRE from '../assets/images/brentford.png'
import BHA from '../assets/images/brighton.png'
import BUR from '../assets/images/burnley.png'
import CHE from '../assets/images/chelsea.png'
import EVE from '../assets/images/everton.png'
import FUL from '../assets/images/fulham.png'
import LIV from '../assets/images/liverpool.png'
import LUT from '../assets/images/luton.png'
import MCI from '../assets/images/mancity.png'
import MUN from '../assets/images/manu.png'
import NEW from '../assets/images/newcastle.png'
import NFO from '../assets/images/nottsforest.png'
import CRY from '../assets/images/palace.png'
import SHU from '../assets/images/sheffield.png'
import TOT from '../assets/images/tottenham.png'
import WHU from '../assets/images/westham.png'
import WOL from '../assets/images/wolves.png'

// React bootstrap components
import Pagetoggle from './Pagination'
import Table from 'react-bootstrap/esm/Table'

// Getting the teams, player positions and logos from fetched data to add to players for ease of display
const teamLogos = [
  { team: 'ARS', logo: ARS },
  { team: 'AVL', logo: AVL },
  { team: 'BOU', logo: BOU },
  { team: 'BRE', logo: BRE },
  { team: 'BHA', logo: BHA },
  { team: 'BUR', logo: BUR },
  { team: 'CHE', logo: CHE },
  { team: 'EVE', logo: EVE },
  { team: 'FUL', logo: FUL },
  { team: 'LIV', logo: LIV },
  { team: 'LUT', logo: LUT },
  { team: 'MCI', logo: MCI },
  { team: 'MUN', logo: MUN },
  { team: 'NEW', logo: NEW },
  { team: 'NFO', logo: NFO },
  { team: 'CRY', logo: CRY },
  { team: 'SHU', logo: SHU },
  { team: 'TOT', logo: TOT },
  { team: 'WHU', logo: WHU },
  { team: 'WOL', logo: WOL },
];

export default function Footballers() {
  // ! Using and making the loader data usable
  // All data upon initial load
  const loaderData = useLoaderData()

  // ! States 
  const [positions, setPositions] = useState([])
  const [teams, setTeams] = useState([])
  const [filters, setFilters] = useState({
    filterBy: 'View By',
    sortBy: 'Sort By'
  })

  // ! Pagination helpers
  // Current page state
  const [currentPage, setCurrentPage] = useState(1);
  // Items to show per page (30 players per page)
  const [recordsPerPage] = useState(30);
  // total number of pages
  const [nPages, setNPages] = useState(0)

  // ! Filters and states for them
  // state of active players to show initially set to all players
  const [filteredFootballers, setfilteredFootballers] = useState([])

  function sortData(data, sortBy) {
    const sortedData = [...data]

    switch (sortBy) {
      case 'Price':
        sortedData.sort((a, b) => b.price - a.price)
        break
      case 'Points':
        sortedData.sort((a, b) => b.totalPoints - a.totalPoints)
        break
      case 'Form':
        sortedData.sort((a, b) => b.form - a.form)
        break
      case 'Ownership':
        sortedData.sort((a, b) => b.ownership - a.ownership)
        break
      default:
        return data
    }
    return sortedData
  }

  useEffect(() => {
    // Getting a set of unique team names
    const teamNames = loaderData.data.teams.map(team => { return team.short_name })
    setTeams(teamNames)

    // Getting a set of unique footballer positions
    const positionNames = loaderData.data.element_types.map(position => { return position.singular_name_short })
    setPositions(positionNames)

    // Creating a new player pseudomodel to use out of the loaderData for ease
    const { data: { elements: rawLoaderDataOfprettifiedAllFootballers } } = loaderData
    const cleanedFootballersData = rawLoaderDataOfprettifiedAllFootballers.map(player => {
      const matchedTeam = teamLogos.find(teamLogo => teamLogo.team === teamNames[player.team - 1])
      return {
        id: player.id,
        firstName: player.first_name,
        lastName: player.second_name,
        teamName: teamNames[player.team - 1],
        teamLogo: matchedTeam.logo,
        position: positionNames[player.element_type - 1],
        price: player.now_cost / 10,
        totalPoints: player.total_points,
        form: player.form,
        ownership: player.selected_by_percent,
      }
    }).sort((a, b) => b.price - a.price)

    // filter the cleanedFootballersData
    let playersToDisplay = []
    // if seeing all the players
    if (filters.filterBy === 'ALL' || filters.filterBy === 'View By') {
      playersToDisplay = cleanedFootballersData
      // if filtering by teamname
    } else if (teamNames.find(teamName => teamName === filters.filterBy)) {
      playersToDisplay = cleanedFootballersData.filter(player => {
        return player.teamName === filters.filterBy
      })
      // if filtering by position
    } else {
      playersToDisplay = cleanedFootballersData.filter(player => {
        return player.position === filters.filterBy
      })
    }
    playersToDisplay = sortData(playersToDisplay, filters.sortBy)

    // Set the number of pages that will be shown in the pagination
    setNPages(Math.ceil(cleanedFootballersData.length / recordsPerPage))
    // index of the last item on page (based on the current page number multiplied by how number of items per page)
    const indexOfLast = currentPage * recordsPerPage
    // index of the first item on page
    const indexOfFirst = indexOfLast - recordsPerPage

    // final result of players to show on per page (30 items) after filtering is done
    const activePlayersToRender = playersToDisplay.slice(indexOfFirst, indexOfLast)
    setfilteredFootballers(activePlayersToRender)
  }, [loaderData, recordsPerPage, currentPage, filters])

  return (
    <>
      <h1 style={{ marginTop: '40px' }}>Player Statistics</h1>
      <Filters
        positions={positions}
        teams={teams}
        filters={filters}
        setFilters={setFilters}
        filteredFootballers={filteredFootballers}
        setfilteredFootballers={setfilteredFootballers}
      />
      <Table hover>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Points</th>
            <th>Form</th>
            <th>Owned by</th>
          </tr>
        </thead>
        <tbody>
          {filteredFootballers.map((player, idx) => {
            return (
              <tr key={idx} style={{ textAlign: 'left' }}>
                <td style={{ width: '40px' }}>{<img style={{ width: 'inherit', marginRight: '10px' }} src={player.teamLogo} alt="team jersey" />}</td>
                <td>{player.firstName} {player.lastName} <br />
                  <span style={{ fontWeight: 'lighter', fontStyle: 'italic' }}>{player.teamName} {player.position}</span></td>
                <td>{player.price}</td>
                <td>{player.totalPoints}</td>
                <td>{player.form}</td>
                <td>{player.ownership}%</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <div className='paginationdiv'>
        <Pagetoggle
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  )
}