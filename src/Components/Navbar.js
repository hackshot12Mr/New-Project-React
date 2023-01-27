import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { filterName, login } from "../redux/actions";

// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';


const linkStyle = {
  textDecoration: "none",
  color: "white",
};


function NavScrollExample() {  
    const { isAdmin, searchValue } = useSelector((state) => state);
    const dispatch = useDispatch();
    const handleSearch = (e) => dispatch(filterName(e.target.value));
    const handleLogin = () => dispatch(login());
    
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className="navbar-brand fw-bold fs-4">      <h4> {isAdmin ? "Welcome admin" : "welecome game shop"} </h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Product</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              value={searchValue}
              onChange={handleSearch}
              className="inp"
              type="text"
              placeholder="enter a movie to search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link> <Button className="btn btn-primary" onClick={handleLogin}>
          <Link style={linkStyle} to={isAdmin ? "/" : "/admin"}>
            {!isAdmin ? "Log In" : "Log Out"}
          </Link>
        </Button></Nav.Link>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default NavScrollExample;