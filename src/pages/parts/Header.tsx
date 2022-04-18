import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ListUl, StarFill } from 'react-bootstrap-icons';

export default function Header() {
  return (
    <header>
      <Navbar className="shadow rounded-bottom" bg="light" expand="md" fixed="top">
        <Navbar.Toggle aria-controls="main-menu" />

        <Navbar.Collapse id="main-menu" className="fixed-top">
          <Nav defaultActiveKey="/" className="flex-column p-3 w-100 rounded bg-light shadow">
            <LinkContainer to="/">
              <Nav.Link>
                <ListUl /> Lista
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/favorites">
              <Nav.Link>
                <StarFill /> Kedvencek
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}