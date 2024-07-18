import React from 'react';
import logo from '../images/logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;