import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { format } from 'date-fns'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Fixtures() {

  const { fixtures, teams } = useLoaderData()
  const [currentGameWeek, setCurrentGameWeek] = useState()
  const [weeklyFixtures, setWeeklyFixtures] = useState([])

  useEffect(() => {
    if (fixtures && fixtures.length > 0) {
      const today = new Date().toISOString()
      const upcomingFixtures = fixtures.filter(
        fixture => !fixture.started && fixture.kickoff_time > today
      )
      if (upcomingFixtures.length > 0) {
        upcomingFixtures.sort((a, b) => (a.kickoff_time > b.kickoff_time ? 1 : -1))

        const closestFixture = upcomingFixtures[0]
        setCurrentGameWeek(closestFixture.event)

        const fixturesForTheCurrentWeek = fixtures.filter(
          fixture => fixture.event === closestFixture.event
        )
        setWeeklyFixtures(fixturesForTheCurrentWeek)
      }
    }
  }, [fixtures])


  return (
    <div>
      <Container className='fixture-container'>
        <Row className='fixture-header' style={{ margin: '50px', padding: '0', border: 'none', fontWeight: 'bold', fontSize: '2em' }}>
          <Col>Fixtures Of The Week</ Col>
        </Row>

        {weeklyFixtures.map(fixture => {

          const homeTeam = teams.find(team => team.id === fixture.team_h)
          const awayTeam = teams.find(team => team.id === fixture.team_a)

          return (
            <Row key={fixture.id} className='fixture-row'>
              <div className='teams-against' style={{flexShrink: '1'}}>
                <Col sm={8} className='d-flex'><img src={`https://resources.premierleague.com/premierleague/badges/50/t${homeTeam.code}.png`}
                  alt={homeTeam.name} className='team-logo' /> <span>{homeTeam.name}</span></Col>

                <Col sm={8} className='d-flex'><img src={`https://resources.premierleague.com/premierleague/badges/50/t${awayTeam.code}.png`}
                  alt={awayTeam.name} className='team-logo' /><span> {awayTeam.name}</span></Col>
              </div>
              <div className='fixture-details' style={{flexShrink: '0'}}>
                <Col className='kickoff' sm={4}> {format(new Date(fixture.kickoff_time), 'eee, d MMM, HH:mm')}</Col>
              </div>
            </Row>
          )

        })}

      </Container>
    </div>
  )
}

