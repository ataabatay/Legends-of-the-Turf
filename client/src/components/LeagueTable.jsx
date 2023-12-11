import { useLoaderData } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import green from '../assets/images/green.png'
import draw from '../assets/images/draw.png'
import red from '../assets/images/red.jpg'

export default function LeagueTable({leagueTable}) {

  return (
    <Container className='table-container'>
      <h2>Premier League Table</h2>
      <Table>
        <thead>
          <tr>
            <th>Position</th>
            <th className='d-flex'>Club</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Pts</th>
            <th>Last 5</th>
          </tr>
        </thead>
        <tbody>
          {leagueTable.map(team => (
            <tr key={team.clubId}>
              <td>{team.position}</td>
              <td className='d-flex'><img className='ltable-logo' src={team.crestUrl} alt={team.clubName} />{team.clubName}</td>
              <td>{team.played}</td>
              <td>{team.won}</td>
              <td>{team.drawn}</td>
              <td>{team.lost}</td>
              <td>{team.goalsFor}</td>
              <td>{team.goalsAgainst}</td>
              <td>{team.goalDifference}</td>
              <td>{team.points}</td>
              <td>{team.recentForm.map(result =>
                result === 'W' ? <img className='plt-logo' src={green} /> :
                  result === 'D' ? <img className='plt-logo' src={draw} /> :
                    result === 'L' ? <img className='plt-logo' src={red} /> :
                      result)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ Container>
  )
}