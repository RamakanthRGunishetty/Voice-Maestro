import React from 'react';
import {Navbar ,Nav ,Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import "bootstrap/dist/js/bootstrap.min.js";
import Frontline from './Frontline';
import Infoline from './Infoline';
import Workingline from './Workingline';
import Helpline from './Helpline';

export default function Header() {
  return (
    <div className="Navbar">
      <BrowserRouter>
      <Navbar bg="dark" variant="dark"
      sticky="top" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#Frontline">
            <img src="https://thumbs.dreamstime.com/b/rainbow-piano-480497.jpg" 
            alt = "Logo" width = "40px" height="40px" />{' '}
            Navbar</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav>
            <Nav.Link eventKey="1" as={Link} to="#Frontline">Frontline</Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="#Infoline">Infoline</Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="#Workingline">Workingline</Nav.Link>
            <Nav.Link eventKey="4" as={Link} to="#Helpline">Helpline</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Frontline/>
      <Infoline/>
      <Workingline/>
      <Helpline/>
      </BrowserRouter>
    </div>
  )
}