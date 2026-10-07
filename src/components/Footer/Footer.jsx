import React from 'react';
import { 
  Heart, 
  Code2, 
  GitBranch, 
  Globe, 
  Mail, 
  ArrowUp,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import './Footer.css';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <div className="footer-logo-badge">
                <Code2 size={18} />
                <span>CKR</span>
              </div>
              <span className="footer-name">{personal.name}</span>
            </div>
            <p className="footer-tagline">
              Java Full Stack Developer | Fresher dedicated to building scalable, high-performance web applications and systems.
            </p>
            <div className="footer-status-pill">
              <span className="footer-pulse-dot"></span>
              <span>Available for Full-Time Software Developer Roles</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Training & Education</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#strengths">Strengths</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Connect & Resume Col */}
          <div className="footer-actions-col">
            <h4 className="footer-col-title">Connect & Download</h4>
            <div className="footer-action-buttons">
              <a
                href={personal.resumeUrl}
                download="Chandan_Kumar_Reddy_Resume.pdf"
                className="btn btn-primary btn-sm footer-btn"
              >
                Download Resume (PDF)
              </a>
              <div className="footer-social-icons">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <GitBranch size={18} />
                </a>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Globe size={18} />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="footer-social-link"
                  aria-label="Email"
                  title="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
            <p className="footer-location-note">
              📍 Based in Bengaluru, Karnataka, India
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Chandan Kumar Reddy. All Rights Reserved.
          </p>

          <p className="footer-tech-stack">
            Engineered with <strong>React JS</strong>, <strong>HTML5</strong>, <strong>CSS3</strong> & <strong>JavaScript</strong>
          </p>

          <button
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
