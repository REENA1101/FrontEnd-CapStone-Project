import React, { useState, useEffect } from 'react';
import Header from '../component/Header';

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const scrollThreshold = 100; // Customizable scroll threshold

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
      <ul >
          <Header />
              <div className="search-container">
                <input type="text" placeholder="Search"></input>
                {/* <button type="submit"><i class="fa fa-search"></i></button> */}
              </div>
                  <li ><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/bookingPage">Bookings</a></li>
                  <li ><a href="/contact">Contact</a></li>
                  <li ><a href="/chicago">Chicago</a></li>
                  </ul>
    </nav>
  );
};

export default Navigation;



