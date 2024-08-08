import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/api'; 
import './LogInForm.css';
import { AuthContext } from '../../auth/AuthContext';

const LogInForm = () => {
  const {token, setToken} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(email, password);
      setToken(response.data.access_token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Invalid email or password');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="formCard">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="header">Log In</h2> {/* Cambiado a Sign In */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} 
            className="input"
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)} 
            className="input"
            required 
          />
        </div>
        <button type="submit" className="submitBtn">Log In</button>
        <button type="button" className="returnBtn" onClick={handleBack}>Back to Landing</button>
      </form>
    </div>
  );
};

export default LogInForm;
