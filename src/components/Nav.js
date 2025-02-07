import React, { useState } from 'react';
import './Nav.css'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const Nav = () => {
  // Define state
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar sticky top-0">
      <div className="nav">RADIO NITROZ</div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/">EVENTS</Link></li>
      </ul>
    </div>
  );
};

export default Nav;
