import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setStatus({ submitting: true, success: null, message: '' });

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const response = await axios.post(`${baseUrl}/api/contact`, formData);

      if (response.data.success) {
        setStatus({
          submitting: false,
          success: true,
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(response.data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      setStatus({
        submitting: false,
        success: false,
        message: error.response?.data?.error || 'Failed to submit form. Please check backend is running.'
      });
    }
  };

  return (
    <section id="contact" className="section" style={{ paddingBottom: '8rem' }}>
      <div className="section-header">
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-title">Let's Connect</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Let's collaborate on your next project</h3>
          <p>
            Feel free to reach out for contract work, full-time openings, or simply to say hello. I normally respond within 24 hours.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Mail size={20} />
              </div>
              <div className="contact-item-text">
                <h4>Email</h4>
                <p>sazib.hossain@example.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Phone size={20} />
              </div>
              <div className="contact-item-text">
                <h4>Phone</h4>
                <p>+1 (555) 019-2834</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <MapPin size={20} />
              </div>
              <div className="contact-item-text">
                <h4>Location</h4>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project proposal"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me more about your requirements..."
                className="form-control"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {status.message && (
              <div className={`form-status ${status.success ? 'success' : 'error'}`}>
                {status.message}
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={status.submitting}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {status.submitting ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
