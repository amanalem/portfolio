import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

const NavStyle = styled.div`
  ul {
  }
`;

const NavBar = () => {
  return (
    <div>
      <Nav className="justify-content-center" activeKey="/about-me">
        <Nav.Item>
          <Nav.Link href="/about-me">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact-me">Contact Me</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBar;
