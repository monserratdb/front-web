import React, { useState } from 'react';
import { updateUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const UpdateUserForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Obtener el token almacenado
    const id = localStorage.getItem('userId'); // Asegúrate de tener el ID del usuario almacenado al iniciar sesión
    try {
      await updateUser(id, { username, email, password }, token);
      alert('User updated successfully!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user');
    }
  };



  return (
    <div className="formCard">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="header">Update User</h2>
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
          />
        </div>
        <button type="submit" className="submitBtn">Update</button>
        <button type="button" className="returnBtn" onClick={handleBack}>Back to dashboard</button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
