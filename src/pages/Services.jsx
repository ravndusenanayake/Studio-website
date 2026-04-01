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
              <span style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Complete Music & Video Production</span>
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
            <h2>Live Session Recording</h2>
            <div className="price-tag">Starting from $1,200</div>
            <p className="package-desc">
              Capture the raw energy of your live performance with multi-track audio recording and multi-camera video production.
            </p>
            <ul className="package-features">
              <li>Live venue or studio setup</li>
              <li>Up to 16-channel audio</li>
              <li>3-5 Camera angles</li>
              <li>Live mix and master</li>
              <li>Behind the scenes footage</li>
            </ul>
            <a href="/booking" className="btn btn-primary package-btn">Book Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
