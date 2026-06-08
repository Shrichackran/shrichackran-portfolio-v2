import { LayoutDashboard } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { services } from '../data/portfolioData.js';

export default function Services() {
  return (
    <section className="section container" id="services">
      <SectionHeading
        eyebrow="Services"
        title="What I can build"
        subtitle="Practical capabilities across software development, AI integration and workflow automation."
      />
      <div className="services-grid">
        {services.map((service) => (
          <div className="glass-card service-card" key={service.title}>
            <LayoutDashboard size={22} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
