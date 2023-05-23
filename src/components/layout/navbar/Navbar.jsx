import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CartWidget } from "../../common/CartWidget";
import styles from "./NavBar.module.css";
import { UserWidget } from "../../common/UserWidget";
import SearchIcon from "@mui/icons-material/Search";

export function NavBar() {
  return (
    <>
      <Navbar
        key={false}
        bg="light"
        expand={false}
        className={styles.navbarContainer}
      >
        <Container fluid>
          <Navbar.Brand className={styles.navBarTitle} href="#">
            LA CYBER TIENDA
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className={styles.searchBar}
              aria-label="Search"
            />
            <Button variant="outline-secondary">
              <SearchIcon />
            </Button>
          </Form>
          <div className="d-flex">
            <CartWidget />
            <UserWidget />
          </div>
          <Navbar.Toggle
            className={styles.btnHam}
            aria-controls={`offcanvasNavbar-expand-${false}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                CATEGORIAS
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Servicio Técnico</Nav.Link>
                <Nav.Link href="#action2">Clases</Nav.Link>
                <NavDropdown
                  title="Nuestros Productos"
                  id={`offcanvasNavbarDropdown-expand-${false}`}
                >
                  <NavDropdown.Item href="#action3">Hardware</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Software</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Gaming</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
