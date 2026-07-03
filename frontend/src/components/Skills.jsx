import React from 'react';
import { Layers, Server, Settings } from 'lucide-react';

export default function Skills({ skills }) {
  // Mapping categories to premium icons
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return <Layers size={24} className="text-gold" style={{ color: 'var(--accent-gold)' }} />;
      case 'backend':
        return <Server size={24} className="text-gold" style={{ color: 'var(--accent-gold)' }} />;
      case 'devops':
      default:
        return <Settings size={24} className="text-gold" style={{ color: 'var(--accent-gold)' }} />;
    }
  };

  if (!skills || skills.length === 0) {
    return (
      <section id="skills" className="section">
        <div className="section-header">
          <span className="section-subtitle">Proficiencies</span>
          <h2 className="section-title">Technical Expertise</h2>
        </div>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Loading skills data...</p>
      </section>
    );
  }

  return (
    <section id="skills" className="section">
      <div className="section-header">
        <span className="section-subtitle">Proficiencies</span>
        <h2 className="section-title">Technical Expertise</h2>
      </div>
      <div className="skills-grid">
        {skills.map((cat, idx) => (
          <div key={idx} className="skills-card">
            <div className="skills-card-header">
              {getCategoryIcon(cat.category)}
              <h3>{cat.category}</h3>
            </div>
            <div className="skills-list">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
