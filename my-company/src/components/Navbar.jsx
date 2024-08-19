import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#f0f0f0', textAlign: 'center' }}>
      <Link to="/" style={{ margin: '10px', textDecoration: 'none', color: 'black' }}>Home</Link>
      <Link to="/about" style={{ margin: '10px', textDecoration: 'none', color: 'black' }}>About</Link>
      <Link to="/services" style={{ margin: '10px', textDecoration: 'none', color: 'black' }}>Services</Link>
      <Link to="/contact" style={{ margin: '10px', textDecoration: 'none', color: 'black' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
