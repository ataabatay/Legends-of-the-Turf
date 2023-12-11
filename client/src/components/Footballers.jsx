import { useLoaderData } from "react-router-dom"
import Table from "react-bootstrap/esm/Table"

export default function Footballers() {

  const allPlayers = useLoaderData().data
  console.log(allPlayers)

  return (
    <>
      <h1>Players</h1>
      <Table striped bordered hover>
        <thead>
          <tr>         
            <th>Name</th>
            <th>Position</th>
            <th>Team</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {allPlayers.map(player => {
            return (
              <tr key={player._id}>
                <td>{player.firstName} {player.lastName}</td>
                <td>{player.position}</td>
                <td>{player.teamName}</td>
                <td>{player.price}</td>
            </tr>)
          })}
        </tbody>
      </Table>
    </>
  )
}