import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function Navigation() {

  // we need to pass the teamId so we can use it in backticks inside the myteam link or if teamId doesn't exist we send people to new team component

  return (
    <>
    <Navbar className="navbar" bg="primary" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/home"><button type='button' className='btn btn-primary'>Home</button></Nav.Link>
          <Nav.Link href="/myteam/1"><button type='button' className='btn btn-primary'>My Team</button></Nav.Link>
          <Nav.Link href="/rules"><button type='button' className='btn btn-primary'>Rules</button></Nav.Link>
          <Nav.Link href="/footballers"><button type='button' className='btn btn-primary'>Player Stats</button></Nav.Link>
          <Nav.Link href="#"><button type='button' className='btn btn-primary'>Sign out</button></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}
