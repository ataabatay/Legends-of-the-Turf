import { useLoaderData } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

export default function LeagueTable(){
  const leagueTable = useLoaderData()
console.log(leagueTable)


const tableContent = leagueTable.standings

return (
<Container>
<h2>Premier League Table</h2>
  <Table>
    <thead>
      <tr>
        <th>Position</th>
        <th>Club</th>
        <th>Played</th>
        <th>Points</th>
        <th>Won</th>
        <th>Draw</th>
        <th>Lost</th>
        <th>Goal Difference</th>
        <th>Recent form</th>
      </tr>
    </thead>
    <tbody>
      {tableContent?.standings?.[0].table.length
      ? tableContent.standings[0].table.map(team => (
        <tr key={team.team.id}>
        <td>{team.position}</td>
        <td>{team.team.name}</td>
        <td>{team.playedGames}</td>
        <td>{team.points}</td>
        <td>{team.won}</td>
        <td>{team.draw}</td>
        <td>{team.lost}</td>
        <td>{team.goalDifference}</td>
        
        </tr>
      ))
    : <tr><td>No data</td></tr>}
    </tbody>
  </Table>

</ Container>
)
}