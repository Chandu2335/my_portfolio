import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  GitBranch,
  Globe, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  FileText,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import './Hero.css';

export const Hero = ({ onOpenResumeModal }) => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Introductions & CTAs */}
        <div className="hero-content">
          {/* Availability Badge */}
          <div className="hero-status-pill animate-fade-in">
            <span className="pulse-dot"></span>
            <span className="status-text">Available for Full-Time Roles | Fresher</span>
          </div>

          {/* Main Headings */}
          <h1 className="hero-title animate-fade-in">
            Hi, I'm <span className="gradient-text">{personal.name}</span>
          </h1>

          <div className="hero-role-wrapper animate-fade-in">
            <h2 className="hero-role">Java Full Stack Developer</h2>
            <span className="role-divider">•</span>
            <span className="hero-tagline">Software Engineering Fresher</span>
          </div>

          {/* Short Professional Intro */}
          <p className="hero-description animate-fade-in">
            {personal.about}
          </p>

          {/* Quick Location & Contact Badges */}
          <div className="hero-meta-list animate-fade-in">
            <div className="hero-meta-item">
              <MapPin size={16} className="meta-icon" />
              <span>{personal.location}</span>
            </div>
            <div className="hero-meta-item">
              <CheckCircle2 size={16} className="meta-icon success" />
              <span>KodNest Trained Full Stack Dev</span>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="hero-cta-group animate-fade-in">
            {/* View Projects Button */}
            <a href="#projects" className="btn btn-primary hero-btn">
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>

            {/* Download Resume Button */}
            <a
              href={personal.resumeUrl}
              download="Chandan_Kumar_Reddy_Resume.pdf"
              className="btn btn-secondary hero-btn"
              title="Download Resume (PDF)"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>

            {/* Contact Me Button */}
            <a href="#contact" className="btn btn-outline hero-btn">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* ATS Resume Preview Shortcut */}
          <div className="hero-quick-preview">
            <button 
              onClick={onOpenResumeModal} 
              className="quick-preview-btn"
              type="button"
            >
              <FileText size={15} />
              <span>View Interactive ATS Resume Profile</span>
            </button>
          </div>

          {/* Social Links Row */}
          <div className="hero-socials animate-fade-in">
            <span className="socials-label">Connect:</span>
            <div className="social-links-list">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                title="GitHub (Placeholder link - click to view profile/replace)"
              >
                <GitBranch size={16} />
                <span>GitHub</span>
                <span className="placeholder-tag">Config</span>
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                title="LinkedIn (Placeholder link - click to view profile/replace)"
              >
                <Globe size={16} />
                <span>LinkedIn</span>
                <span className="placeholder-tag">Config</span>
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="social-pill"
                title={`Send email to ${personal.email}`}
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Code Terminal Card */}
        <div className="hero-visual">
          <div className="terminal-card glass-card">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control-btn close"></span>
                <span className="control-btn minimize"></span>
                <span className="control-btn maximize"></span>
              </div>
              <div className="terminal-title">
                <Terminal size={14} />
                <span>ChandanKumarReddy.java</span>
              </div>
              <div className="terminal-status">
                <span className="compiling-pill">Compiled</span>
              </div>
            </div>

            {/* Code Body */}
            <div className="terminal-body">
              <div className="code-line">
                <span className="line-num">01</span>
                <span className="keyword">package</span> <span className="text-secondary">com.chandan.portfolio;</span>
              </div>
              <div className="code-line">
                <span className="line-num">02</span>
              </div>
              <div className="code-line">
                <span className="line-num">03</span>
                <span className="keyword">public class</span> <span className="class-name">ChandanKumarReddy</span> &#123;
              </div>
              <div className="code-line indent-1">
                <span className="line-num">04</span>
                <span className="keyword">String</span> <span className="var-name">role</span> = <span className="string">"Java Full Stack Developer"</span>;
              </div>
              <div className="code-line indent-1">
                <span className="line-num">05</span>
                <span className="keyword">String</span> <span className="var-name">location</span> = <span className="string">"Bengaluru, India"</span>;
              </div>
              <div className="code-line indent-1">
                <span className="line-num">06</span>
                <span className="keyword">String[]</span> <span className="var-name">skills</span> = &#123;
              </div>
              <div className="code-line indent-2">
                <span className="line-num">07</span>
                <span className="string">"Java"</span>, <span className="string">"React JS"</span>, <span className="string">"SQL"</span>, <span className="string">"DBMS"</span>, <span className="string">"DSA"</span>
              </div>
              <div className="code-line indent-1">
                <span className="line-num">08</span>
                &#125;;
              </div>
              <div className="code-line indent-1">
                <span className="line-num">09</span>
                <span className="keyword">boolean</span> <span className="var-name">isReadyToInnovate</span> = <span className="boolean">true</span>;
              </div>
              <div className="code-line">
                <span className="line-num">10</span>
              </div>
              <div className="code-line indent-1">
                <span className="line-num">11</span>
                <span className="keyword">public void</span> <span className="method-name">launchCareer</span>() &#123;
              </div>
              <div className="code-line indent-2">
                <span className="line-num">12</span>
                <span className="sys-out">System.out.println</span>(<span className="string">"Eager to contribute to innovative projects!"</span>);
              </div>
              <div className="code-line indent-1">
                <span className="line-num">13</span>
                &#125;
              </div>
              <div className="code-line">
                <span className="line-num">14</span>
                &#125;
              </div>
            </div>

            {/* Terminal Footer Console */}
            <div className="terminal-console-footer">
              <div className="console-output">
                <span className="console-prompt">&gt; java ChandanKumarReddy</span>
                <span className="console-result">"Eager to contribute to innovative projects!"</span>
              </div>
              <div className="console-tag">
                <Sparkles size={14} className="sparkle-icon" />
                <span>100% Truthful Resume</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
