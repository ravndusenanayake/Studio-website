import React from 'react';
import { Camera, Music, Video, Star } from 'lucide-react';
import './Services.css';

const Services = () => {
  return (
    <div className="page-container fade-in">
      <div className="services-header">
        <div className="container">
          <h1>Professional <span className="text-highlight">Production</span> Services</h1>
          <p>World-class audio-visual production for independent artists and bands.</p>
        </div>
      </div>

      <div className="container py-6">
        <div className="service-packages">
          <div className="package-card">
            <div className="package-icon">
              <Video size={40} />
            </div>
            <h2>Original Music Videos</h2>
            <div className="price-tag" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span>Starting from RS 20 000</span>
            </div>
            <p className="package-desc">
              An all-in-one production package for artists. We bring your vision to life from scratch—composing the original melody, recording studio-quality audio, and producing a high-end cinematic music video.
            </p>
            <ul className="package-features">
              <li>Original Melody & Music Composition</li>
              <li>Studio Audio Recording & Mixing</li>
              <li>Concept & Storyboard Development</li>
              <li>4K Cinematic Filming & Lighting</li>
              <li>Advanced Editing & Color Grading</li>
            </ul>
            <a href="/booking" className="btn btn-primary package-btn">Book Now</a>
          </div>

          <div className="package-card highlight">
            <div className="package-icon">
              <Music size={40} />
            </div>
            <h2>Cover Music Videos</h2>
            <div className="price-tag">Starting from Rs. 10,000</div>
            <p className="package-desc">
              High-quality studio audio recording and dynamic video production for your cover songs. Perfect for artists looking to grow their YouTube and social media presence.
            </p>
            <ul className="package-features">
              <li>Professional Vocal Recording & Tuning</li>
              <li>High-Quality Mixing & Mastering</li>
              <li>Multi-Camera Studio Video Setup</li>
              <li>Seamless Audio & Video Syncing</li>
              <li>Optimized Formats for YouTube & Social Media</li>
            </ul>
            <a href="/booking" className="btn btn-primary package-btn">Book Now</a>
          </div>

          <div className="package-card">
            <div className="package-icon">
              <Camera size={40} />
            </div>
            <h2>Studio & Portrait Photography</h2>
            <div className="price-tag">Starting from Rs. 2,500</div>
            <p className="package-desc">
              High-quality studio photography to capture your best moments. Perfect for professional portraits, personal branding, and memorable birthday celebrations.
            </p>
            <ul className="package-features">
              <li>5 Portrait Package with Advanced Retouching (Rs. 2,500)</li>
              <li>Birthday Shoot & Studio Concepts (Starting from Rs. 5,000)</li>
              <li>Expert Posing Guidance & Studio Lighting</li>
              <li>High-Resolution Digital Delivery</li>
              <li>Customizable Themes & Backdrops</li>
            </ul>
            <a href="/booking" className="btn btn-primary package-btn">Book Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
