import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand"></div>
      <ul className="navbar-menu">
        <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
            <Link to="/experience" className="navbar-link">Experience</Link>
        </li>
        <li className="navbar-item">
            <Link to="/projects" className="navbar-link">Projects</Link>
        </li>
        {/* <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
        </li> */}
        </ul>
    </nav>
  );
};

export default Navbar;
