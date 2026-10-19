import React from 'react';
import { Code2, Award, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { CODING_PROFILES } from '../data/portfolioData';

export const CodingProfiles: React.FC = () => {
  const getProfileIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon width={24} height={24} color="#f8fafc" />;
      case 'Linkedin':
        return <LinkedinIcon width={24} height={24} color="#60a5fa" />;
      case 'Code2':
        return <Code2 size={24} color="#f59e0b" />;
      case 'Award':
      default:
        return <Award size={24} color="#34d399" />;
    }
  };

  return (
    <section id="profiles" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Developer Presence</span>
          </div>
          <h2 className="section-title">Coding & Developer Profiles</h2>
          <p className="section-desc">
            Explore active source code repositories, algorithmic problem-solving practice, and professional networks across verified platforms.
          </p>
        </div>

        {/* Profiles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {CODING_PROFILES.map((profile) => (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem',
                textDecoration: 'none',
              }}
              aria-label={`Visit Thanusri's ${profile.platform} profile`}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getProfileIcon(profile.iconName)}
                  </div>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: '#93c5fd',
                      backgroundColor: 'rgba(59, 130, 246, 0.08)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                    }}
                  >
                    {profile.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.2rem' }}>
                  {profile.platform}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.84rem',
                    color: '#60a5fa',
                    marginBottom: '0.75rem',
                  }}
                >
                  @{profile.username}
                </div>

                <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                  {profile.description}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: '#60a5fa',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  paddingTop: '0.85rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <span>View Verified Profile</span>
                <ArrowUpRight size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
