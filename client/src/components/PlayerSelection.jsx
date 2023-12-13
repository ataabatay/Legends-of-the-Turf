
import { Form, useLoaderData, useActionData, useNavigate } from "react-router-dom"
import { useEffect, useState  } from 'react'
// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export default function PlayerSelection() {
  const res = useActionData()
  const allPlayersData = useLoaderData()
  const navigate = useNavigate()
  const [players, setPlayers] = useState([])

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

  const handleFormSubmit = (evt) => {
    
    const formData = new FormData(evt.target)

    // Convert the players object to a JSON string and append it to the form data
    players.forEach((playerId, index) => {
      formData.append(`players[${index}]`, playerId)
      
    })
    console.log('Form Data:', formData)
    
  }
console.log(players)
  useEffect(() => {
    console.log(res)
    if (res?.status === 202) {
      console.log('EDITED SUCCESSFULLY')
      navigate(`/myteam/${res.data._id}`)
    }
  }, [res, navigate])

  return (
    <>
      <h2>Unique turds for your team pick heavy hitter turds!</h2>
      <div>
        <Form className="form" method="POST" onSubmit={handleFormSubmit}>
          
          <label hidden htmlFor="name">
            teamName
          </label>
          <input type="text" name="name" placeholder="Team Name" />

          <label hidden htmlFor="image">
            Image
          </label>
          <input type="text" name="image" placeholder="Image" />
          
          <input type="hidden" name="players" value={JSON.stringify(players)} />
          <button className="btn btn-pink" type="submit">
            Edit
          </button>
        </Form>
      </div>

      <Container fluid>
        <Row className="team-list">
          {allPlayersData.map((player) => {
            const { _id, firstName, lastName, price, position } = player
            return (
              <Col
                key={_id}
                xs={6}
                md={4}
                lg={3}
                style={{ cursor: 'pointer' }}
                onClick={() => handlePlayerClick(_id)}
              >
                {firstName} {lastName} {price} {position}
                {players.includes(_id) ? ' (Selected)' : ''}
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}