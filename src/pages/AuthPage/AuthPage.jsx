import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(true);
  return (
    <main className='main-container form-container'>
      {showSignUp ?
        <SignUpForm setUser={setUser} setShowSignUp={setShowSignUp} />
        :
        <LoginForm setUser={setUser} setShowSignUp={setShowSignUp} />
      }
    </main>
  );
}