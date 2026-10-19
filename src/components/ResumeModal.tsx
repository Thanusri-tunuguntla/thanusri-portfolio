import React, { useEffect } from 'react';
import { X, Download, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '920px',
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <span className="status-badge badge-verified">
                <CheckCircle2 size={13} />
                <span>Verified Candidate Document</span>
              </span>
            </div>
            <h2 id="resume-modal-title" style={{ fontSize: '1.5rem', color: '#ffffff' }}>
              {PERSONAL_INFO.name} — Curriculum Vitae
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.86rem' }}>
              B.Tech Computer Science & Engineering (Artificial Intelligence) • Vignan's Institute of Information Technology
            </p>
          </div>

          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close resume modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body / Viewer */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#0a0d16',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <iframe
            src={PERSONAL_INFO.resumePath}
            title={`${PERSONAL_INFO.name} Resume`}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              backgroundColor: '#0a0d16',
            }}
          />
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <a
            href={PERSONAL_INFO.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <ExternalLink size={15} />
            <span>Open in New Tab</span>
          </a>

          <a
            href={PERSONAL_INFO.resumePath}
            download="Thanusri_Tunuguntla_Resume.pdf"
            className="btn btn-primary btn-sm"
          >
            <Download size={15} />
            <span>Download Official PDF</span>
          </a>

          <button onClick={onClose} className="btn btn-ghost btn-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
