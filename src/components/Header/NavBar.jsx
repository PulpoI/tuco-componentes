import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget";

import logo from "../../assets/logoD.png";

const NavBar = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="100%"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <NavDropdown title="Remeras" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link>
                  <Link to="productos/Memes">Memes</Link>
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link>
                  <Link to="productos/Series">Series</Link>
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Precios" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Nav.Link href="#pricing">
                  <Link to="/remeras">Remeras</Link>
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Buzos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">COMBOS</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Servicios" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ¡Trae tu prenda!
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Descuentos emprendedores
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Envios</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Componente de icono carrito */}
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
