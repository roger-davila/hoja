import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser, demo, setDemo }) {
  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav className='NavBar'>
      {user ? (
        <>
          <Link className='menu-link' to={`/${user.name}/notes`}>Notes</Link>
          <Link className='menu-link' to={`/${user.name}/notebooks`}>Notebooks</Link>
          <Link className='menu-link' to="" onClick={handleLogOut}>Log Out</Link>
        </>
      ) : (
        <>
          <Link className='menu-link' to="" onClick={()=> setDemo(!demo)}>{demo ? 'Demo Page' : 'Back to Auth Page'}</Link>
        </>
      )}
    </nav>
  );
}