import React from 'react';
import { Camera, Video, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <Camera size={28} className="logo-icon" />
            <span>LuminaStudio</span>
          </div>
          <p className="footer-tagline">
            Elevating your sound and vision. Original music videos, creative covers, and premium gear for artists.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Video"><Video size={20} /></a>
            <a href="#" aria-label="Camera"><Camera size={20} /></a>
            <a href="#" aria-label="Mail"><Mail size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Services</h4>
            <a href="/services">Music Video Production</a>
            <a href="/services">Cover Video Songs</a>
            <a href="/booking">Book a Session</a>
          </div>

          <div className="link-group">
            <h4>Store</h4>
            <a href="/store">All Guitars</a>
            <a href="/store">Acoustic Guitars</a>
            <a href="/store">Electric Guitars</a>
          </div>

          <div className="link-group">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} LuminaStudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
