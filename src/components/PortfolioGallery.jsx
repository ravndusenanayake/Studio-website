import React from 'react';
import { Camera, ExternalLink } from 'lucide-react';
import './PortfolioGallery.css';

const PortfolioGallery = () => {
  const baseUrl = import.meta.env.BASE_URL;

  const images = [
    { id: 1, src: `${baseUrl}images/birthday-1.jpg.jpg`, alt: 'Birthday Portrait 1', span: 'col-span-2 row-span-2' },
    { id: 2, src: `${baseUrl}images/birthday-2.jpg.jpg`, alt: 'Birthday Portrait 2', span: 'col-span-1 row-span-1' },
    { id: 3, src: `${baseUrl}images/birthday-3.jpg.jpg`, alt: 'Birthday Portrait 3', span: 'col-span-1 row-span-1' },
    { id: 4, src: `${baseUrl}images/birthday-4.jpg.jpg`, alt: 'Birthday Portrait 4', span: 'col-span-2 row-span-1' },
  ];

  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="portfolio-header">
          <div className="portfolio-title-wrapper">
            <Camera size={28} className="text-highlight-icon" color="var(--accent-color)" />
            <h2>Recent <span className="text-highlight">Photoshoots</span></h2>
          </div>
          <p>A glimpse into our recent birthday and studio portrait sessions.</p>
        </div>

        <div className="gallery-grid">
          {images.map((img) => (
            <div key={img.id} className={`gallery-item ${img.span}`}>
              <img src={img.src} alt={img.alt} className="gallery-image" />
              <div className="gallery-overlay">
                <span className="gallery-tag">Portrait Session</span>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-action">
          <a
            href="https://web.facebook.com/?_rdc=1&_rdr#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            View Full Photography Page <ExternalLink size={18} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
