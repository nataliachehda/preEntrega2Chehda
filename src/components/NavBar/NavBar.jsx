import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  const imgAbu = '../img/abuelarte.svg';

  return (
    <Navbar expand="lg" variant="light" className="navbarContainer customNavbar">
      <Navbar.Brand as={Link} to="/">
        <img className="imgAbu" src={imgAbu} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-between">
        <Nav>
          <Nav.Link as={NavLink} to="/categoria/1" activeClassName="activeLink">
            Amigurumis
          </Nav.Link>
          <Nav.Link as={NavLink} to="/categoria/2" activeClassName="activeLink">
            Juguetes
          </Nav.Link>
          <Nav.Link as={NavLink} to="/categoria/3" activeClassName="activeLink">
            Ropa
          </Nav.Link>
          <Nav.Link as={NavLink} to="/categoria/4" activeClassName="activeLink">
            Decoración
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;
