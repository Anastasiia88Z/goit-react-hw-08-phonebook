import React from 'react-dom';
import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { authSelectors } from '../redux/auth/auth-selectors';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar>
      <Nav>
        <NavLink exact to="/">
          Home page
        </NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </Nav>
    </Navbar>
  );
};
export default Navigation;
