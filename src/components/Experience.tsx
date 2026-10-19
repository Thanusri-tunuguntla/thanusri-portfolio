import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Practical Experience</span>
          </div>
          <h2 className="section-title">Internships & Engineering Work</h2>
          <p className="section-desc">
            Hands-on experience delivering technical tasks, participating in community technology deployments, and contributing to national-level AI hackathons.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Central Vertical Line (Desktop) */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '28px',
              width: '2px',
              background: 'linear-gradient(to bottom, #3b82f6, rgba(59, 130, 246, 0.15))',
              zIndex: 0,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', zIndex: 1 }}>
            {EXPERIENCES.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.75rem',
                }}
              >
                {/* Node Dot / Icon */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    backgroundColor: '#0c111e',
                    border: '2px solid #3b82f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 0 15px rgba(59, 130, 246, 0.35)',
                    color: '#60a5fa',
                  }}
                >
                  <Briefcase size={22} />
                </div>

                {/* Content Card */}
                <div
                  className="glass-card"
                  style={{
                    flex: 1,
                    padding: '2rem',
                    border: '1px solid var(--border-card)',
                  }}
                >
                  {/* Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.3rem', color: '#ffffff', fontWeight: 700 }}>
                        {item.role}
                      </h3>
                      <div
                        style={{
                          fontSize: '1rem',
                          color: '#93c5fd',
                          fontWeight: 600,
                          marginTop: '2px',
                        }}
                      >
                        {item.organization}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span className="status-badge badge-highlight">{item.type}</span>
                      <span
                        className={`status-badge ${
                          item.status === 'Completed' ? 'badge-verified' : 'badge-purple'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Metadata: Period & Location */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      fontSize: '0.84rem',
                      color: '#94a3b8',
                      marginBottom: '1.25rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={15} color="#60a5fa" />
                      <span>{item.period}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={15} color="#60a5fa" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: '#cbd5e1',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        marginBottom: '0.65rem',
                      }}
                    >
                      Key Responsibilities & Contributions
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                      {item.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.65rem',
                            fontSize: '0.88rem',
                            color: '#cbd5e1',
                            lineHeight: 1.6,
                          }}
                        >
                          <CheckCircle2 size={16} color="#60a5fa" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Outcomes */}
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem',
                      marginBottom: item.verifiedNote ? '1rem' : 0,
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        color: '#34d399',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        marginBottom: '0.4rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <Award size={15} />
                      <span>Deliverables & Learning Outcomes</span>
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {item.outcomes.map((out, i) => (
                        <li key={i} style={{ fontSize: '0.84rem', color: '#e2e8f0', lineHeight: 1.55 }}>
                          • {out}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Integrity / Verification Note */}
                  {item.verifiedNote && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontSize: '0.76rem',
                        color: '#94a3b8',
                      }}
                    >
                      <ShieldCheck size={14} color="#34d399" />
                      <span>{item.verifiedNote}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
