import { useLoaderData } from 'react-router-dom'
import Table from 'react-bootstrap/esm/Table'

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


export default function Footballers() {
  const loaderData = useLoaderData()
  
  // Getting the teams, positions, logos from fetched data to add to players for ease
  const teamlogos = [
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
  const teams = loaderData.playersFromThirdParty.data.teams.map(team => {return team.short_name})  
  const positions = loaderData.playersFromThirdParty.data.element_types.map(position => {return position.singular_name_short})

  // Making the loader data usable for rendering
  const { playersFromThirdParty: {data: {elements: publicPlayersData} }} = loaderData

  const playersToRender = publicPlayersData.map(player => {
    return {
      firstName: player.first_name,
      lastName: player.second_name,
      teamName: teams[player.team - 1],
      teamLogo: teamlogos[player.team - 1].logo,
      position: positions[player.element_type - 1],
      price: player.now_cost / 10,
      totalPoints: player.total_points,
      form: player.form,
      ownership: player.selected_by_percent,
    }
  })

  return (
    <>
      <h1>Players</h1>
      <Table hover>
        <thead>
          <tr style={{textAlign: 'left'}}>       
            <th>Name</th>
            <th>Position</th>
            <th>Team</th>
            <th>Price</th>
            <th>Points</th>
            <th>Form</th>
            <th>Owned by</th>
          </tr>
        </thead>
        <tbody>
          {playersToRender.map(player => {
            return (
              <tr key={player.id} style={{textAlign: 'left'}}>
                <td>{<img style={{ width: '40px', marginRight: '10px'}} src={player.teamLogo} alt="team jersey"/>}{player.firstName} {player.lastName}</td>
                <td>{player.position}</td>
                <td>{player.teamName}</td>
                <td>{player.price}</td>
                <td>{player.totalPoints}</td>
                <td>{player.form}</td>
                <td>{player.ownership}%</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}