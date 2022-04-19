import React, { useCallback, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ListUl, StarFill } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

export default function Header() {

  /** @const {Location} location The current url's data */
  const location = useLocation();

  /**
   * Returns true if main menu has to be displayed based on the current url
   * @returns {boolean}
   */
  const getShowMainMenu = useCallback((): boolean => {
    return !location.pathname.match(/\/ads\/[0-9]*/i);
  }, [location]);

  /** @const {boolean} showMainMenu If true, the main menu is displayed */
  const [showMainMenu, setShowMainMenu] = useState<boolean>( getShowMainMenu() );

  /** If the url changes, will check if main menu should be displayed */
  useEffect(() => {
    setShowMainMenu( getShowMainMenu() );
  }, [location, getShowMainMenu])


  // ------------------------------------------

  return (
    <header className={!showMainMenu ? 'd-none d-sm-block' : ''}>
      <Navbar className="shadow rounded-bottom" bg="light" expand="md" fixed="top">
        {showMainMenu &&
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
      </Navbar>
    </header>
  )
}