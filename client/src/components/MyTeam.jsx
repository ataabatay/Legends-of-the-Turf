import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useLoaderData } from 'react-router-dom'


export default function MyTeam() {
  const usersTeam = useLoaderData()
  console.log(usersTeam)
  const { _id, teamName, players } = usersTeam

  const sortedPlayers = players.sort((a, b) => {
    const positionOrder = { 'GK': 1, 'DF': 2, 'MF': 3, 'FW': 4 }

    return positionOrder[a] - positionOrder[b]
  })
  console.log(teamName)
  return (
    <>
      <h2>I'm Your Team Go Turds!</h2>
      <section className='players'>
        <p>{teamName}</p>
        <Container fluid>

          <Col key={_id} md={12}>
            <Row>
              {sortedPlayers
                .filter((player) => player.position === 'GK')
                .map((player) => (
                  <Col key={`${player.id}`} md={12}>
                    <p>{player.firstName} <br /> {player.position}</p>
                  </Col>
                ))}
            </Row>
          </Col>


          <div className='DF'>
            <Row>
              {sortedPlayers
                .filter((player) => player.position === 'DF')
                .map((player, index) =>  (
                  <Col key={`${player.id} ${index}`} className="card" md={3}>
                    <p>{player.firstName} <br /> {player.position}</p>

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
                    <p>{player.firstName} <br /> {player.position}</p>
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
                    <p>{player.firstName} <br /> {player.position}</p>
                  </Col>
                ))}
            </Row>

          </div>



        </Container>

      </section>
    </>
  )
}