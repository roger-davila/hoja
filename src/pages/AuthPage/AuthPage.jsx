import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import DemoPage from '../DemoPage/DemoPage';
import './AuthPage.css';

export default function AuthPage({ setUser, demo }) {
  function renderPage() {
    if (demo) return <DemoPage />
    else return <main className='main-container form-container'>{showSignUp ? <SignUpForm setUser={setUser} setShowSignUp={setShowSignUp} /> : <LoginForm setUser={setUser} setShowSignUp={setShowSignUp} />}</main>
  }
  const [showSignUp, setShowSignUp] = useState(true);
  return (
    <>
      {renderPage()}
    </>
  );
}