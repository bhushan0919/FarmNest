import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // simulate auth state
  const menuRef = useRef();

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const handleLoginLogout = () => {
    // Simulate login/logout toggle
    setIsLoggedIn(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">FarmNest</Link>
      </div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`} ref={menuRef}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/marketplace" onClick={() => setMenuOpen(false)}>Marketplace</Link>
        {/* {isLoggedIn && userRole === 'farmer' && (
          <li><Link to="/community">Community</Link></li>
        )} */}
<Link to="/community" onClick={() => setMenuOpen(false)}>Community</Link>
        {isLoggedIn ? (
          <button className="auth-button" onClick={handleLoginLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
          </>
        )}
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'rotate1' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'fade' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'rotate2' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
