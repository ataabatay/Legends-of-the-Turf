import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import green from '../assets/images/green.png'
import draw from '../assets/images/draw.png'
import red from '../assets/images/red.png'

export default function LeagueTable({leagueTable}) {

  return (
    <Container className='table-container'>
      <h2>Premier League Table</h2>
      <Table style={{maxWidth: '70vh'}}>
        <thead>
          <tr>
            <th>Position</th>
            <th></th>
            <th style={{textAlign: 'left'}}>Club</th>
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
              <td><img className='ltable-logo' src={team.crestUrl} alt={team.clubName} /></td>
              <td id='clubname' style={{marginTop: '500px'}}>{team.clubName}</td>
              <td>{team.played}</td>
              <td>{team.won}</td>
              <td>{team.drawn}</td>
              <td>{team.lost}</td>
              <td>{team.goalsFor}</td>
              <td>{team.goalsAgainst}</td>
              <td>{team.goalDifference}</td>
              <td style={{fontWeight: 'bold'}}>{team.points}</td>
              <td>{team.recentForm.map((result, idx) =>
                result === 'W' ? <img className='plt-logo' src={green} key={idx}/> :
                  result === 'D' ? <img className='plt-logo' src={draw} key={idx}/> :
                    result === 'L' ? <img className='plt-logo' src={red} key={idx}/> :
                      result)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ Container>
  )
}