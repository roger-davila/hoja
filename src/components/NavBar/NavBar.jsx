import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav>
      <Link to={`/${user.name}/notes`}>Notes</Link>
      <span>Welcome, {user.name}</span>
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}