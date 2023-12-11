import { useLoaderData } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

export default function LeagueTable(){
  const tableleague = useLoaderData()
console.log(tableleague)
const plTable = tableleague?.items?.[0]?.table

const tableContent = plTable?.rows || []

return (
<Container>
<h2>Premier League Table</h2>
{tableContent.length > 0 ? (
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
      {tableContent.map(row => (
        <tr key={row.position}>
        <td>{row.position}</td>
        <td>{row.clubName}</td>
        <td>{row.played}</td>
        <td>{row.points}</td>
        <td>{row.won}</td>
        <td>{row.draw}</td>
        <td>{row.lost}</td>
        <td>{row.goalDifference}</td>
        <td>{row.recentForm?.length > 0 ? row.recentForm.join(' ') : '--'}</td>
        </tr>
      ))}
    </tbody>
  </Table>
  ) : (
    <p>{plTable ? 'No data available' : 'Loading... '}</p>
  )}
</ Container>
)
}