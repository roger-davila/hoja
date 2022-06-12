import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser, setShowSignUp }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <p>Enter your email and password to continue writing notes.</p>
        <div className='auth-input-container'>
          <label>Email</label>
          <input className='auth-input' type="text" name="email" value={credentials.email} onChange={handleChange} required />
        </div>
        <div className='auth-input-container'>
          <label>Password</label>
          <input className='auth-input' type="password" name="password" value={credentials.password} onChange={handleChange} required />
        </div>
        <button type="submit">Log In</button>
        <p>New to Hoja? <span className='form-switch' onClick={() => setShowSignUp(showSignUp => !showSignUp)}>Sign Up</span></p>
        <p className="error-message">{error}</p>
      </form>
    </>
  );
}