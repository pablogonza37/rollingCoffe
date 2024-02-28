import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../../assets/Coffee_Logo.png";
import { Link, NavLink, useNavegate } from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavegate();
  const logout = () => {
    sessionStorage.removeItem("usuarioRollingCoffee");
    setUsuarioLogueado("");
    navegacion("/");
  };

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
            {usuarioLogueado !== "" ? (
              <>
                <NavLink end className="nav-link" to="/administrador">
                  Administrador
                </NavLink>
                <Button className="nav-link" variant="link">
                  logout
                </Button>
              </>
            ) : (
              <>
                <NavLink end className="nav-link" to="/registro">
                  Registro
                </NavLink>
                <NavLink end className="nav-link" to="/login">
                  Login
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
