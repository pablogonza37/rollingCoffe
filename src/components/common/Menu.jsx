import { Nav, Navbar, Container, Button } from "react-bootstrap";
import logo from "../../assets/Coffee_Logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("usuarioRollingCoffee");
    setUsuarioLogueado("");
    navegacion("/");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#" className="me-auto" as={Link} to="/">
          <img
            src={logo}
            alt="logo rollingCoffe"
            className="img-fluid"
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <NavLink end className="nav-link linkMenu ps-2" to="/">
              Inicio
            </NavLink>
            <NavLink end className="nav-link linkMenu ps-2" to="/contacto">
              Contacto
            </NavLink>
            <NavLink end className="nav-link linkMenu ps-2" to="/quienesSomos">
              Quienes somos?
            </NavLink>
            {usuarioLogueado !== "" && (
              <NavDropdown title="Administrador" className="linkMenu ps-2" id="collapsible-nav-dropdown">
                <NavLink end className="nav-link" to="/administrador/productos">
                  Productos
                </NavLink>
                <NavLink end className="nav-link" to="/administrador/usuarios">
                  Usuarios
                </NavLink>
              </NavDropdown>
            )}
          </Nav>
          {usuarioLogueado === "" && (
            <Nav>
              <NavLink end className="nav-link linkMenu ps-2" to="/registro">
                Registro
              </NavLink>
              <NavLink
                end
                className="nav-link ps-2 text-white text-center bg-dark btnSesion rounded"
                to="/login"
              >
                Iniciar sesión
              </NavLink>
            </Nav>
          )}
          <Nav>
            {usuarioLogueado !== "" && (
              <Button className="nav-link text-white  bg-dark btnSesion rounded" onClick={logout}>
                Cerrar sesión
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
