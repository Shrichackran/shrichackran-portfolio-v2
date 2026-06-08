import { useEffect, useState } from 'react';
import { ArrowDownToLine, Github, Linkedin, Mail, MapPin, Rocket } from 'lucide-react';
import { profile } from '../data/portfolioData.js';

const codeLines = [
  'const developer = {',
  "  name: 'Shrichackran K M',",
  "  role: 'Full Stack Developer',",
  "  focus: ['AI', 'Backend', 'Automation'],",
  "  stack: ['React', 'Node.js', 'Python'],",
  "  mindset: 'Build, learn, improve',",
  '};'
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
      <div className="hero-content">
        <div className="availability"><span /> Available for opportunities</div>
        <h1>Shri<wbr />chackran K <span>M</span></h1>
        <h3>{profile.roles[roleIndex]}</h3>
        <p>{profile.tagline}</p>
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

      <div className="hero-visual">
        <div className="profile-card">
          <img src={profile.avatar} alt="Shrichackran K M" />
          <div>
            <strong>{profile.name}</strong>
            <span>AI • Full Stack • Automation</span>
          </div>
        </div>
        <div className="code-card">
          <div className="window-dots"><span /><span /><span /></div>
          <pre>{codeLines.map((line, index) => <code key={index}>{line}\n</code>)}</pre>
        </div>
      </div>
    </section>
  );
}
