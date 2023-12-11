import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
// import { activeUser } from '../../utils/helpers/common'



export default function Navigation() {

  const navigate = useNavigate
  const { teamId } = useParams()
    
  // const user = activeUser()
  // console.log('User Information:', user)
  const handleClick = () => {
    if (user && user.teamId) {
      navigate(`/myteam/${teamId}`)
    } else {
      navigate('/myteam/newteam')
    }
  };
  return (
    <>
    <Navbar className="navbar" bg="primary" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/home"><button type='button' className='btn btn-primary'>Home</button></Nav.Link>
          <Nav.Link onClick={handleClick}><button type='button' className='btn btn-primary'>My Team</button></Nav.Link>
          <Nav.Link href="/rules"><button type='button' className='btn btn-primary'>Rules</button></Nav.Link>
          <Nav.Link href="/footballers"><button type='button' className='btn btn-primary'>Player Stats</button></Nav.Link>
          <Nav.Link href="#"><button type='button' className='btn btn-primary'>Sign out</button></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}
