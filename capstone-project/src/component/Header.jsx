import React from 'react';
import logo from '../images/logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" />
      <p style={{marginLeft:"-200px"}}>Little Lemon Restaurant</p>
    </header>
  );
}

export default Header;