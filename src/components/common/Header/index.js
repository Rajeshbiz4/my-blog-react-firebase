import React from 'react';
import './header.css';
import logo from "./../../../blog.avif" 
// You can create a separate CSS file for styling

const Header = ({ onLogout }) => {
  return (
    <header className="header">
      <a href="/">
      <div className="logo">
        <img src={logo} alt="Logo" /> {/* Update this path */}
      </div>
      </a>
      <nav className="nav">
        <ul>
          {/* <li>
            <a href="/">Home</a>
          </li> */}
          <li>
            <a href="/">Health</a>
          </li>
          <li>
            <a href="/">Wealth</a>
          </li>
          <li>
            <a href="/">Investment</a>
          </li>
          <li>
            <a href="/">Latest news</a>
          </li>

          <li>
            <a href="/">Govt scheme</a>
          </li>
        </ul>
      </nav>
      {/* <div className="user-menu">
        <a href="/">Profile</a>
        <button onClick={onLogout}>Logout</button>
      </div> */}
    </header>
  );
};

export default Header;