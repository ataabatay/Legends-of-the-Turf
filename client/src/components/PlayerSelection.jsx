
import { Form, useLoaderData, useActionData, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Table } from "react-bootstrap"

// Components
import Footballers from "./Footballers"


export default function PlayerSelection() {

  // ! Helpers 
  const res = useActionData()
  const navigate = useNavigate()

  // * Loader data
  const allPlayersData = useLoaderData()

  // ! States
  const [selectedPlayers, setSelectedPlayers] = useState([])

  // ! Functions
  const handlePlayerClick = (playerId) => {
    // Check the player ID is already in the array
    if (!players.includes(playerId)) {
      // If not then add it to the array
      setPlayers([...players, playerId])
    } else {
      // If it's already in the array, remove it
      setPlayers(players.filter((id) => id !== playerId))
    }
  }

  // const handleFormSubmit = (evt) => {
  //   const formData = new FormData(evt.target)
  //   // Convert the players object to a JSON string and append it to the form data
  //   players.forEach((playerId, index) => {
  //     formData.append(`players[${index}]`, playerId)
  //   })
  //   console.log('Form Data:', formData)
  // }

  // ! Effects
  
  useEffect(() => {
    if (res?.status === 202) {
      console.log('EDITED SUCCESSFULLY')
      navigate(`/myteam/${res.data._id}`)
    }
  }, [res, navigate])

  return (
    <>
      {/* <div>
        <Form className="form" method="POST" onSubmit={handleFormSubmit}></Form>
      </div> */}

      <div className="selection-screen">
        <section className="selected-players">
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Player</th>
                <th>Id</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {selectedPlayers.map((player, idx) => {
                return (
                    <tr key={idx}>
                      <td><img style={{width: '40px'}} src={player.teamLogo} alt='team-logo'></img></td>
                      <td>{player.lastName} {player.position} {player.teamName}</td>
                      <td>{player.id}</td>
                      <td>{player.price}</td>
                    </tr>
                )
              })}
            </tbody>
          </Table>
        </section>

        <section className="available-players">
          <Footballers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        </section>
      </div>

    </>
  )
}