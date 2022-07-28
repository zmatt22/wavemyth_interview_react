import React from "react";
import Nav from "react-bootstrap/Nav";

export default function NavLink({ path, text, icon }) {
  return (
    <Nav.Link href={path} className="justify-content-start mx-2">
      <img src={icon} alt="navbar item" />
      {text}
    </Nav.Link>
  )
}