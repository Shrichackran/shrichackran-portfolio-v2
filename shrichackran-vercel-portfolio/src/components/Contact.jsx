import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Loader2, Mail, MapPin, Send } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { profile } from '../data/portfolioData.js';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'EmailJS environment variables are missing. Add them in .env.local and Vercel settings.'
      });
      return;
    }

    try {
      setLoading(true);
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          subject: form.subject,
          title: form.subject,
          message: form.message
        },
        { publicKey }
      );
      setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' });
      setForm(initialForm);
    } catch (error) {
      setStatus({ type: 'error', message: 'Message failed to send. Please try again or email me directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section container contact-section" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something intelligent"
        subtitle="Open to startups, product engineering, AI engineering and SDE roles."
      />
      <div className="contact-grid">
        <div className="glass-card contact-info">
          <h3>Reach out</h3>
          <p>I respond within 24 hours for roles, collaborations and project discussions.</p>
          <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> github.com/Shrichackran</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> linkedin.com/in/shrichackran-k-m</a>
          <span><MapPin size={18} /> {profile.location}</span>
        </div>

        <form className="glass-card contact-form" onSubmit={submitForm}>
          <div className="form-row">
            <label>
              Name
              <input name="name" value={form.name} onChange={updateField} placeholder="Your name" required />
            </label>
            <label>
              Email
              <input name="email" value={form.email} onChange={updateField} placeholder="you@example.com" type="email" required />
            </label>
          </div>
          <label>
            Subject
            <input name="subject" value={form.subject} onChange={updateField} placeholder="What is this about?" required />
          </label>
          <label>
            Message
            <textarea name="message" value={form.message} onChange={updateField} placeholder="Tell me about your project, role or idea..." rows="6" required />
          </label>
          <button className="primary-btn" type="submit" disabled={loading}>
            {loading ? <Loader2 className="spin" size={16} /> : <Send size={16} />} Send Message
          </button>
          {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}
        </form>
      </div>
    </section>
  );
}
