import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Credentials', count: CERTIFICATIONS.length },
    { id: 'GenAI & LLMs', label: 'GenAI, LLMs & Anthropic', count: CERTIFICATIONS.filter((c) => c.category === 'GenAI & LLMs').length },
    { id: 'Job Simulations', label: 'Industry Job Simulations', count: CERTIFICATIONS.filter((c) => c.category === 'Job Simulations').length },
    { id: 'Programming & Web', label: 'Programming & Web', count: CERTIFICATIONS.filter((c) => c.category === 'Programming & Web').length },
    { id: 'Cybersecurity', label: 'Cybersecurity', count: CERTIFICATIONS.filter((c) => c.category === 'Cybersecurity').length },
  ];

  const filtered = filterCategory === 'all'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter((c) => c.category === filterCategory);

  return (
    <section id="certifications" className="section" style={{ backgroundColor: 'rgba(9, 13, 23, 0.45)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Verified Learning</span>
          </div>
          <h2 className="section-title">Certifications & Credentials</h2>
          <p className="section-desc">
            Documented and verified course completions, hands-on enterprise job simulations, and foundational technical certifications.
          </p>
        </div>

        {/* Filter Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => {
            const isActive = filterCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  backgroundColor: isActive ? '#3b82f6' : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  border: isActive ? '1px solid #3b82f6' : '1px solid var(--border-subtle)',
                  boxShadow: isActive ? '0 0 15px rgba(59, 130, 246, 0.3)' : 'none',
                }}
              >
                <span>{cat.label}</span>
                <span
                  style={{
                    marginLeft: '0.4rem',
                    fontSize: '0.74rem',
                    opacity: 0.8,
                  }}
                >
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filtered.map((cert) => (
            <div
              key={cert.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-card)',
              }}
            >
              <div>
                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                    gap: '0.5rem',
                  }}
                >
                  <span className="status-badge badge-highlight">{cert.category}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#34d399', fontSize: '0.76rem', fontWeight: 600 }}>
                    <ShieldCheck size={14} />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.35rem' }}>
                  {cert.title}
                </h3>
                <div style={{ fontSize: '0.88rem', color: '#93c5fd', fontWeight: 600, marginBottom: '0.85rem' }}>
                  {cert.issuer}
                </div>

                {/* Notes & Syllabus */}
                {cert.notes && (
                  <p style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {cert.notes}
                  </p>
                )}
              </div>

              {/* Bottom details */}
              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  {cert.date}
                </span>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', gap: '0.35rem' }}
                    aria-label={`Verify ${cert.title} credential online`}
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={12} />
                  </a>
                ) : cert.credentialId ? (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: '#94a3b8',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                    }}
                  >
                    ID: {cert.credentialId}
                  </span>
                ) : (
                  <span
                    style={{
                      fontSize: '0.74rem',
                      color: '#94a3b8',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <CheckCircle2 size={13} color="#34d399" />
                    <span>Completed</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
