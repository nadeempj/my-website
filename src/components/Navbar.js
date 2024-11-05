// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Nadeem P Jamal</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Summary</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;