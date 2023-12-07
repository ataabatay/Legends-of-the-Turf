import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function Navigation() {
  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#myTeam">My Team</Nav.Link>
          <Nav.Link href="#rules">Rules</Nav.Link>
          <Nav.Link href="#signOut">Sign out</Nav.Link> 
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}
