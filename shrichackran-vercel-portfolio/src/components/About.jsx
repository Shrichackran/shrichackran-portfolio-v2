import { BrainCircuit, GraduationCap, Sparkles, Target } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { education, stats } from '../data/portfolioData.js';

export default function About() {
  return (
    <section className="section container" id="about">
      <SectionHeading
        eyebrow="About"
        title="Engineering at the edge of AI"
        subtitle="A focused builder combining electronics, software engineering, AI workflows and automation into practical products."
      />
      <div className="about-grid">
        <div className="glass-card about-card">
          <div className="card-title"><GraduationCap size={22} /> Education</div>
          <h3>{education.university}</h3>
          <p>{education.degree}</p>
          <div className="meta-line"><span>{education.period}</span><span>CGPA: {education.cgpa}</span></div>
          <div className="chips">
            {education.focus.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="glass-card about-card">
          <div className="card-title"><Target size={22} /> Career Focus</div>
          <p>
            I build full-stack products, AI-powered workflows and backend systems that solve practical problems. My current focus is scalable AI systems, LLM integrations and efficient application architecture.
          </p>
          <div className="about-icons">
            <span><BrainCircuit size={18} /> AI Engineering</span>
            <span><Sparkles size={18} /> Product Mindset</span>
          </div>
        </div>
      </div>
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
