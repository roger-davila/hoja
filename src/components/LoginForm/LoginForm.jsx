import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
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
        <div>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required placeholder='Email'/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required placeholder='Password'/>
        </div>
        <button type="submit">LOG IN</button>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </>
  );
}