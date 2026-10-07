import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  FileText,
  ExternalLink,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Code2
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import './ResumeModal.css';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, education, skills, projects, training, strengths, languages, hobbies } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div className="resume-modal-top-bar">
          <div className="resume-title-wrap">
            <FileText size={18} className="text-primary-accent" />
            <span className="modal-top-title">ATS Resume Viewer • {personal.name}</span>
          </div>

          <div className="resume-top-actions">
            <a
              href={personal.resumeUrl}
              download="Chandan_Kumar_Reddy_Resume.pdf"
              className="btn btn-primary btn-sm"
              title="Download Original Resume PDF"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="btn btn-secondary btn-sm print-hide"
              title="Print Resume"
              type="button"
            >
              <Printer size={14} />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="resume-close-icon-btn"
              aria-label="Close resume preview"
              type="button"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable / Renderable ATS Resume Sheet */}
        <div className="resume-document-sheet" id="printable-resume">
          {/* Header */}
          <header className="res-header">
            <h1 className="res-name">{personal.name}</h1>
            <p className="res-target-role">Java Full Stack Developer | Fresher</p>
            <div className="res-contact-bar">
              <span><Mail size={13} /> {personal.email}</span>
              <span>•</span>
              <span><Phone size={13} /> {personal.phone}</span>
              <span>•</span>
              <span><MapPin size={13} /> {personal.location}</span>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="res-section">
            <h2 className="res-heading">PROFESSIONAL SUMMARY</h2>
            <div className="res-divider"></div>
            <p className="res-text">{personal.about}</p>
          </section>

          {/* Technical Skills */}
          <section className="res-section">
            <h2 className="res-heading">TECHNICAL SKILLS</h2>
            <div className="res-divider"></div>
            <div className="res-skills-content">
              <p><strong>Programming Languages:</strong> Java (Core Java, OOP, Collections, Multithreading, Exception Handling)</p>
              <p><strong>Web Technologies:</strong> React JS, HTML5, CSS3, JavaScript, Responsive Web Design</p>
              <p><strong>Databases & DBMS:</strong> SQL, Relational DBMS (Queries, Joins, Normalization, ACID Properties)</p>
              <p><strong>Core Fundamentals:</strong> Data Structures & Algorithms, Problem Solving, Software Engineering</p>
            </div>
          </section>

          {/* Professional Training */}
          <section className="res-section">
            <h2 className="res-heading">PROFESSIONAL TRAINING</h2>
            <div className="res-divider"></div>
            <div className="res-job-item">
              <div className="res-job-header">
                <span className="res-job-title">{training.title}</span>
                <span className="res-job-dates">{training.duration}</span>
              </div>
              <div className="res-job-company">{training.organization}</div>
              <p className="res-text">{training.description}</p>
              <ul className="res-bullet-list">
                {training.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="res-section">
            <h2 className="res-heading">PROJECTS</h2>
            <div className="res-divider"></div>
            {projects.map((proj, pIdx) => (
              <div key={proj.id} className="res-project-item">
                <div className="res-proj-header">
                  <span className="res-proj-title">{proj.title}</span>
                  <span className="res-proj-tech">[{proj.tech.slice(0, 5).join(', ')}]</span>
                </div>
                <p className="res-text">{proj.summary}</p>
                <ul className="res-bullet-list">
                  {proj.features.slice(0, 4).map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="res-section">
            <h2 className="res-heading">EDUCATION</h2>
            <div className="res-divider"></div>
            {education.map((edu, idx) => (
              <div key={idx} className="res-edu-item">
                <div className="res-edu-header">
                  <span className="res-edu-degree"><strong>{edu.degree}</strong> — {edu.institution}</span>
                  <span className="res-edu-dates">{edu.duration}</span>
                </div>
                <div className="res-edu-score">Score: <strong>{edu.score}</strong></div>
              </div>
            ))}
          </section>

          {/* Strengths & Languages */}
          <section className="res-section">
            <h2 className="res-heading">STRENGTHS, LANGUAGES & HOBBIES</h2>
            <div className="res-divider"></div>
            <div className="res-meta-content">
              <p><strong>Strengths:</strong> {strengths.map(s => s.title).join(', ')}</p>
              <p><strong>Languages:</strong> {languages.map(l => `${l.name} (${l.level})`).join(', ')}</p>
              <p><strong>Hobbies:</strong> {hobbies.map(h => h.name).join(', ')}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
