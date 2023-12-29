
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar expand="lg" className=" navbar navbar-expand-lg navbar-light position-fixed px-5 py-3 ">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>Mostudio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link className="nav-link active nav-text" aria-current="page" to={"/"}>Home</Link >
          <Link className="nav-link active nav-text" as={Link} to={"works"}>Works</Link >
          <Link className="nav-link active nav-text" as={Link} to={"blogs"}>Blogs</Link >
          <Link className="nav-link active nav-text" as={Link} to={"contact"}>Contact</Link >
          <Link className="nav-link active nav-text" as={Link} to={"login"}>Log In</Link >
          <Link className="nav-link active nav-text" as={Link} to={"signup"}>Sign Up</Link >
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;




