import './styles/style.css';
import React from "react";
import NavLink from "./NavLink";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import homeIcon from "../../assets/images/HomeIcon.png";
import destIcon from "../../assets/images/DestIcon.png";
import spaceshipIcon from "../../assets/images/SpaceshipIcon.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


export default function NavBar() {

  return (
    <div className="navbar-container">
      <div className="navbar-item-container">
        <div className="navBar">
          <Navbar expand="lg" bg="transparent" variant="dark" className="py-0" >
            <Container className="px-0">
              <Navbar.Brand href="/" className="fs-1 py-0">
                <strong>C</strong>O
                <strong>SM</strong>O<strong>S</strong>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="cosmos-navbar" />
              <Navbar.Collapse id="cosmos-navbar">
                <Nav className="me-auto mx-3">
                  <NavLink path="/" text="Home" icon={homeIcon} />
                  <NavLink path="/destinations" text="Destinations" icon={destIcon} />
                  <NavLink path="/spaceships" text="Spaceships" icon={spaceshipIcon} />
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <ShoppingCart />
        </div>
      </div>

      {/* <Navbar bg="#141922">

            </Navbar> */}
    </div>

  )
}
