import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Landing.css";
import landingLogo from '../../assets/landing.png';

export default function Landing() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="landing-container">
      <header className="landing-header">
        <button className="btn login-btn" onClick={handleLogin}>Log in</button>        
      </header>
      <main className="landing-main">
        <div className="row">
          <div className="column">
            <h1>PlanOssa</h1>
            <p>Make your plans "ossa-m" with our online, business-centered planner.</p>
            <div className="cta-container">
              <button type="button" className="btn btn-primary" onClick={handleSignUp}>Sign up</button>
            </div>
          </div>
          <div className="column">
            <img className="logo" src={landingLogo} alt="landingLogo" />
          </div>
        </div>
      </main>
    </div>
  );
}
