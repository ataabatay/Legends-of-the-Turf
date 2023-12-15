// react bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form, useLoaderData, useNavigate } from 'react-router-dom'

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
import field from '../assets/images/Pitch.png'

export default function MyTeam() {
  const navigate = useNavigate()
  const usersTeam = useLoaderData()
  console.log(usersTeam)
  const { teamName, players, image, _id } = usersTeam

  const sortedPlayers = players.sort((a, b) => {
    const positionOrder = { 'GK': 1, 'DF': 2, 'MF': 3, 'FW': 4 }
    return positionOrder[a] - positionOrder[b]
  })

  // function to add images to each player using player.teamName
  function teamJersey(player) {
    const teamJerseys = {
      'ARS': Arsenal,
      'AVL': AstonVilla,
      'BOU': Bournemouth,
      'BRE': Brentford,
      'BHA': Brighton,
      'BUR': Burnley,
      'CHE': Chelsea,
      'EVE': Everton,
      'FUL': Fulham,
      'LIV': Liverpool,
      'LUT': LutonTown,
      'MCI': ManchesterCity,
      'MUN': ManchesterUnited,
      'NEW': NewcastleUnited,
      'NFO': NottinghamForest,
      'CRY': CrystalPalace,
      'SHU': SheffieldUnited,
      'TOT': TottenhamHotspur,
      'WHU': WestHamUnited,
      'WOL': WolverhamptonWanderers,
    }

    const jerseySrc = teamJerseys[player.teamName]
    if (jerseySrc) {
      return <img src={jerseySrc} alt={player.teamName} key={player.id} />
    }
  }

  return (
    <>
      <section className='my-team'>
        <section className='team-details'>
          <img src={image} style={{width: '100px', borderRadius: '100px'}}></img>
          <div className='team-name'>{teamName}</div>
          <button type='button' className='btn btn-primary btn-sm'
            style={{ marginTop: '5px' }}
            onClick={() => navigate(`/myteam/${_id}/edit/players`)}>
              Edit Team
              </button>
          <Form method='POST'>
            <button type='submit' className='btn btn-primary btn-sm' style={{ marginTop: '5px' }}>Delete Team</button>
          </Form>
        </section>

        <section className='players'>
          <Container fluid className='teams' style={{ display: 'flex', justifyContent: 'center', backgroundImage: `url(${field})` }}>
            <section className='field'>
              <Row className='goalkeepers'>
                {sortedPlayers
                  .filter((player) => player.position === 'GKP')
                  .map((player) => (
                    <Col key={`${player.id}`}xs={12} sm={12} md={12} lg={12} >
                      <div className='player-card'>
                        <div className='player-jersey'>{teamJersey(player)}</div>
                        <p className='player-name'>{player.lastName}</p>
                        <p className='player-position'>{player.position}</p>
                      </div>
                    </Col>
                  ))}
              </Row>

              <Row className='defenders'>
                {sortedPlayers
                  .filter((player) => player.position === 'DEF')
                  .map((player) => (
                    <Col key={`${player.id}`} xs={3} sm={3} md={3} lg={3}>
                      <div className='player-card'>
                        <div className='player-jersey'>{teamJersey(player)}</div>
                        <p className='player-name'>{player.lastName}</p>
                        <p className='player-position'>{player.position}</p>
                      </div>
                    </Col>
                  ))}
              </Row>

              <Row className='midfielders'>
                {sortedPlayers
                  .filter((player) => player.position === 'MID')
                  .map((player, index) => (
                    <Col key={` ${player.id} ${index}`} xs={3} sm={3} md={3} lg={3}>
                      <div className='player-card'>
                        <div className='player-jersey'>{teamJersey(player)}</div>
                        <p className='player-name'>{player.lastName}</p>
                        <p className='player-position'>{player.position}</p>
                      </div>
                    </Col>
                  ))}
              </Row>

              <Row className='forwards'>
                {sortedPlayers
                  .filter((player) => player.position === 'FWD')
                  .map((player, index) => (
                    <Col key={`${player.id} ${index}`} xs={6} sm={6} md={6} lg={6}>
                      <div className='player-card'>
                        <div className='player-jersey'>{teamJersey(player)}</div>
                        <p className='player-name'>{player.lastName}</p>
                        <p className='player-position'>{player.position}</p>
                      </div>
                    </Col>
                  ))}
              </Row>
            </section>
          </Container>
        </section>
      </section>
    </>
  )
}