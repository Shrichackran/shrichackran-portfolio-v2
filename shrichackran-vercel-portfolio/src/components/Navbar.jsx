import { useState } from 'react';
import { Menu, Moon, Sparkles, X } from 'lucide-react';
import { profile } from '../data/portfolioData.js';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="nav-wrap">
      <nav className="navbar container">
        <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="brand-icon"><Sparkles size={16} /></span>
          <span>{profile.shortName}</span>
        </button>

        <div className="desktop-links">
          {links.map((link) => (
            <button key={link} onClick={() => scrollToSection(link)}>{link}</button>
          ))}
        </div>

        <div className="nav-actions">
          <button className="round-btn" aria-label="Theme toggle"><Moon size={16} /></button>
          <button className="talk-btn" onClick={() => scrollToSection('Contact')}>Let's Talk ✦</button>
          <button className="mobile-menu" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mobile-panel container">
          {links.map((link) => (
            <button key={link} onClick={() => scrollToSection(link)}>{link}</button>
          ))}
        </div>
      )}
    </header>
  );
}
