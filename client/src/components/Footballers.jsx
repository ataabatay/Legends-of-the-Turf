import { useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'
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

export default function Footballers() {

  // ! Using and making the loader data usable
  // All data upon initial load
  const loaderData = useLoaderData()

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

  // Getting a set of unique team names
  const teams = loaderData.data.teams.map(team => { return team.short_name })
  const positions = loaderData.data.element_types.map(position => { return position.singular_name_short })
  
  // Creating a new player pseudomodel to use out of the loaderData for ease
  const { data: { elements: rawLoaderDataOfprettifiedAllFootballers } } = loaderData
  const cleanedFootballersData = rawLoaderDataOfprettifiedAllFootballers.map(player => {
    const matchedTeam = teamLogos.find(teamLogo => teamLogo.team === teams[player.team - 1])
    return {
      id: player.id,
      firstName: player.first_name,
      lastName: player.second_name,
      teamName: teams[player.team - 1],
      teamLogo: matchedTeam.logo,
      position: positions[player.element_type - 1],
      price: player.now_cost / 10,
      totalPoints: player.total_points,
      form: player.form,
      ownership: player.selected_by_percent,
    }
  }).sort((a, b) => b.price - a.price)


  // ! Filters and states for them
  // state of active players to show initially set to all players
  const [filteredFootballers, setfilteredFootballers] = useState(cleanedFootballersData)
  
  // ! Pagination helpers
  // Current page state
  const [currentPage, setCurrentPage] = useState(1);
  // Items to show per page (30 players per page)
  const [recordsPerPage] = useState(30);
  // index of the last item on page (based on the current page number multiplied by how number of items per page)
  const indexOfLast = currentPage * recordsPerPage
  // index of the first item on page
  const indexOfFirst = indexOfLast - recordsPerPage
  // total number of pages
  const nPages = Math.ceil(cleanedFootballersData.length / recordsPerPage)
  
  // final result of players to show on per page (30 items) after filtering is done
  const activePlayersToRender = filteredFootballers.slice(indexOfFirst, indexOfLast)

  return (
    <>
      <h1 style={{ marginTop: '40px' }}>Player Statistics</h1>
      <Filters
        positions={positions}
        teams={teams}
        cleanedFootballersData={cleanedFootballersData}
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
          {activePlayersToRender.map((player, idx) => {
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