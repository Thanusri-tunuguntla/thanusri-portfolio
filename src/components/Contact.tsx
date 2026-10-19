import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errors.message = 'Please enter a message';
    return errors;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    const mailtoSubject = encodeURIComponent(
      formData.subject.trim() || `Inquiry from ${formData.name} via AI Portfolio`
    );
    const mailtoBody = encodeURIComponent(
      `Hello Thanusri,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from your Portfolio Website.`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's build something intelligent.</h2>
          <p className="section-desc">
            I'm interested in AI/ML internships, collaborative projects, and opportunities to contribute to practical engineering work. If you're hiring, building something interesting, or looking for a motivated collaborator, I'd love to connect.
          </p>
        </div>

        {/* Split Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            maxWidth: '1080px',
            margin: '0 auto',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Outreach & Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              className="glass-card"
              style={{
                padding: '2.25rem',
                border: '1px solid var(--border-card)',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: '#34d399',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                }}
              >
                <Sparkles size={14} />
                <span>Actively Seeking AI/ML Internships</span>
              </div>

              <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                Direct Contact Channels
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Feel free to email me directly or reach out through LinkedIn. I prioritize internship inquiries, research collaborations, and open-source project discussions.
              </p>

              {/* Email Copy Card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1rem',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(59, 130, 246, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#60a5fa',
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>
                      Primary Email
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      style={{ fontSize: '0.94rem', color: '#ffffff', fontWeight: 600 }}
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary btn-sm"
                  style={{ gap: '0.4rem' }}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={14} color="#34d399" />
                      <span style={{ color: '#34d399' }}>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  color: '#cbd5e1',
                  fontSize: '0.9rem',
                }}
              >
                <MapPin size={18} color="#60a5fa" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {/* Fast Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent('Internship / Collaboration Inquiry')}`}
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <Mail size={16} />
                  <span>Send Direct Email</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  aria-label="Connect on LinkedIn"
                >
                  <LinkedinIcon width={18} height={18} color="#60a5fa" />
                </a>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  aria-label="View GitHub Profile"
                >
                  <GithubIcon width={18} height={18} color="#ffffff" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Mailto Contact Form */}
          <div
            className="glass-card"
            style={{
              padding: '2.25rem',
              border: '1px solid var(--border-card)',
            }}
          >
            <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Fill out this form to prepare a personalized direct message in your mail application. No intermediaries or unverified backends.
            </p>

            {formSubmitted && (
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  color: '#34d399',
                  fontSize: '0.88rem',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Check size={16} />
                <span>Your email client was initiated. Thank you for reaching out!</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Name & Email Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }} className="form-row">
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.35rem' }}
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: formErrors.name ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                    }}
                  />
                  {formErrors.name && (
                    <span style={{ fontSize: '0.76rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>
                      {formErrors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.35rem' }}
                  >
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: formErrors.email ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                    }}
                  />
                  {formErrors.email && (
                    <span style={{ fontSize: '0.76rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>
                      {formErrors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.35rem' }}
                >
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="AI/ML Internship Opportunity / Project Collaboration"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.35rem' }}
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about the role, project, or event..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: formErrors.message ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                  }}
                />
                {formErrors.message && (
                  <span style={{ fontSize: '0.76rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>
                    {formErrors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem' }}>
                <Send size={16} />
                <span>Open Mail Client & Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1.1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
