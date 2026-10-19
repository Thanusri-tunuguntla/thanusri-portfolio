import { useState } from 'react';
import { NetworkBackground } from './components/NetworkBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { CodingProfiles } from './components/CodingProfiles';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import type { Project } from './data/portfolioData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Background Interactive AI Neural Network Canvas */}
      <NetworkBackground />

      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections (Strict Order Specified by User) */}
      <main className="main-content">
        {/* Section B: Hero */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Section C: About Me */}
        <About />

        {/* Section D: Featured Projects */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section E: Skills & Technical Stack */}
        <Skills />

        {/* Section F: Experience & Practical Work */}
        <Experience />

        {/* Section G: Certifications */}
        <Certifications />

        {/* Section H: Coding & Developer Profiles ("Find Me Online") */}
        <CodingProfiles />

        {/* Section I: Education */}
        <Education />

        {/* Section J: Contact & Internship Opportunities */}
        <Contact />
      </main>

      {/* Section K: Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

export default App;
