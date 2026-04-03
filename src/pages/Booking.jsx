import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'music-video',
    date: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Real implementation would connect to an API
  };

  return (
    <div className="page-container fade-in">
      <div className="booking-header">
        <div className="container">
          <h1>Book a <span className="text-highlight">Session</span></h1>
          <p>Let's make something incredible together. Fill out the form below to get started.</p>
        </div>
      </div>

      <div className="container py-6">
        <div className="booking-content">
          <div className="booking-info">
            <h2>Let's talk about your project</h2>
            <p>
              Whether you're looking to produce a high-octane music video, record a pristine cover song, or need to rent/purchase high-end gear for your performance, we've got you covered.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <h4>Email</h4>
                <p>ravindusenanayake10@gmail.com</p>
              </div>
              <div className="contact-item">
                <h4>Phone</h4>
                <p>0701792908</p>
              </div>
              <div className="contact-item">
                <h4>Studio</h4>
                <p>Warakapola, Kegalle</p>
              </div>
            </div>
          </div>

          <div className="booking-form-wrapper">
            {submitted ? (
              <div className="success-message">
                <h3>Request Received!</h3>
                <p>Thank you, {formData.name}. We will get back to you within 24 hours to discuss your project details.</p>
                <button className="btn" onClick={() => setSubmitted(false)}>Submit Another Request</button>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange}>
                    <option value="music-video">Music Video Production</option>
                    <option value="cover-song">Cover Video Song</option>
                    <option value="live-session">Live Session Recording</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="date">Preferred Date (Optional)</label>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="details">Project Details</label>
                  <textarea id="details" name="details" rows="5" required value={formData.details} onChange={handleChange} placeholder="Tell us about the song, your style, and any specific ideas you have in mind..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">Submit Request</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
