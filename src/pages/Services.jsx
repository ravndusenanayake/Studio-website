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
            <div className="price-tag">Starting from $1,500</div>
            <p className="package-desc">
              Full-scale cinematic music video production, from storyboard to final color grade. We capture the essence of your song.
            </p>
            <ul className="package-features">
              <li>Concept Development</li>
              <li>4K Cinematic Filming</li>
              <li>Professional Lighting</li>
              <li>Advanced Editing & Color Grading</li>
              <li>Multi-location options</li>
            </ul>
            <a href="/booking" className="btn btn-primary package-btn">Book Now</a>
          </div>

          <div className="package-card highlight">
            <div className="package-icon">
              <Music size={40} />
            </div>
            <h2>Cover Music Videos</h2>
            <div className="price-tag">Starting from $800</div>
            <p className="package-desc">
              High-quality studio recordings and dynamic performance videos for your cover songs. Perfect for YouTube and social media growth.
            </p>
            <ul className="package-features">
              <li>Studio Audio Recording</li>
              <li>Vocal Tuning & Mixing</li>
              <li>Multi-camera Video Setup</li>
              <li>Sync & Edit</li>
              <li>Format delivery for all platforms</li>
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
