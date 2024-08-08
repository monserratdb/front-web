import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.css';
import { register } from '../../services/api';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('manager'); // Por defecto, el rol es 'manager'
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await register({ email, password, username, role });
      if (response.status === 201) {
        alert('User created successfully!');
        navigate('/dashboard');
      }
    } catch (error) {
      alert(`Error! ${error.response.data}`);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="formCard">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="header">Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="input"
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
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
            onChange={(e) => setPassword(e.target.value)} 
            className="input"
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select 
            id="role" 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            className="input"
            required
          >
            <option value="manager">manager</option>
            <option value="worker">worker</option>
            <option value="team leader">team leader</option>
            <option value="admin">admin</option>
          </select>
        </div>
        <button type="submit" className="submitBtn">Sign Up</button>
        <button type="button" className="returnBtn" onClick={handleBack}>Back to Landing</button>
      </form>
    </div>
  );
};

export default SignUpForm;
