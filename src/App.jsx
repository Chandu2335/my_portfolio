import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Stats } from './components/Stats/Stats';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Timeline } from './components/Timeline/Timeline';
import { Projects } from './components/Projects/Projects';
import { Strengths } from './components/Strengths/Strengths';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { ResumeModal } from './components/ResumeModal/ResumeModal';
import { BackToTop } from './components/BackToTop/BackToTop';
import './App.css';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="portfolio-app">
        {/* Sticky Navbar with Scroll Progress & Theme Switcher */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        <main id="main-content">
          {/* Hero Section */}
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* Key Stats Counter Ribbon */}
          <Stats />

          {/* About Me Section */}
          <About />

          {/* Skills & Technologies Section */}
          <Skills />

          {/* Experience / Professional Training & Education Timeline */}
          <Timeline />

          {/* Projects Section */}
          <Projects />

          {/* Core Strengths Section */}
          <Strengths />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Back to Top Button */}
        <BackToTop />

        {/* ATS Resume Modal Viewer */}
        <ResumeModal 
          isOpen={isResumeModalOpen} 
          onClose={() => setIsResumeModalOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
