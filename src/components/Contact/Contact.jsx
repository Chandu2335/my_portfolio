import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  GitBranch, 
  Globe, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import './Contact.css';

export const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedItem, setCopiedItem] = useState(null);
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        state: 'error',
        message: 'Please fill in all required fields (Name, Email, Message).'
      });
      return;
    }

    setFormStatus({ state: 'submitting', message: 'Sending message...' });

    // Simulate sending with successful confirmation feedback
    setTimeout(() => {
      setFormStatus({
        state: 'success',
        message: `Thank you, ${formData.name}! Your message has been received. I will get back to you shortly.`
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setFormStatus({ state: 'idle', message: '' });
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Mail size={14} />
            <span>Let's Connect</span>
          </div>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            I am actively interviewing for software development and Java Full Stack roles. Reach out via email, phone, or send a direct message below.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Information */}
          <div className="contact-info-panel">
            <div className="contact-info-card glass-card">
              <h3 className="info-panel-title">Contact Information</h3>
              <p className="info-panel-desc">
                Feel free to connect directly. I reply promptly to interview invitations and project inquiries.
              </p>

              {/* Direct Info Cards */}
              <div className="contact-cards-list">
                {/* Email Item */}
                <div className="contact-item-box">
                  <div className="contact-icon-wrapper">
                    <Mail size={20} />
                  </div>
                  <div className="contact-item-details">
                    <span className="contact-type">Email Address</span>
                    <a href={`mailto:${personal.email}`} className="contact-val email-val">
                      {personal.email}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(personal.email, 'email')}
                    className="copy-btn"
                    title="Copy email to clipboard"
                    type="button"
                  >
                    {copiedItem === 'email' ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="contact-item-box">
                  <div className="contact-icon-wrapper">
                    <Phone size={20} />
                  </div>
                  <div className="contact-item-details">
                    <span className="contact-type">Phone Number</span>
                    <a href={`tel:${personal.phone}`} className="contact-val">
                      {personal.phone}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(personal.phone, 'phone')}
                    className="copy-btn"
                    title="Copy phone to clipboard"
                    type="button"
                  >
                    {copiedItem === 'phone' ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="contact-item-box">
                  <div className="contact-icon-wrapper">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-item-details">
                    <span className="contact-type">Current Location</span>
                    <span className="contact-val">{personal.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Profiles & Placeholders */}
              <div className="contact-socials-group">
                <span className="socials-group-title">Professional Profiles:</span>
                <div className="contact-social-buttons">
                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary contact-social-btn"
                    title="GitHub Profile (Placeholder link)"
                  >
                    <GitBranch size={18} />
                    <span>GitHub</span>
                    <span className="placeholder-pill">Placeholder</span>
                  </a>

                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary contact-social-btn"
                    title="LinkedIn Profile (Placeholder link)"
                  >
                    <Globe size={18} />
                    <span>LinkedIn</span>
                    <span className="placeholder-pill">Placeholder</span>
                  </a>
                </div>
                <p className="social-config-note">
                  * Replace placeholders with your live handles in <code>src/data/portfolioData.js</code>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-panel">
            <div className="contact-form-card glass-card">
              <h3 className="form-card-title">Send a Direct Message</h3>
              <p className="form-card-subtitle">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              {formStatus.state === 'success' && (
                <div className="form-alert success">
                  <Check size={18} />
                  <span>{formStatus.message}</span>
                </div>
              )}

              {formStatus.state === 'error' && (
                <div className="form-alert error">
                  <AlertCircle size={18} />
                  <span>{formStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe / Recruiter Name"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject / Job Title
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Opportunity: Java Full Stack Developer Fresher"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message, interview details, or query here..."
                    className="form-textarea"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.state === 'submitting'}
                  className="btn btn-primary submit-btn"
                >
                  <Send size={18} />
                  <span>{formStatus.state === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
