import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, AlertTriangle, Layers, Cpu, ShieldAlert } from 'lucide-react';
import { GithubIcon, YoutubeIcon } from './Icons';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          border: '1px solid rgba(59, 130, 246, 0.35)',
        }}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.45rem', flexWrap: 'wrap' }}>
              <span className="status-badge badge-highlight">{project.category}</span>
              <span className="status-badge badge-verified">{project.statusBadge}</span>
              {project.badge && (
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: '#94a3b8',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {project.badge}
                </span>
              )}
            </div>
            <h2 id="project-modal-title" style={{ fontSize: '1.65rem', color: '#ffffff' }}>
              {project.title}
            </h2>
            <p style={{ color: '#93c5fd', fontSize: '0.94rem', marginTop: '0.2rem' }}>
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close project details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Problem Statement Box */}
          <div
            style={{
              padding: '1.25rem 1.5rem',
              backgroundColor: 'rgba(239, 68, 68, 0.06)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#f87171',
                fontWeight: 600,
                fontSize: '0.85rem',
                marginBottom: '0.4rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              <AlertTriangle size={16} />
              <span>Problem Statement & Context</span>
            </div>
            <p style={{ color: '#e2e8f0', fontSize: '0.94rem', lineHeight: 1.65 }}>
              {project.problemStatement}
            </p>
          </div>

          {/* Overview / What it does */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={17} color="#60a5fa" />
              <span>Solution Overview</span>
            </h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.7 }}>
              {project.overview}
            </p>
          </div>

          {/* Technical Contribution */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Cpu size={17} color="#a78bfa" />
              <span>My Technical Contribution</span>
            </h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.7 }}>
              {project.myContribution}
            </p>
          </div>

          {/* Architecture Details */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              System Architecture & Implementation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {project.architectureDetails.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    fontSize: '0.9rem',
                    color: '#cbd5e1',
                    lineHeight: 1.6,
                  }}
                >
                  <CheckCircle size={16} color="#34d399" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              Key Capabilities & Features
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '0.65rem',
              }}
            >
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '0.65rem 0.9rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    color: '#e2e8f0',
                  }}
                >
                  • {feat}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Actually Used */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.65rem' }}>
              Technologies Actually Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-chip" style={{ fontSize: '0.82rem', padding: '0.3rem 0.75rem' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Disclaimer (if present) */}
          {project.disclaimer && (
            <div
              style={{
                padding: '1rem 1.25rem',
                backgroundColor: 'rgba(245, 158, 11, 0.06)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
              }}
            >
              <ShieldAlert size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase' }}>
                  Ethical & Scope Integrity Note:
                </span>
                <p style={{ fontSize: '0.84rem', color: '#cbd5e1', marginTop: '2px', lineHeight: 1.55 }}>
                  {project.disclaimer}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Actions */}
        <div className="modal-footer">
          {project.videoDemoUrl && (
            <a
              href={project.videoDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
            >
              <YoutubeIcon width={16} height={16} color="#ef4444" />
              <span>Watch SIH Demo Video</span>
              <ExternalLink size={13} />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
            >
              <GithubIcon width={16} height={16} color="#ffffff" />
              <span>View GitHub</span>
              <ExternalLink size={13} />
            </a>
          )}

          <button onClick={onClose} className="btn btn-primary btn-sm">
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
