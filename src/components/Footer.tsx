import React from 'react';
import { ArrowUp, Code2, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: '#05070d',
        padding: '4rem 0 2.5rem 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Left: Branding & Tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '1px solid rgba(59, 130, 246, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                }}
              >
                TT
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#94a3b8' }}>
              AI Engineer in Progress • B.Tech CSE (Artificial Intelligence) • Class of 2028
            </p>
          </div>

          {/* Center / Right: Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ width: '38px', height: '38px', padding: 0 }}
              aria-label="GitHub Profile"
            >
              <GithubIcon width={17} height={17} color="#ffffff" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ width: '38px', height: '38px', padding: 0 }}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon width={17} height={17} color="#60a5fa" />
            </a>

            <a
              href={PERSONAL_INFO.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ width: '38px', height: '38px', padding: 0 }}
              aria-label="LeetCode Profile"
            >
              <Code2 size={17} color="#f59e0b" />
            </a>

            <a
              href={PERSONAL_INFO.codechefUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ width: '38px', height: '38px', padding: 0 }}
              aria-label="CodeChef Profile"
            >
              <Award size={17} color="#34d399" />
            </a>

            <button
              onClick={scrollToTop}
              className="btn btn-primary btn-sm"
              style={{ width: '38px', height: '38px', padding: 0, marginLeft: '0.5rem' }}
              aria-label="Scroll back to top"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem',
            fontSize: '0.82rem',
            color: '#64748b',
          }}
        >
          <div>
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div>
            Designed with technical precision for AI/ML engineering opportunities.
          </div>
        </div>
      </div>
    </footer>
  );
};
