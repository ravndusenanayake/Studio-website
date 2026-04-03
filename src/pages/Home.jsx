import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star } from 'lucide-react';
import PortfolioGallery from '../components/PortfolioGallery';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="hero-badge">Creative Visuals & Audio</span>
          <h1 className="hero-title">
            Bring Your <span className="text-highlight">Vision</span> To Life
          </h1>
          <p className="hero-subtitle">
            AN Studio specializes in original music videos, breathtaking cover songs, and providing artists with premium guitars. Elevate your art to the next level.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary">
              Explore Services <ArrowRight size={20} />
            </Link>
            <Link to="/booking" className="btn btn-outline">
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Expertise</h2>
            <p>We blend cinematic visuals with pristine audio quality.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Play size={32} /></div>
              <h3>Original Music Videos</h3>
              <p>Top-tier production quality from conceptualization to the final edit, tailored uniquely for your sound.</p>
              <div className="feature-actions" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  YouTube
                </a>
                <a href="https://web.facebook.com/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Facebook
                </a>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Star size={32} /></div>
              <h3>Cover Video Songs</h3>
              <p>Showcase your talent with stunning cover videos that capture your authentic performance and tone.</p>
              <div className="feature-actions" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  YouTube
                </a>
                <a href="https://web.facebook.com/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Portfolio */}
      <PortfolioGallery />

      {/* Store Teaser */}
      <section className="store-teaser">
        <div className="container teaser-container">
          <div className="teaser-content">
            <h2>Find Your Perfect Sound</h2>
            <p>Looking for an upgrade? We curate and sell a premium selection of acoustic and electric guitars for working artists.</p>
            <Link to="/store" className="btn">
              Shop Guitars
            </Link>
          </div>
          <div className="teaser-visual">
            <div className="guitar-placeholder">
              <div className="glow-effect"></div>
              <span>Premium Guitars Collection</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
