import { useMemo, useState } from 'react';
import { Boxes, ExternalLink, Github, ImageIcon } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { projects } from '../data/portfolioData.js';

export default function Projects({ onOpenAssets }) {
  const categories = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))], []);
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((project) => project.category === active);

  return (
    <section className="section container" id="projects">
      <SectionHeading
        eyebrow="Featured Work"
        title="Selected projects"
        subtitle="A mix of AI engineering, full-stack systems and automation — built for impact."
      />
      <div className="filter-row">
        {categories.map((category) => (
          <button key={category} className={active === category ? 'active' : ''} onClick={() => setActive(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filtered.map((project) => (
          <article className="project-card glass-card" key={project.id}>
            <div className="project-top">
              <div className="project-icon"><Boxes size={20} /></div>
              <span>{project.category}</span>
              <a className="icon-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}>
                <ExternalLink size={16} />
              </a>
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="highlight-grid">
              {project.highlights.map((item) => <span key={item}>✦ {item}</span>)}
            </div>
            <div className="tech-row">
              {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            <div className="project-actions">
              <a href={project.github} target="_blank" rel="noreferrer">
                View on GitHub <Github size={15} />
              </a>
              {project.assets.length > 0 ? (
                <button onClick={() => onOpenAssets(project.id)}>
                  Assets <ImageIcon size={15} />
                </button>
              ) : (
                <button className="disabled-action" disabled title="No project output images added yet">
                  No Assets <ImageIcon size={15} />
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
