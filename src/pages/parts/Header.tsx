import React, { useCallback, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ArrowLeftShort, ChevronLeft, ListUl, StarFill } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Header() {

  /** @const {Location} location The current url's data */
  const location = useLocation();

  /**
   * Returns the go back link based on the current url
   * @returns {string}
   */
  const getGoBackLink = useCallback((): string => {
    if (location.pathname.match(/\/ads\/[0-9]*/i)) {
      return '/';
    } else {
      return '';
    }
  }, [location]);

  /** @const {string} goBackLink The link that appears instead of the main menu */
  const [goBackLink, setGoBackLink] = useState<string>( getGoBackLink() );

  /** If the url changes, will generate the go back link */
  useEffect(() => {
    setGoBackLink( getGoBackLink() );
  }, [location, getGoBackLink])


  // ------------------------------------------

  return (
    <header>
      <Navbar className="shadow rounded-bottom" bg="light" expand="md" fixed="top">
        {!goBackLink &&
          <>
            <Navbar.Toggle aria-controls="main-menu" />

            <Navbar.Collapse id="main-menu" className="fixed-top">
              <Nav className="flex-column p-3 w-100 rounded bg-light shadow">
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
          </>
        }

        {goBackLink && 
          <Link className="btn btn-secondary fixed-top" to={goBackLink}>
            <span className="d-none d-sm-inline"><ArrowLeftShort /> Vissza</span>
            <span className="d-sm-none"><ChevronLeft /></span>
          </Link>
        }
      </Navbar>
    </header>
  )
}