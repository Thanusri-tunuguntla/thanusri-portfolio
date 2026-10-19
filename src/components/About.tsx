import React from 'react';
import { Brain, Layers, Code, GraduationCap, MapPin, Target } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const focusAreas = [
    {
      title: 'Applied AI & Machine Learning',
      description:
        'Hands-on implementation of supervised and unsupervised learning algorithms (Logistic Regression, Isolation Forest, Clustering) to solve practical prediction and anomaly detection challenges.',
      icon: Brain,
      tag: 'Core Focus',
      accentColor: '#3b82f6',
    },
    {
      title: 'Natural Language Processing (NLP)',
      description:
        'Building text pipelines from raw inputs: tokenization, n-gram extraction, TF-IDF vectorization, text classification, and integrating Large Language Models like Google Gemini 2.5 Flash.',
      icon: Layers,
      tag: 'Specialization',
      accentColor: '#8b5cf6',
    },
    {
      title: 'Software Development & Frontend',
      description:
        'Designing responsive, accessible web interfaces in React, Vite, and Material UI with clean state management, REST API integration, and interactive data visualization.',
      icon: Code,
      tag: 'Engineering',
      accentColor: '#06b6d4',
    },
    {
      title: 'Data Structures & Algorithmic Practice',
      description:
        'Strengthening algorithmic efficiency, space-time complexity analysis, and problem-solving skills through continuous practice across platforms like LeetCode and CodeChef.',
      icon: Target,
      tag: 'Foundations',
      accentColor: '#10b981',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>About Me</span>
          </div>
          <h2 className="section-title">Engineering Practical Intelligence</h2>
          <p className="section-desc">
            Bridging foundational machine learning theory with accessible, user-focused software applications.
          </p>
        </div>

        {/* Split Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left Column: Story, Credentials & Philosophy Quote */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderLeft: '4px solid var(--primary)',
              }}
            >
              <h3 style={{ fontSize: '1.45rem', marginBottom: '1rem', color: '#ffffff' }}>
                Early-Career AI Engineer & Builder
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                {PERSONAL_INFO.professionalIntro}
              </p>

              {/* Factual Academic & Location Details */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '0.85rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.88rem', color: '#94a3b8' }}>
                  <GraduationCap size={18} color="#60a5fa" />
                  <span>
                    <strong style={{ color: '#f8fafc' }}>{PERSONAL_INFO.degree}</strong> • {PERSONAL_INFO.institution} (Class of {PERSONAL_INFO.graduationYear})
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.88rem', color: '#94a3b8' }}>
                  <MapPin size={18} color="#60a5fa" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Core Philosophy Statement Card */}
            <div
              style={{
                padding: '1.75rem 2rem',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#60a5fa',
                  marginBottom: '0.6rem',
                }}
              >
                Engineering Philosophy
              </div>
              <blockquote
                style={{
                  fontStyle: 'italic',
                  fontSize: '1.08rem',
                  color: '#f1f5f9',
                  lineHeight: 1.7,
                }}
              >
                "{PERSONAL_INFO.philosophyQuote}"
              </blockquote>
            </div>
          </div>

          {/* Right Column: 4 Meaningful Focus Areas */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {focusAreas.map((area, idx) => {
              const IconComp = area.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: `${area.accentColor}18`,
                        border: `1px solid ${area.accentColor}35`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: area.accentColor,
                      }}
                    >
                      <IconComp size={20} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#94a3b8',
                      }}
                    >
                      {area.tag}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 600 }}>
                    {area.title}
                  </h4>

                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1.05fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
