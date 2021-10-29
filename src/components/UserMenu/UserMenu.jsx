import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import { logOut } from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Navbar>
      <p className="welcome">Welcome, {name}</p>
      <button
        className="btn-logout"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Sign out
      </button>
    </Navbar>
  );
}
