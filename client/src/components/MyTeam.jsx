import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useLoaderData } from 'react-router-dom'
//images

import Arsenal from '../assets/images/arsenal.png'
import AstonVilla from '../assets/images/astonVilla.png'
import Bournemouth from '../assets/images/bournemouth.png'
import Brentford from '../assets/images/brentford.png'
import Brighton from '../assets/images/brighton.png'
import Burnley from '../assets/images/burnley.png'
import Chelsea from '../assets/images/chelsea.png'
import Everton from '../assets/images/everton.png'
import Fulham from '../assets/images/fulham.png'
import Liverpool from '../assets/images/liverpool.png'
import LutonTown from '../assets/images/luton.png'
import ManchesterCity from '../assets/images/mancity.png'
import ManchesterUnited from '../assets/images/manu.png'
import NewcastleUnited from '../assets/images/newcastle.png'
import NottinghamForest from '../assets/images/nottsforest.png'
import CrystalPalace from '../assets/images/palace.png'
import SheffieldUnited from '../assets/images/sheffield.png'
import TottenhamHotspur from '../assets/images/tottenham.png'
import WestHamUnited from '../assets/images/westham.png'
import WolverhamptonWanderers from '../assets/images/wolves.png'

export default function MyTeam() {
  const usersTeam = useLoaderData()
  console.log(usersTeam)
  const { _id, teamName, players } = usersTeam

  const sortedPlayers = players.sort((a, b) => {
    const positionOrder = { 'GK': 1, 'DF': 2, 'MF': 3, 'FW': 4 }

    return positionOrder[a] - positionOrder[b]
  })
  console.log(players)

  // function to add images to each player using player.teamName
  function teamJersey(player) {
    const teamJerseys = {
      'Arsenal': Arsenal,
      'Aston Villa': AstonVilla,
      'Bournemouth': Bournemouth,
      'Brentford': Brentford, 
      'Brighton': Brighton,                                
      'Burnley': Burnley,
      'Chelsea': Chelsea,
      'Everton': Everton,
      'Fulham': Fulham,
      'Liverpool': Liverpool,
      'Luton Town': LutonTown,
      'Manchester City': ManchesterCity,
      'Manchester United': ManchesterUnited,
      'Newcastle United': NewcastleUnited,
      'Nottingham Forest': NottinghamForest,
      'Crystal Palace': CrystalPalace,
      'Sheffield United': SheffieldUnited,
      'Tottenham Hotspur': TottenhamHotspur,
      'West Ham United': WestHamUnited,
      'Wolverhampton Wanderers': WolverhamptonWanderers,

    }
  
    const jerseySrc = teamJerseys[player.teamName]
    console.log(jerseySrc)
    if (jerseySrc) {
      return <img src={jerseySrc} key={player.id} />
    }
  
    
  }
  return (
    <>

      <div>

        <h2>Lets Go {teamName}! </h2>
<p>{teamName}</p>
      </div>
      <section className='players'>
        
        <Container fluid className='teams' >

          <Col key={_id} className="card" md={12}>
            <Row>
              {sortedPlayers
                .filter((player) => player.position === 'GK')
                .map((player) => (
                  <Col key={`${player.id}`} md={12} >
                    <p>{teamJersey(player)}  <br /> {player.firstName} <br /> {player.lastName} <br /> {player.position}</p>
                  </Col>
                ))}
            </Row>
          </Col>


          <div className='DF'>
            <Row>
              {sortedPlayers
                .filter((player) => player.position === 'DF')
                .map((player, index) => (
                  <Col key={`${player.id} ${index}`} className="card" md={3}>
                    <p>{teamJersey(player)}  <br />{player.firstName} <br />  {player.lastName} <br />{player.position}</p>

                  </Col>

                ))}
            </Row>
          </div>


          <div>


            <Row>
              {sortedPlayers
                .filter((player) => player.position === 'MF')
                .map((player, index) => (
                  <Col key={` ${player.id} ${index}`} className="card" md={3}>
                    <p>{teamJersey(player)}  <br />{player.firstName} <br />  {player.lastName} <br />{player.position}</p>
                  </Col>
                ))}
            </Row>


          </div>

          <div>

            <Row>
              {sortedPlayers
                .filter((player) => player.position === 'FW')
                .map((player, index) => (
                  <Col key={`${player.id} ${index}`} className="card" md={6}>
                    <p>{teamJersey(player)} <br />{player.firstName} <br />  {player.lastName} <br />{player.position}</p>
                  </Col>
                ))}
            </Row>

          </div>



        </Container>
        <button>Delete Team</button>
      </section>
    </>
  )
}