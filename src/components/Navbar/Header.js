import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Header.css'
import Frontline from '../Frontline'
import Infoline from '../Infoline'
import Workline from '../Workline'
import Helpline from '../Helpline'
// import Log from '../login'
// import Footer from '../Footer/Footer'
import Footer from '../Foot/Footer'

export default function Header() {
  return (
    <div className="Navbar">
      <BrowserRouter>
        <Navbar
          bg="dark"
          variant="dark"
          sticky="top"
          expand="lg"
          collapseOnSelect
        >
          <Container>
            <Navbar.Brand href="#Frontline">
              <img
                src="https://thumbs.dreamstime.com/b/rainbow-piano-480497.jpg"
                alt="Logo"
                width="40px"
                height="40px"
              />{' '}
              Navbar
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="container-fluid">
                <Nav.Link
                  eventKey="1"
                  as={Link}
                  to="#Frontline"
                  className="custom-link"
                  title="Frontline"
                >
                  &nbsp;&nbsp;Frontline
                </Nav.Link>
                <Nav.Link
                  eventKey="2"
                  as={Link}
                  to="#Infoline"
                  className="custom-link"
                  title="Infoline"
                >
                  &nbsp;&nbsp;Infoline
                </Nav.Link>
                <Nav.Link
                  eventKey="3"
                  as={Link}
                  to="#Workline"
                  className="custom-link"
                  title="Workline"
                >
                  &nbsp;&nbsp;Workline
                </Nav.Link>
                <Nav.Link
                  eventKey="4"
                  as={Link}
                  to="#Helpline"
                  className="custom-link"
                  title="Helpline"
                >
                  &nbsp;&nbsp;Helpline
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Frontline />
        <Infoline />
        <Workline />
        <Helpline />
        <Footer />
      </BrowserRouter>
    </div>
  )
}
