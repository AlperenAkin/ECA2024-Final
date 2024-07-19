import React from 'react';
import './Header.css';
import logo from '../assets/eurocup.webp';  // Adjust the path if necessary

function Header() {
  return (
    <header className="header py-3">
      <div className="container text-center">
        <h1 className="header-text">UEFA ECA2024 Germany</h1>
        <img src={logo} alt="Logo" className="logo" />
        
      </div>
    </header>
  );
}

export default Header;


