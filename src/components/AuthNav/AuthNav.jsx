import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function AuthNav() {
  return (
    <Navbar>
      <Nav>
        <NavLink to="/register" className="link" activeClassName="activeLink">
          Register
        </NavLink>
        <NavLink to="/login" className="link" activeClassName="activeLink">
          Log in
        </NavLink>
      </Nav>
    </Navbar>
  );
}
