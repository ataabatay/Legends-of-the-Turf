// react bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Form, useLoaderData, useActionData, useNavigation } from 'react-router-dom'

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
import field from '../assets/images/field.jpg'

export default function MyTeam() {
  const deleteTeam = useActionData()
  const usersTeam = useLoaderData()
  const { _id, teamName, players } = usersTeam

  const sortedPlayers = players.sort((a, b) => {
    const positionOrder = { 'GK': 1, 'DF': 2, 'MF': 3, 'FW': 4 }
    return positionOrder[a] - positionOrder[b]
  })

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
    if (jerseySrc) {
      return <img src={jerseySrc} alt={player.teamName} style={{ width: '100px', height: '100px' }} key={player.id} />
    }
  }

  return (
    <>
      <section className='players'>
        <h2>Lets Go {teamName}! </h2>

        <Container fluid className='teams' style={{ display: 'flex', justifyContent: 'center', backgroundImage: `url(${field})`, backgroundSize: 'cover' }}>
          {/* <div style={{ marginRight: '20px', flexShrink: 0 }}>
            
            <p>{teamName} <br /></p>
          </div> */}
          <div className='field' style={{ flexDirection: 'column', width: 700, backgroundImage: field }}>
            <Col key={_id} md={12}>
              <Row>
                {sortedPlayers
                  .filter((player) => player.position === 'GK')
                  .map((player) => (
                    <Col key={`${player.id}`} md={12} >
                      <p style={{ color: 'black', fontWeight: 'bold', lineHeight: '1.3' }}>
                        {teamJersey(player)}
                        <br />
                        <span style={{ backgroundColor: 'royalblue', display: 'inline-block', width: '100px' }}>
                          {player.firstName}<br />{player.lastName}</span>
                        <br />
                        <span style={{ backgroundColor: 'blue', color: 'white', display: 'inline-block', width: '100px' }}>{player.position}</span></p>
                    </Col>
                  ))}
              </Row>
            </Col>


            <div className='DF'>
              <Row>
                {sortedPlayers
                  .filter((player) => player.position === 'DF')
                  .map((player, index) => (
                    <Col key={`${player.id} ${index}`} md={3}>
                      <p style={{ color: 'black', fontWeight: 'bold', lineHeight: '1.3' }}>
                        {teamJersey(player)}
                        <br />
                        <span style={{ backgroundColor: 'royalblue', display: 'inline-block', width: '100px' }}>
                          {player.firstName}<br />{player.lastName}</span>
                        <br />
                        <span style={{ backgroundColor: 'blue', color: 'white', display: 'inline-block', width: '100px' }}>{player.position}</span></p>

                    </Col>

                  ))}
              </Row>
            </div>

            <div>
              <Row>
                {sortedPlayers
                  .filter((player) => player.position === 'MF')
                  .map((player, index) => (
                    <Col key={` ${player.id} ${index}`} md={3}>
                      <p style={{ color: 'black', fontWeight: 'bold', lineHeight: '1.3' }}>
                        {teamJersey(player)}
                        <br />
                        <span style={{ backgroundColor: 'royalblue', display: 'inline-block', width: '100px' }}>
                          {player.firstName}<br />{player.lastName}</span>
                        <br />
                        <span style={{ backgroundColor: 'blue', color: 'white', display: 'inline-block', width: '100px' }}>{player.position}</span></p>
                    </Col>
                  ))}
              </Row>
            </div>

            <div>
              <Row>
                {sortedPlayers
                  .filter((player) => player.position === 'FW')
                  .map((player, index) => (
                    <Col key={`${player.id} ${index}`} md={6}>
                      <p style={{ color: 'black', fontWeight: 'bold', lineHeight: '1.3' }}>
                        {teamJersey(player)}
                        <br />
                        <span style={{ backgroundColor: 'royalblue', display: 'inline-block', width: '100px' }}>
                          {player.firstName}<br />{player.lastName}</span>
                        <br />
                        <span style={{ backgroundColor: 'blue', color: 'white', display: 'inline-block', width: '100px' }}>{player.position}</span></p>
                    </Col>
                  ))}
              </Row>
            </div>
          </div>
        </Container>
        <Form method='POST'>
          <button style={{ marginTop: '5px' }}>Delete Team</button>
        </Form>
      </section>
    </>
  )
}