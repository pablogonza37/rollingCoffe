import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../../assets/Coffee_Logo.png";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#" className="me-auto">
          <img
            src={logo}
            alt="logo rollingCoffe"
            className="img-fluid"
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to="/">
              Inicio
            </NavLink>
            <NavLink end className="nav-link" to="/administrador">
              Administrador
            </NavLink>
            <NavLink end className="nav-link" to="/registro">
              Registro
            </NavLink>
            <NavLink end className="nav-link" to="/login">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
