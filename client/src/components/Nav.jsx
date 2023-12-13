import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom'
import { activeUser, getToken, removeToken } from '../../utils/helpers/common'
import axios from 'axios'

export default function Navigation() {

  const navigate = useNavigate()

  // get the details of the active user from id
  const token = getToken()
  let activeUserTeamId = null

  // fetch the teamId given the userId
  const getActiveUserTeamId = async () => {
    try {
      let response = await axios.get('/api/profile', {headers: {
        Authorization: `Bearer ${token}`
      }})
      if (!response) {
        response = null
        return response
      }
      return response.data.teamsCreated[0]._id
    } catch (error) {
      console.log(error)
    }
  }
  const assignId = async () => {
    activeUserTeamId = await getActiveUserTeamId()
  }
  assignId()

  const handleClick= (e) => {
    if (e.target.id !== '/myteam') {
      navigate(`${e.target.id}`)
    } else {
      if (!activeUserTeamId ) {
        navigate('/myteam/newteam')
      } else {
        navigate(`/myteam/${activeUserTeamId}`)
      }
    }
  }

  
  const handleSignOut = () => {
    removeToken()
    navigate('/signout')
  }

  return (
    <>
    <Navbar className="navbar" bg="primary" data-bs-theme="dark">
      <Container fluid style={{ paddingLeft: 0}}>
        <Nav className="me-auto">
          <Nav.Link onClick={handleClick}><button type='button' className='btn btn-primary' id='/home'>Home</button></Nav.Link>
          <Nav.Link onClick={handleClick}><button type='button' className='btn btn-primary' id='/myteam'>My Team</button></Nav.Link>
          <Nav.Link onClick={handleClick}><button type='button' className='btn btn-primary' id='/footballers'>Player Stats</button></Nav.Link>
          <Nav.Link onClick={handleClick}><button type='button' className='btn btn-primary' id='/rules'>Rules</button></Nav.Link>
          <Nav.Link onClick={handleSignOut}><button type='button' className='btn btn-primary' id='/signout'>Sign out</button></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

