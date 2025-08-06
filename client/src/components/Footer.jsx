import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>About FarmNest</h3>
          <p>
            FarmNest is your all-in-one platform for smarter, profitable, and
            connected farming. Empowering farmers across the country.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/market">Marketplace</a></li>
            <li><a href="/community">Community</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: support@farmnest.in</p>
          <p>Phone: +91-93731-20370</p>
          <p>Location: Pune, Maharashtra</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FarmNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
