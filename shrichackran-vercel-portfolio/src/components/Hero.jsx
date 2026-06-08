import { useEffect, useState } from 'react';
import { ArrowDownToLine, Github, Linkedin, Mail, MapPin, Rocket } from 'lucide-react';
import { profile } from '../data/portfolioData.js';

const codeLines = [
  'shrichackran@portfolio:~$ whoami',
  '→ Full-Stack Developer • AI Engineer',
  'shrichackran@portfolio:~$ cat stack.json',
  '{',
  '  "ai": ["LLMs", "RAG", "TensorFlow", "PyTorch"],',
  '  "backend": ["Node.js", "Express", "REST APIs"],',
  '  "mission": "Build useful systems with clean execution"',
  '}'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((current) => (current + 1) % profile.roles.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero container" id="home">
      <div className="hero-content reveal-up">
        <div className="availability"><span /> Available for opportunities</div>
        <h1 className="hero-name">Shrichackran K M</h1>
        <h3>{profile.roles[roleIndex]}</h3>
        <p>{profile.tagline}</p>
        <p className="hero-subline">
          Passionate about shipping real-world impactful platforms using modern technologies — from neural pipelines to production-grade APIs.
        </p>
        <div className="hero-actions">
          <button className="primary-btn" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects <Rocket size={16} />
          </button>
          <a className="secondary-btn" href={`mailto:${profile.email}`}><Mail size={16} /> Contact Me</a>
          <a className="ghost-link" href={profile.resume} download><ArrowDownToLine size={16} /> Download Resume</a>
        </div>
        <div className="social-row">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
          <span><MapPin size={16} /> {profile.location}</span>
        </div>
      </div>

      <div className="hero-visual reveal-up reveal-delay">
        <div className="identity-chip">
          <img src={profile.avatar} alt="Shrichackran K M" />
          <div>
            <strong>ID_0421 · {profile.name}</strong>
            <span>SASTRA Univ · Salem, TN</span>
          </div>
        </div>
        <div className="terminal-card">
          <div className="terminal-top">
            <div className="window-dots"><span /><span /><span /></div>
            <span>~/portfolio · zsh</span>
          </div>
          <pre>{codeLines.map((line, index) => <code key={index}>{line}\n</code>)}</pre>
          <div className="terminal-cursor" />
        </div>
      </div>
    </section>
  );
}
