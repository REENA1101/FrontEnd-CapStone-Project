import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`back-to-top ${showButton ? 'show' : ''}`}
      onClick={handleClick}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;
