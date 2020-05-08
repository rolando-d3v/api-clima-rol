import React, {Fragment}  from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Clima App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
      </Navbar>
    </Fragment>
  );
}
