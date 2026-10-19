import React from 'react';
import { ArrowRight, FileText, Mail, Brain, Cpu, Code2, Sparkles, CheckCircle2, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '6rem',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline, Bio & CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Small Introduction Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.35rem 0.85rem',
                backgroundColor: 'rgba(59, 130, 246, 0.08)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                borderRadius: 'var(--radius-full)',
                width: 'fit-content',
              }}
            >
              <Sparkles size={14} color="#60a5fa" />
              <span
                style={{
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: '#93c5fd',
                  letterSpacing: '0.04em',
                }}
              >
                {PERSONAL_INFO.heroIntro}
              </span>
            </div>

            {/* Main Name Heading */}
            <h1
              style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.25rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.035em',
                color: '#ffffff',
              }}
            >
              {PERSONAL_INFO.name}
            </h1>

            {/* Professional Headline */}
            <h2
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
                fontWeight: 600,
                color: '#93c5fd',
                letterSpacing: '-0.02em',
                lineHeight: 1.35,
              }}
            >
              {PERSONAL_INFO.heroHeadline}
            </h2>

            {/* Supporting Text */}
            <p
              style={{
                fontSize: '1.05rem',
                color: '#94a3b8',
                lineHeight: 1.7,
                maxWidth: '620px',
              }}
            >
              {PERSONAL_INFO.heroSupportingText}
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginTop: '0.5rem',
              }}
            >
              <a href="#projects" className="btn btn-primary btn-lg">
                <span>Explore My Projects</span>
                <ArrowRight size={18} />
              </a>

              <button onClick={onOpenResume} className="btn btn-secondary btn-lg" aria-label="View verified resume">
                <FileText size={18} />
                <span>View Resume</span>
              </button>

              <a href="#contact" className="btn btn-ghost btn-lg">
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Factual Highlights Chips */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0.85rem',
                marginTop: '1.25rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontSize: '0.85rem',
                  color: '#cbd5e1',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(59, 130, 246, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#60a5fa',
                  }}
                >
                  <Cpu size={16} />
                </div>
                <span>AI/ML-focused projects</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontSize: '0.85rem',
                  color: '#cbd5e1',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(139, 92, 246, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a78bfa',
                  }}
                >
                  <Code2 size={16} />
                </div>
                <span>Python and machine learning</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontSize: '0.85rem',
                  color: '#cbd5e1',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(6, 182, 212, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#22d3ee',
                  }}
                >
                  <Brain size={16} />
                </div>
                <span>Problem-solving practice</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontSize: '0.85rem',
                  color: '#cbd5e1',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(16, 185, 129, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#34d399',
                  }}
                >
                  <CheckCircle2 size={16} />
                </div>
                <span>Open to AI/ML internships</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI Visual Motif & Architecture Card */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Ambient Glow Backdrop */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0,
              }}
            />

            {/* Neural System Card */}
            <div
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '480px',
                padding: '2rem',
                position: 'relative',
                zIndex: 1,
                border: '1px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.15)',
              }}
            >
              {/* Card Header with Terminal dots */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                  <span
                    style={{
                      marginLeft: '0.5rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: '#94a3b8',
                    }}
                  >
                    ai_inference_pipeline.py
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.72rem',
                    color: '#34d399',
                    fontFamily: 'var(--font-mono)',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      boxShadow: '0 0 6px #10b981',
                    }}
                  />
                  <span>MODEL_READY</span>
                </div>
              </div>

              {/* Architecture Node Visualization */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  marginBottom: '1.75rem',
                }}
              >
                {/* Node 1: Raw Inputs & Data */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(59, 130, 246, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#60a5fa',
                      }}
                    >
                      <Terminal size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>
                        Feature Extraction & Preprocessing
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                        TF-IDF Vectorizer • Token Normalization • Outlier Filters
                      </div>
                    </div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#60a5fa' }}>
                    [Stage 1]
                  </span>
                </div>

                {/* Connecting arrow line */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '-0.35rem 0',
                    color: 'rgba(59, 130, 246, 0.5)',
                  }}
                >
                  ↓
                </div>

                {/* Node 2: ML Engine & Inference */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'rgba(59, 130, 246, 0.08)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 0 15px rgba(59, 130, 246, 0.1)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(59, 130, 246, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                      }}
                    >
                      <Brain size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>
                        Predictive & Generative Intelligence
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#93c5fd' }}>
                        Isolation Forest • Logistic Regression • Gemini 2.5 Flash
                      </div>
                    </div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#34d399' }}>
                    Active
                  </span>
                </div>

                {/* Connecting arrow line */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '-0.35rem 0',
                    color: 'rgba(59, 130, 246, 0.5)',
                  }}
                >
                  ↓
                </div>

                {/* Node 3: Decision & Explainability */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(139, 92, 246, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#c084fc',
                      }}
                    >
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>
                        Human-Centered Application Delivery
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                        Explainable Insights • React/Vite Dashboards • REST APIs
                      </div>
                    </div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#a78bfa' }}>
                    [Stage 3]
                  </span>
                </div>
              </div>

              {/* Bottom Quick Metrics Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  textAlign: 'center',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    8
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>
                    Real Projects
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#60a5fa',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    17
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>
                    Certifications
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#34d399',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    2028
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>
                    Graduation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
};
