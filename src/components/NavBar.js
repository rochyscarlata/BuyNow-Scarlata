import React, { useState, useEffect } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
 
} from "react-bootstrap";
import Logo from "../assets/logoSecund.png";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img src={Logo} alt="logo" width="150" height="40" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" activeClassName="active">Inicio</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="/category/1">Bazar</NavDropdown.Item>
            <NavDropdown.Item href="/category/2">
              Deco de interior
            </NavDropdown.Item>
          </NavDropdown>
          <NavLink to="/contacto" className="nav-link" activeClassName="active">
            Contacto
          </NavLink>
          <NavLink to="/cart" className="nav-link" activeClassName="active">
            Carrito
          </NavLink>
        </Nav>
        <Button variant="dark">
        <CartWidget />
        </Button>
        </Navbar.Collapse>
    </Navbar>
 
  );
}

export default NavBar;
