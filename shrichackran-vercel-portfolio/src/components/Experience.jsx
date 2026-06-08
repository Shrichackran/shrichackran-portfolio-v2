import SectionHeading from './SectionHeading.jsx';
import { experiences } from '../data/portfolioData.js';

export default function Experience() {
  return (
    <section className="section container" id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Work & projects timeline"
        subtitle="Hands-on software, automation and application development experience."
      />
      <div className="timeline">
        {experiences.map((exp, index) => (
          <article className="timeline-item" key={exp.role + exp.company}>
            <div className="timeline-dot" />
            <div className="glass-card timeline-card">
              <span className="period">{exp.period}</span>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p className="location-text">{exp.location}</p>
              <ul>
                {exp.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
