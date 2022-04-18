import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <header>
      <Navbar className="shadow rounded-bottom" bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </header>
  )
}