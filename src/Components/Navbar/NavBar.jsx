import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/bag-front-view.png';
import navData from '../../data/NavData';
import ThemeToggle from '../DarkMode/ThemeToggle';

// style
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <NavLink to="/">
            <img src={logo} alt="logo" style={{ width: '50px', marginBottom: '1em' }} />
            <Navbar.Brand> GLITZ</Navbar.Brand>
          </NavLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {navData.map((val, i) => (
                <NavLink
                  to={val.link}
                  key={i}
                  className="nav-menu-links"
                  activeClassName="active_class"
                >
                  {val.title}
                  <img src={val.img} alt="" className="shopping-icon" />
                </NavLink>
              ))}
            </Nav>
            <ThemeToggle />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
