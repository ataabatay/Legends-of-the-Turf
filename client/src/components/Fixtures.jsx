import { useLoaderData } from 'react-router-dom';

export default function Fixtures() {
  const fixtures = useLoaderData();

  console.log('All Fixtures:', fixtures);

  const currentGameWeek = fixtures && fixtures.events && fixtures.events.length > 0
    ? fixtures.events[0]?.id
    : null;

  console.log('Current Game Week:', currentGameWeek);

  const weeklyFixtures = fixtures && fixtures.events
    ? fixtures.events.filter((fixture) => fixture.id === currentGameWeek)
    : [];

  console.log('Weekly Fixtures:', weeklyFixtures);

  return (
    <div>
      <h2>Fixtures Of The Week</h2>
      {weeklyFixtures.map((fixture) => (
        <div key={fixture.id}>
          <h3>{`${fixture.team_h} vs ${fixture.team_a}`}</h3>
          <p>{`${fixture.started ? 'Started' : 'Starts'} at: ${fixture.kickoff_time}`}</p>
        </div>
      ))}
    </div>
  );
}
