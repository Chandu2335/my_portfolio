import React from 'react';
import { 
  User, 
  MapPin, 
  Mail, 
  Phone, 
  Briefcase, 
  Globe2, 
  CheckCircle,
  Crown,
  Grid3X3,
  Share2,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import './About.css';

export const About = () => {
  const { personal, languages, hobbies } = portfolioData;

  const hobbyIcons = {
    'Playing Chess': Crown,
    'Solving Sudoku': Grid3X3,
    'Sharing Knowledge': Share2,
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <User size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know my background, technical drive, spoken languages, and personal interests.
          </p>
        </div>

        {/* Content Layout */}
        <div className="about-grid">
          {/* Left Column: Bio Card */}
          <div className="about-bio-card glass-card">
            <div className="bio-card-header">
              <div className="avatar-placeholder">
                <span className="avatar-letters">CR</span>
                <span className="avatar-status-badge"></span>
              </div>
              <div className="bio-intro">
                <h3 className="bio-name">{personal.name}</h3>
                <span className="bio-role">{personal.role}</span>
                <span className="bio-fresher-badge">Fresher • Open to Immediate Hire</span>
              </div>
            </div>

            <div className="bio-body">
              <p className="bio-text">
                {personal.about}
              </p>
              <p className="bio-subtext">
                Equipped with extensive full-stack training from KodNest Technologies, I focus on writing clean, object-oriented Java backends alongside modular, dynamic React user interfaces. I am excited to apply my academic foundation and coding discipline to real-world engineering teams.
              </p>
            </div>

            {/* Quick Contact & Details Grid */}
            <div className="about-details-grid">
              <div className="detail-item">
                <MapPin size={16} className="detail-icon" />
                <div className="detail-content">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">{personal.location}</span>
                </div>
              </div>

              <div className="detail-item">
                <Mail size={16} className="detail-icon" />
                <div className="detail-content">
                  <span className="detail-label">Email</span>
                  <a href={`mailto:${personal.email}`} className="detail-value link">{personal.email}</a>
                </div>
              </div>

              <div className="detail-item">
                <Phone size={16} className="detail-icon" />
                <div className="detail-content">
                  <span className="detail-label">Phone</span>
                  <a href={`tel:${personal.phone}`} className="detail-value link">{personal.phone}</a>
                </div>
              </div>

              <div className="detail-item">
                <Briefcase size={16} className="detail-icon" />
                <div className="detail-content">
                  <span className="detail-label">Specialization</span>
                  <span className="detail-value">Java + React JS Full Stack</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Languages & Hobbies */}
          <div className="about-aside">
            {/* Languages Card */}
            <div className="about-subcard glass-card">
              <div className="subcard-header">
                <div className="subcard-icon-wrap">
                  <Globe2 size={18} />
                </div>
                <h4 className="subcard-title">Languages Known</h4>
              </div>

              <div className="languages-list">
                {languages.map((lang, idx) => (
                  <div key={idx} className="language-item">
                    <div className="lang-info">
                      <span className="lang-name">{lang.name}</span>
                      <span className="lang-level">{lang.level}</span>
                    </div>
                    <div className="lang-bar-track">
                      <div 
                        className="lang-bar-fill" 
                        style={{ width: idx === 0 ? '90%' : idx === 1 ? '100%' : '85%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies Card */}
            <div className="about-subcard glass-card">
              <div className="subcard-header">
                <div className="subcard-icon-wrap accent">
                  <Sparkles size={18} />
                </div>
                <h4 className="subcard-title">Hobbies & Interests</h4>
              </div>

              <div className="hobbies-list">
                {hobbies.map((hobby, idx) => {
                  const Icon = hobbyIcons[hobby.name] || Sparkles;
                  return (
                    <div key={idx} className="hobby-item">
                      <div className="hobby-icon-box">
                        <Icon size={18} />
                      </div>
                      <div className="hobby-content">
                        <span className="hobby-title">{hobby.name}</span>
                        <span className="hobby-desc">{hobby.description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
