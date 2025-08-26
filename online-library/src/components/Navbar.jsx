import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="logo">Digital Library</div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/books" className={location.pathname.includes('/books') ? 'active' : ''}>Browse Books</Link>
        <Link to="/add-book" className={location.pathname === '/add-book' ? 'active' : ''}>Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;
