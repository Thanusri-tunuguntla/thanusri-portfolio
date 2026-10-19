import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section" style={{ backgroundColor: 'rgba(8, 11, 20, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education & Foundations</h2>
          <p className="section-desc">
            Formal training in computer science, specialized artificial intelligence algorithms, and higher quantitative mathematics.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            maxWidth: '960px',
            margin: '0 auto',
          }}
        >
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderLeft: idx === 0 ? '4px solid var(--primary)' : '4px solid #6366f1',
              }}
            >
              {/* Header row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 700 }}>
                    {edu.degree} — {edu.specialization}
                  </h3>
                  <div
                    style={{
                      fontSize: '1.05rem',
                      color: '#93c5fd',
                      fontWeight: 600,
                      marginTop: '0.2rem',
                    }}
                  >
                    {edu.institution}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <span className="status-badge badge-highlight">
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </span>
                  <span className={`status-badge ${idx === 0 ? 'badge-verified' : 'badge-purple'}`}>
                    {edu.status}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.86rem',
                  color: '#94a3b8',
                  marginBottom: '1.25rem',
                }}
              >
                <MapPin size={15} color="#60a5fa" />
                <span>{edu.location}</span>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.94rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {edu.description}
              </p>

              {/* Highlights */}
              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {edu.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.88rem',
                        color: '#cbd5e1',
                        lineHeight: 1.55,
                      }}
                    >
                      <CheckCircle2 size={16} color="#60a5fa" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
