import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, YoutubeIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-ml' | 'nlp-predictive' | 'web-fullstack'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: PROJECTS.length },
    { id: 'ai-ml', label: 'AI & Machine Learning', count: PROJECTS.filter((p) => p.filterCategory === 'ai-ml').length },
    { id: 'nlp-predictive', label: 'NLP & Predictive Models', count: PROJECTS.filter((p) => p.filterCategory === 'nlp-predictive').length },
    { id: 'web-fullstack', label: 'Full Stack & Web', count: PROJECTS.filter((p) => p.filterCategory === 'web-fullstack').length },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.filterCategory === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="section-title">Practical AI & Software Projects</h2>
          <p className="section-desc">
            Production-focused applications, machine learning pipelines, and predictive models developed through academic coursework, community research, and technical internships.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
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
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                style={{
                  padding: '0.5rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  backgroundColor: isActive ? '#3b82f6' : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  border: isActive ? '1px solid #3b82f6' : '1px solid var(--border-subtle)',
                  boxShadow: isActive ? '0 0 15px rgba(59, 130, 246, 0.35)' : 'none',
                }}
              >
                <span>{tab.label}</span>
                <span
                  style={{
                    marginLeft: '0.45rem',
                    fontSize: '0.74rem',
                    padding: '0.1rem 0.45rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                    color: isActive ? '#ffffff' : '#64748b',
                  }}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                border: '1px solid var(--border-card)',
              }}
            >
              <div>
                {/* Header Row: Category Badge & Status */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <span className="status-badge badge-highlight">{project.category}</span>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#60a5fa',
                      backgroundColor: 'rgba(59, 130, 246, 0.08)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <h3
                  style={{
                    fontSize: '1.45rem',
                    color: '#ffffff',
                    fontWeight: 700,
                    marginBottom: '0.35rem',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#93c5fd',
                    fontWeight: 500,
                    marginBottom: '1rem',
                  }}
                >
                  {project.subtitle}
                </p>

                {/* Problem & Solution description */}
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: '#cbd5e1',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.overview}
                </p>

                {/* Key Technical Highlights bullet points */}
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.9rem 1rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#94a3b8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Technical Core
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#e2e8f0', lineHeight: 1.55 }}>
                    {project.myContribution}
                  </p>
                </div>

                {/* Tech Chips */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.45rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span key={i} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span
                      className="tech-chip"
                      style={{ color: '#60a5fa', borderColor: 'rgba(59, 130, 246, 0.3)' }}
                    >
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div>
                {/* Specific Disclaimer if needed */}
                {project.disclaimer && (
                  <div
                    style={{
                      fontSize: '0.74rem',
                      color: '#94a3b8',
                      backgroundColor: 'rgba(245, 158, 11, 0.04)',
                      borderLeft: '2px solid rgba(245, 158, 11, 0.4)',
                      padding: '0.45rem 0.65rem',
                      marginBottom: '1rem',
                      borderRadius: '0 4px 4px 0',
                    }}
                  >
                    <span style={{ color: '#f59e0b', fontWeight: 600 }}>Note: </span>
                    {project.disclaimer.length > 110 ? `${project.disclaimer.substring(0, 107)}...` : project.disclaimer}
                  </div>
                )}

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    gap: '0.75rem',
                  }}
                >
                  <button
                    onClick={() => onSelectProject(project)}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight size={15} />
                  </button>

                  {project.videoDemoUrl && (
                    <a
                      href={project.videoDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '0.45rem 0.75rem' }}
                      title="Watch SIH Demo Video"
                      aria-label={`Watch ${project.title} video demo`}
                    >
                      <YoutubeIcon width={16} height={16} color="#ef4444" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '0.45rem 0.75rem' }}
                      title="View GitHub Repository"
                      aria-label={`View ${project.title} GitHub repository`}
                    >
                      <GithubIcon width={16} height={16} color="#ffffff" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
