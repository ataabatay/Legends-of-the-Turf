import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { format } from 'date-fns'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Fixtures() {

  const { fixtures, teams } = useLoaderData()
  console.log(useLoaderData())
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
        <h2>Fixtures</h2>


        {weeklyFixtures.map(fixture => {

          const homeTeam = teams.find(team => team.id === fixture.team_h)
          const awayTeam = teams.find(team => team.id === fixture.team_a)

          return (
            <Row key={fixture.id} className='fixture-row'>
              <div className='teams-against'>
                <Col sm={8} className='d-flex'><img src={`https://resources.premierleague.com/premierleague/badges/50/t${homeTeam.code}.png`}
                  alt={homeTeam.name} className='team-logo' /> <span>{homeTeam.short_name}</span></Col>

                <Col sm={8} className='d-flex'><img src={`https://resources.premierleague.com/premierleague/badges/50/t${awayTeam.code}.png`}
                  alt={awayTeam.name} className='team-logo' /><span> {awayTeam.short_name}</span></Col>
              </div>
              <div className='fixture-details'>
                <Col className='kickoff' sm={4}><span>{format(new Date(fixture.kickoff_time), 'eee, d MMM, HH:mm')}</span></Col>
              </div>
            </Row>
          )

        })}

      </Container>
    </div>
  )
}

