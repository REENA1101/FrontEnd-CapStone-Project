import React from 'react';
import logo from '../images/logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" />
      <p>LITTLE LEMON RESTAURANT</p>
    </header>
  );
}

export default Header;