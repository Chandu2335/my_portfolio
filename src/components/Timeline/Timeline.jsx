import React, { useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  Award, 
  Building, 
  CheckCircle2, 
  BookOpen,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import './Timeline.css';

export const Timeline = () => {
  const { education, training } = portfolioData;
  const [activeTab, setActiveTab] = useState('both'); // 'both', 'training', 'education'

  const eduIcons = [GraduationCap, BookOpen, Award];

  return (
    <section id="experience" className="section timeline-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <GraduationCap size={14} />
            <span>Learning & Qualifications</span>
          </div>
          <h2 className="section-title">
            Training & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            My professional software training journey alongside academic excellence in Engineering.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="timeline-filters">
          <button
            onClick={() => setActiveTab('both')}
            className={`timeline-filter-btn ${activeTab === 'both' ? 'active' : ''}`}
            type="button"
          >
            Complete Journey
          </button>
          <button
            onClick={() => setActiveTab('training')}
            className={`timeline-filter-btn ${activeTab === 'training' ? 'active' : ''}`}
            type="button"
          >
            Professional Training
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`timeline-filter-btn ${activeTab === 'education' ? 'active' : ''}`}
            type="button"
          >
            Formal Education
          </button>
        </div>

        <div className="timeline-columns-wrapper">
          {/* Professional Training Card / Column */}
          {(activeTab === 'both' || activeTab === 'training') && (
            <div className="timeline-column training-column">
              <div className="timeline-column-header">
                <div className="column-header-icon-box">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="column-title">Professional Training</h3>
                  <span className="column-subtitle">Industry Preparation & Skill Mastery</span>
                </div>
              </div>

              <div className="training-card glass-card">
                <div className="training-card-header">
                  <div className="training-badge-row">
                    <span className="badge training-tag">
                      <Sparkles size={12} />
                      {training.type}
                    </span>
                    <span className="training-duration-badge">
                      <Calendar size={12} />
                      {training.duration}
                    </span>
                  </div>

                  <h4 className="training-title">{training.title}</h4>
                  
                  <div className="training-org-row">
                    <Building size={16} className="org-icon" />
                    <span className="training-org">{training.organization}</span>
                  </div>
                </div>

                <p className="training-desc">{training.description}</p>

                <div className="training-highlights-box">
                  <span className="highlights-title">Key Training Modules & Practice:</span>
                  <ul className="highlights-list">
                    {training.highlights.map((item, idx) => (
                      <li key={idx} className="highlight-item">
                        <CheckCircle2 size={16} className="highlight-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Education Timeline Column */}
          {(activeTab === 'both' || activeTab === 'education') && (
            <div className="timeline-column education-column">
              <div className="timeline-column-header">
                <div className="column-header-icon-box accent">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="column-title">Formal Education</h3>
                  <span className="column-subtitle">Consistent Academic Distinction</span>
                </div>
              </div>

              <div className="education-timeline-tree">
                {education.map((edu, idx) => {
                  const Icon = eduIcons[idx % eduIcons.length];
                  return (
                    <div key={idx} className="edu-timeline-item">
                      <div className="timeline-dot-wrapper">
                        <div className="timeline-dot">
                          <Icon size={14} />
                        </div>
                        {idx !== education.length - 1 && <div className="timeline-line"></div>}
                      </div>

                      <div className="edu-card glass-card">
                        <div className="edu-card-top">
                          <div className="edu-duration-row">
                            <span className="edu-year-badge">
                              <Calendar size={12} />
                              {edu.duration}
                            </span>
                            <span className="edu-score-badge">
                              <Award size={12} />
                              {edu.score}
                            </span>
                          </div>
                          <h4 className="edu-degree">{edu.degree}</h4>
                          <span className="edu-institution">{edu.institution}</span>
                        </div>

                        <p className="edu-desc">{edu.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
