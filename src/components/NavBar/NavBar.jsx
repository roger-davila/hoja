import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav className='NavBar'>
      <Link to={`/${user.name}/notes`}>Notes</Link>
      <Link to={`/${user.name}/notes`}>Notebooks</Link>
      <Link to={`/${user.name}/notes`}>Tags</Link>
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}