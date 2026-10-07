import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Code2, Award, Briefcase, CheckCircle } from 'lucide-react';
import './Stats.css';

const statIcons = [Code2, Award, Briefcase, CheckCircle];

export const Stats = () => {
  const { stats } = portfolioData;

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid glass-card">
          {stats.map((item, index) => {
            const Icon = statIcons[index % statIcons.length];
            return (
              <div key={index} className="stat-card">
                <div className="stat-icon-wrapper">
                  <Icon size={24} className="stat-icon" />
                </div>
                <div className="stat-info">
                  <span className="stat-value gradient-text">{item.value}</span>
                  <span className="stat-label">{item.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
