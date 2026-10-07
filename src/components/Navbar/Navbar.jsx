import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Download, 
  Code2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import './Navbar.css';

export const Navbar = ({ onOpenResumeModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Scrolled state
      setIsScrolled(window.scrollY > 40);

      // Determine active section
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'strengths', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Training & Education', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Strengths', href: '#strengths', id: 'strengths' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
      />

      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo / Brand */}
          <a href="#hero" className="nav-brand" onClick={handleLinkClick}>
            <div className="nav-logo-badge">
              <Code2 size={20} className="logo-icon" />
              <span>CKR</span>
            </div>
            <div className="nav-brand-text">
              <span className="brand-name">Chandan Kumar Reddy</span>
              <span className="brand-role">Java Full Stack Dev</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-links-desktop" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Nav Actions */}
          <div className="nav-actions">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun size={19} className="theme-icon sun" />
              ) : (
                <Moon size={19} className="theme-icon moon" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href="/Chandan_Kumar_Reddy_Resume.pdf"
              download="Chandan_Kumar_Reddy_Resume.pdf"
              className="btn btn-primary btn-sm nav-resume-btn"
              title="Download Resume"
            >
              <Download size={15} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-inner">
            <div className="mobile-nav-header">
              <span className="mobile-menu-title">Navigation</span>
              <span className="mobile-status-pill">
                <Sparkles size={13} /> Open to Work
              </span>
            </div>
            <nav className="mobile-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mobile-nav-actions">
              <a
                href="/Chandan_Kumar_Reddy_Resume.pdf"
                download="Chandan_Kumar_Reddy_Resume.pdf"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={handleLinkClick}
              >
                <Download size={18} />
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
