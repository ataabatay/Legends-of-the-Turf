import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useLoaderData } from 'react-router-dom'


export default function MyTeam() {
  const usersTeam = useLoaderData()
console.log(usersTeam)
  const { _id, teamName, players } = usersTeam

console.log(teamName)
  return (
    <>
      <h2>I'm Your Team Go Turds!</h2>
      <section className='players'>
        <p>{teamName}</p>
        <Container fluid>
          <Row >

            <Col key={_id} md={12}>
              {players.map((player) => (
                <Col key={player.id} md={12}>
                  
                    {player.firstName}
                  
                </Col>
              ))}
            </Col>
          </Row>



        </Container>

      </section>
    </>
  )
}