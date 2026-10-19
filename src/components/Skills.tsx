import React, { useState } from 'react';
import { Code, BrainCircuit, Layers, Database, Terminal, CheckCircle2, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={20} color="#60a5fa" />;
      case 'BrainCircuit':
        return <BrainCircuit size={20} color="#a78bfa" />;
      case 'Layers':
        return <Layers size={20} color="#22d3ee" />;
      case 'Database':
        return <Database size={20} color="#34d399" />;
      case 'Terminal':
      default:
        return <Terminal size={20} color="#f59e0b" />;
    }
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'rgba(10, 14, 24, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills & Technical Stack</h2>
          <p className="section-desc">
            Evidence-based technical capabilities acquired through practical software builds, machine learning coursework, and hands-on laboratory experiments. No arbitrary percentage bars.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = selectedCategory === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(idx)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.65rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  backgroundColor: isSelected ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  border: isSelected ? '1px solid rgba(59, 130, 246, 0.45)' : '1px solid var(--border-subtle)',
                  color: isSelected ? '#ffffff' : '#94a3b8',
                  boxShadow: isSelected ? '0 0 20px rgba(59, 130, 246, 0.2)' : 'none',
                }}
              >
                {getCategoryIcon(cat.iconName)}
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Showcase */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(59, 130, 246, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                }}
              >
                {getCategoryIcon(SKILL_CATEGORIES[selectedCategory].iconName)}
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff' }}>
                  {SKILL_CATEGORIES[selectedCategory].category}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '2px' }}>
                  {SKILL_CATEGORIES[selectedCategory].description}
                </p>
              </div>
            </div>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: '#60a5fa',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
              }}
            >
              {SKILL_CATEGORIES[selectedCategory].skills.length} Documented Skills
            </span>
          </div>

          {/* Skills Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {SKILL_CATEGORIES[selectedCategory].skills.map((skill, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  transition: 'all 0.2s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 600 }}>
                      {skill.name}
                    </h4>
                    <CheckCircle2 size={16} color="#34d399" />
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.55 }}>
                    {skill.levelDescription}
                  </p>
                </div>

                {skill.featuredIn && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      paddingTop: '0.65rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <Sparkles size={13} color="#60a5fa" />
                    <span style={{ fontSize: '0.76rem', color: '#93c5fd', fontWeight: 500 }}>
                      Applied in: {skill.featuredIn}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
