import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./MyNav.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const MyNav = () => {
  return (
    <Router>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="NavBackGround"
      >
        <Container>
          <Navbar.Brand href="#home">BBCCx</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Link1">Link1</Nav.Link>
              <Nav.Link href="#Link2">Link2</Nav.Link>
            </Nav>
            <Nav>
              {/* <Nav.Link href="#Login">Sign In</Nav.Link>
              <Nav.Link href="#Register">Register</Nav.Link> */}
              <Link to="/signin">Sign In</Link>
              <Link to="/register">Register</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/" element={<div></div>} />
        </Routes>
      </Navbar>
    </Router>
  );
};

export default MyNav;
