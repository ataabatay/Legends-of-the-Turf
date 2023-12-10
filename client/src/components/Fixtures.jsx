import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { format } from 'date-fns'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'


export default function Fixtures() {

  const fixtures = useLoaderData()
  const [currentGameWeek, setCurrentGameWeek] = useState()
  const [weeklyFixtures, setWeeklyFixtures] = useState([])
  console.log(fixtures)

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
      <Card style={{ width: '35rem' }}>
      <ListGroup>
      <ListGroup.Item>Fixtures Of The Week</ListGroup.Item>
      {weeklyFixtures && weeklyFixtures.map(fixture => (
        <div key={fixture.id}>
          <ListGroup.Item action variant="light">{`${fixture.team_h} vs ${fixture.team_a}`}</ListGroup.Item>
          <ListGroup.Item>{`${fixture.started ? 'Started' : 'Starts'} at: ${format(new Date(fixture.kickoff_time), 'PP, HH:mm')}`}</ListGroup.Item>
        </div>
      ))}
      </ListGroup>
      </Card>
    </div>
  )
}

