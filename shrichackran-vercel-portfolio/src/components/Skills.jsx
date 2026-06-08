import SectionHeading from './SectionHeading.jsx';
import { skills } from '../data/portfolioData.js';

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Modern stack, AI-first"
        subtitle="A focused toolset across full-stack engineering, AI/ML and production tooling."
      />
      <div className="skills-grid">
        {Object.entries(skills).map(([group, items]) => (
          <div className="glass-card skill-card" key={group}>
            <h3>{group}</h3>
            <div className="skill-tags">
              {items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
