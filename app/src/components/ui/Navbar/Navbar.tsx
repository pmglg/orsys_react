import React from "react";
import styles from "./Navbar.module.css";
import { Container, Nav, Navbar as NavBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router";
interface INavbarProps {
  parentStyle?: React.CSSProperties;
}
const Navbar: React.FC<INavbarProps> = ({ parentStyle }) => {
  return (
    <div className={styles.Navbar} style={parentStyle} data-testid="Navbar">
      <NavBar bg="primary" data-bs-theme="dark">
        <Container>
          <Link className="navbar-brand" to="/">Home</Link>
          <Nav className="me-auto">
            <Link className="nav-link" to="/thumbnail">Thumbnail</Link>
            <Link className="nav-link" to="/editor">New</Link>
            <Link className="nav-link" to="/editor/3">Edit:3</Link>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
