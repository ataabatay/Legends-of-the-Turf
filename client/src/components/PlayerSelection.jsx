
import { Form, useActionData, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { getToken } from "../../utils/helpers/common"

// Bootstrap Components
import { Table } from "react-bootstrap"

// Components
import Footballers from "./Footballers"
import axios from "axios"

export default function PlayerSelection() {

  // ! Helpers
  const res = useActionData()
  const navigate = useNavigate()
  const token = getToken()
  async function CurrentUserId() {
    try {
      const profile = await axios.get('/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return profile.data
    } catch (error) {
      console.log(error)
      return error
    }
  }

  const getCurrentUserTeamId = async () => {
    const user = await CurrentUserId()
    console.log(user._id)
    return user.teamsCreated[0]._id
  }

  // ! States
  const [selectedPlayers, setSelectedPlayers] = useState([])

  // ! Effects
  async function handeClick() {
    const teamId = await getCurrentUserTeamId()
    setTimeout(()=> {
      navigate(`/myteam/${teamId}`)
    }, 400)
  }

  return (
    <>
      <div className="selection-screen">
        <div className="player-selection-and-button">
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
                      <td><img style={{ width: '40px' }} src={player.teamLogo} alt='team-logo'></img></td>
                      <td>{player.lastName} {player.position} {player.teamName}</td>
                      <td>{player.id}</td>
                      <td>{player.price}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </section>
          <Form
            className="form"
            method="PUT"
          >
            <input type="hidden" name='players' value={selectedPlayers.map(player => player.id)}></input>
            <button type='submit' value='Make Transfers' onClick={handeClick}>Make Transfers</button>
          </Form>
        </div>
        <section className="available-players">
          <Footballers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        </section>
      </div >
    </>
  )
}