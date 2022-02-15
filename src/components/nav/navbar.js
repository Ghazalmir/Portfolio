import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navbar.module.css';
//Usage:  <CustomNavbar />


function CustomNavbar(){
  return(
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
  <Container>
    <Navbar.Brand href="#home" className={styles.myName}>Ghazal Mir's Portfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className={styles.Links} id="basic-navbar-nav">
      <Nav >
        <Nav.Link className={styles.link} href="#About">.aboutMe()</Nav.Link>
        <Nav.Link className={styles.link} href="#skills">.skills()</Nav.Link>
        <Nav.Link className={styles.link} href="#Projects">.projetcs()</Nav.Link>

        <div className={styles.linkedin}>
        <Nav.Link className={styles.link} href="https://linkedin.com/in/ghazalmir"><img src="https://img.icons8.com/ios-glyphs/480/9b9d9e/linkedin.png"/></Nav.Link>
        <Nav.Link className={`${styles.link} ${styles.hoverImg}`} href="https://linkedin.com/in/ghazalmir"><img src="https://img.icons8.com/ios-glyphs/480/ffffff/linkedin.png"/></Nav.Link>
        </div>
        <div className={styles.github}>
        <Nav.Link className={styles.link} href="https://github.com/Ghazalmir"><img src="https://img.icons8.com/ios-glyphs/480/9b9d9e/github.png"/></Nav.Link>
        <Nav.Link className={`${styles.link} ${styles.hoverImg}`} href="https://github.com/Ghazalmir"><img src="https://img.icons8.com/ios-glyphs/480/ffffff/github.png"/></Nav.Link>
        </div>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default CustomNavbar;
