import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom'
import { activeUser, getToken } from '../../utils/helpers/common'
import axios from 'axios'
import { useEffect } from 'react'


export default function Navigation({allTeams}) {

  const navigate = useNavigate()

  // get the details of the active user from id
  const activeUserId = activeUser()
  const token = getToken()
  let activeUserTeamId = null


  // fetch the teamId given the userId
  const getActiveUserTeamId = async () => {
    try {
      const res = await axios.get('/api/profile', {headers: {
        Authorization: `Bearer ${token}`
      }})
      return res.data.teamsCreated[0]._id
    } catch (error) {
      console.log(error)
    }
  }

  const assignId = async () => {
    activeUserTeamId = await getActiveUserTeamId()
    console.log(activeUserTeamId)
  }
  assignId()


  
  const handleClick = () => {
    if (!activeUserId ) {
      navigate('/myteam/newteam')
    } else {
      navigate(`/myteam/${activeUserTeamId}`)
    }
  };
  return (
    <>
    <Navbar className="navbar" bg="primary" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/home"><button type='button' className='btn btn-primary'>Home</button></Nav.Link>
          <Nav.Link onClick={handleClick}><button type='button' className='btn btn-primary'>My Team</button></Nav.Link>
          <Nav.Link href="/footballers"><button type='button' className='btn btn-primary'>Player Stats</button></Nav.Link>
          <Nav.Link href="/rules"><button type='button' className='btn btn-primary'>Rules</button></Nav.Link>
          <Nav.Link href="#"><button type='button' className='btn btn-primary'>Sign out</button></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

