import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolioData.js';

export default function Footer() {
  return (
    <footer className="footer container">
      <span>© 2026 {profile.name}. Built with React, Vite and EmailJS.</span>
      <div>
        <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
        <a href={`mailto:${profile.email}`}><Mail size={17} /></a>
      </div>
    </footer>
  );
}
