import { Link } from "react-router-dom";
import * as usersService from '../../utilities/users-service';

export default function NavBar( {user, setUser} ) {
  const handleLogOut = () => {
    usersService.logOut();
    setUser(null);
  }
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      <Link to="/orders/new">Demo</Link>
      <span>Welcome, {user.name}</span>
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}