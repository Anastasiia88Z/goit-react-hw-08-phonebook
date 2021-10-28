import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function AuthNav() {
  return (
    <Navbar>
      <Nav>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Log in</NavLink>
      </Nav>
    </Navbar>
  );
}
