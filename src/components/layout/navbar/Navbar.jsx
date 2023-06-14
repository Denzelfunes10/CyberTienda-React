// ------------- BOOTSTRAP -------------
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
// ------------- Material UI -------------
import SearchIcon from "@mui/icons-material/Search";
// ------------- COMMON -------------
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { UserWidget } from "../../common/userWidget/UserWidget";
// ------------- OTROS -------------
// import { productos } from "../../../productosMock"
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export function NavBar() {
  return (
    <header>
      <Navbar
        key={false}
        bg="light"
        expand={false}
        className={styles.navbarContainer}
      >
        <Container fluid>
          <Link to="/" className={styles.navBarTitle}>
            LA CYBER TIENDA
          </Link>
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
            <Link to="/MiCarrito" className={styles.LinkDecor}>
              <CartWidget />
            </Link>
            <Link to="/Login" className={styles.LinkDecor}>
              <UserWidget />
            </Link>
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
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`} >
                <p className={styles.navTitle}>CATEGORIAS</p>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className={styles.navBarItems}>
                <Link to="Categorias/Laptops" className={styles.LinkDecor}>
                  <Nav.Item>Laptops</Nav.Item>
                </Link>

                <Link
                  to="Categorias/PC de escritorio"
                  className={styles.LinkDecor}
                >
                  <Nav.Item>PC de escritorio</Nav.Item>
                </Link>

                <Link
                  to="Categorias/Almacenamiento"
                  className={styles.LinkDecor}
                >
                  <Nav.Item>Almacenamiento</Nav.Item>
                </Link>

                <Link to="Categorias/RAM" className={styles.LinkDecor}>
                  <Nav.Item>RAM</Nav.Item>
                </Link>

                <Link to="Categorias/Teclados" className={styles.LinkDecor}>
                  <Nav.Item>Teclados</Nav.Item>
                </Link>

                <Link to="Categorias/Mouses" className={styles.LinkDecor}>
                  <Nav.Item>Mouses</Nav.Item>
                </Link>

                <Link to="Categorias/Bocinas" className={styles.LinkDecor}>
                  <Nav.Item>Bocinas</Nav.Item>
                </Link>

                <Link to="Categorias/Audifonos" className={styles.LinkDecor}>
                  <Nav.Item>Audifonos</Nav.Item>
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}
