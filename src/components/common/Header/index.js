import React from 'react';
import './header.css';
import logo from "./../../../download.jpeg" 
// You can create a separate CSS file for styling

const Header = ({ onLogout }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" /> {/* Update this path */}
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="user-menu">
        <a href="/profile">Profile</a>
        <button onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;