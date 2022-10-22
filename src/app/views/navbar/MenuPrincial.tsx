import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function MenuPrincial(): JSX.Element {
  return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to={"/"}>Papeleria Soho</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
          </Nav>

          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
            <Nav.Link as={NavLink} to={"/Clientes"}>Clientes</Nav.Link>
            <Nav.Link as={NavLink} to={"/pricing"}>Productos</Nav.Link>

            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to={"/Productos"}>Listado</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={"/Ventas"}>Action</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar> 
  );
}

export {MenuPrincial};