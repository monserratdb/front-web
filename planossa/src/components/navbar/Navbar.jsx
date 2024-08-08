import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/docs">Docs</Link></li>
        <li><img className="logo" src={Logo} alt="Planossa Logo" /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
