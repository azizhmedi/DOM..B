import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src="https://cdn.nba.com/logos/leagues/logo-nba.svg" alt="" />
            {/* Logo  */}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Games</Nav.Link>
            <Nav.Link href="#features">Schedule</Nav.Link>
            <Nav.Link href="#pricing">Watch</Nav.Link>
            <Nav.Link href="#pricing">News</Nav.Link>
            <Nav.Link href="#pricing">In-Season Tournament</Nav.Link>
            <Nav.Link href="#pricing"> Store</Nav.Link>
            <Nav.Link href="#pricing"> Tickets</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
