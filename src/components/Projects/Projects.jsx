import React, { useState } from 'react';
import { 
  FolderGit2, 
  GitBranch, 
  ExternalLink, 
  CheckCircle2, 
  Info, 
  Sparkles,
  Layers,
  Cpu,
  UtensilsCrossed,
  X
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import './Projects.css';

export const Projects = () => {
  const { projects } = portfolioData;
  const [selectedPlaceholderProject, setSelectedPlaceholderProject] = useState(null);

  const handleLinkClick = (e, project, type) => {
    if (project.isPlaceholderLinks) {
      e.preventDefault();
      setSelectedPlaceholderProject({ project, type });
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <FolderGit2 size={14} />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="section-title">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world academic and training capstone projects demonstrating full-stack software development and IoT engineering.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={project.id} className="project-card glass-card">
              {/* Card Header & Badge */}
              <div className="project-card-header">
                <div className="project-type-badge-row">
                  <span className="badge project-badge">
                    {idx === 0 ? <UtensilsCrossed size={13} /> : <Cpu size={13} />}
                    {project.badge}
                  </span>
                  <span className="project-number">0{idx + 1}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
              </div>

              {/* Technologies Badges */}
              <div className="project-tech-section">
                <span className="project-tech-heading">Technologies Used:</span>
                <div className="tech-tags-list">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div className="project-features-section">
                <span className="features-heading">Core Features & Architecture:</span>
                <ul className="features-list">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="feature-item">
                      <CheckCircle2 size={15} className="feature-check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons with Clear Placeholders */}
              <div className="project-card-footer">
                <div className="project-cta-buttons">
                  {/* GitHub Button */}
                  <a
                    href={project.githubUrl}
                    onClick={(e) => handleLinkClick(e, project, 'GitHub')}
                    className="btn btn-secondary btn-sm project-btn"
                    title={`View ${project.title} on GitHub`}
                  >
                    <GitBranch size={16} />
                    <span>GitHub Code</span>
                    {project.isPlaceholderLinks && <span className="placeholder-dot" title="Placeholder"></span>}
                  </a>

                  {/* Live Demo Button */}
                  <a
                    href={project.liveUrl}
                    onClick={(e) => handleLinkClick(e, project, 'Live Demo')}
                    className="btn btn-primary btn-sm project-btn"
                    title={`View ${project.title} Live Demo`}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                    {project.isPlaceholderLinks && <span className="placeholder-dot white" title="Placeholder"></span>}
                  </a>
                </div>

                <div className="placeholder-guide-hint">
                  <Info size={13} />
                  <span>Configurable in <code>src/data/portfolioData.js</code></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal when placeholder button clicked */}
        {selectedPlaceholderProject && (
          <div className="placeholder-modal-overlay" onClick={() => setSelectedPlaceholderProject(null)}>
            <div className="placeholder-modal glass-card" onClick={(e) => e.stopPropagation()}>
              <div className="placeholder-modal-header">
                <div className="modal-header-info">
                  <Info size={20} className="modal-info-icon" />
                  <h4>Repository & Link Placeholder</h4>
                </div>
                <button 
                  onClick={() => setSelectedPlaceholderProject(null)} 
                  className="modal-close-btn"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="placeholder-modal-body">
                <p>
                  You clicked the <strong>{selectedPlaceholderProject.type}</strong> button for:
                </p>
                <div className="placeholder-project-name">
                  "{selectedPlaceholderProject.project.title}"
                </div>
                <p className="placeholder-instructions">
                  To connect your real repository or live deployment URL:
                </p>
                <div className="code-hint-box">
                  <code>
                    // Open file: src/data/portfolioData.js<br />
                    githubUrl: "{selectedPlaceholderProject.project.githubUrl}",<br />
                    liveUrl: "{selectedPlaceholderProject.project.liveUrl}",<br />
                    isPlaceholderLinks: false // Set to false when linked
                  </code>
                </div>
              </div>

              <div className="placeholder-modal-footer">
                <button 
                  onClick={() => setSelectedPlaceholderProject(null)} 
                  className="btn btn-primary btn-sm"
                >
                  Understood
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
