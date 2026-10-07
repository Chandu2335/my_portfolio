import React, { useState } from 'react';
import { 
  Wrench, 
  Code2, 
  Atom, 
  FileCode, 
  Palette, 
  Database, 
  Server, 
  Binary, 
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import './Skills.css';

const iconMap = {
  Code2: Code2,
  Atom: Atom,
  FileCode: FileCode,
  Palette: Palette,
  Database: Database,
  Server: Server,
  Binary: Binary,
};

export const Skills = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Fundamentals'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Wrench size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="section-subtitle">
            Core technologies and foundational engineering skills mastered through coursework and intensive full-stack development training.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-container">
          <div className="skills-filter-tabs">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div key={skill.name} className="skill-card glass-card">
                <div className="skill-card-top">
                  <div className="skill-icon-box">
                    <IconComponent size={26} className="skill-icon" />
                  </div>
                  <div className="skill-badges">
                    <span className="badge category-badge">{skill.category}</span>
                    <span className={`badge level-badge ${skill.level.toLowerCase()}`}>
                      <CheckCircle2 size={12} />
                      {skill.level}
                    </span>
                  </div>
                </div>

                <div className="skill-card-body">
                  <div className="skill-name-row">
                    <h3 className="skill-title">{skill.name}</h3>
                    <span className="skill-type-pill">{skill.badge}</span>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                </div>

                <div className="skill-card-footer">
                  <div className="skill-bar-header">
                    <span className="skill-bar-label">Proficiency</span>
                    <span className="skill-bar-percentage">
                      {skill.level === 'Proficient' ? '85%' : '75%'}
                    </span>
                  </div>
                  <div className="skill-progress-track">
                    <div 
                      className="skill-progress-bar"
                      style={{ width: skill.level === 'Proficient' ? '85%' : '75%' }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Training Guarantee Banner */}
        <div className="skills-footnote glass-card">
          <div className="footnote-icon-wrap">
            <Sparkles size={20} />
          </div>
          <div className="footnote-content">
            <h4>Practical Code Rigor</h4>
            <p>
              Trained extensively at <strong>KodNest Technologies, Bengaluru</strong> with hands-on labs writing structured Java programs, React single-page applications, and relational SQL queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
