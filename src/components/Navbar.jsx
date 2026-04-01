import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Camera, Guitar, ShoppingCart, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ toggleCart, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <Camera size={24} className="logo-icon" />
          <span>LuminaStudio</span>
        </Link>

        <nav className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <NavLink to="/" onClick={closeMenu} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/services" onClick={closeMenu} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink>
          <NavLink to="/booking" onClick={closeMenu} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Booking</NavLink>
          <NavLink to="/store" onClick={closeMenu} className={({isActive}) => isActive ? 'nav-link active store-link' : 'nav-link store-link'}>
            <Guitar size={18} /> Store
          </NavLink>
        </nav>

        <div className="navbar-actions">
          <button className="cart-btn" onClick={toggleCart} aria-label="Open Cart">
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          
          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
