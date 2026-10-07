import React from 'react';
import { 
  Zap, 
  MessageSquareHeart, 
  Users, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import './Strengths.css';

const strengthIcons = {
  MessageSquareHeart,
  Users,
  Clock,
  CheckCircle2
};

export const Strengths = () => {
  const { strengths } = portfolioData;

  return (
    <section id="strengths" className="section strengths-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-pill">
            <Zap size={14} />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">
            Key <span className="gradient-text">Strengths</span>
          </h2>
          <p className="section-subtitle">
            Professional traits and workplace values that enable me to collaborate smoothly and drive reliable software engineering results.
          </p>
        </div>

        {/* Strengths Cards Grid */}
        <div className="strengths-grid">
          {strengths.map((item, idx) => {
            const Icon = strengthIcons[item.icon] || CheckCircle2;
            return (
              <div key={idx} className="strength-card glass-card">
                <div className="strength-icon-box">
                  <Icon size={26} className="strength-icon" />
                </div>
                <h3 className="strength-title">{item.title}</h3>
                <p className="strength-description">{item.description}</p>
                <div className="strength-badge">
                  <span>Professional Attribute</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
