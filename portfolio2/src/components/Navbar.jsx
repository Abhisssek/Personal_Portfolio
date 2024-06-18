import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className="container">
        <div className="main-nav">
          <div className="brand-logo">
            <img src="../img/brandimg.png" alt="" />
          </div>
          <div className="hamburger-menu" onClick={toggleMenu}>
              <i class="fa-solid fa-bars"></i>
          </div>
          <div className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <Link to="/" className='nav-links'>Home</Link>
              <Link to="/about" className='nav-links'>About</Link>
              <Link to="/portfolio" className='nav-links'>Portfolio</Link>
              <Link to="/blog" className='nav-links'>Blog</Link>
              <Link to="/services" className='nav-links'>Services</Link>
            </ul>
            <div className="nav-btn">
              <Link to="/contact"><button className='secondary-btn'>Contact</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
