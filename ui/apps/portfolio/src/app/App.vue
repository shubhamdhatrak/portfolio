<script setup lang="ts">
import { profile, experiences, projects, skillCategories, achievements, education } from '../data/portfolio';

const currentYear = new Date().getFullYear();

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];
</script>

<template>
  <div class="portfolio">
    <!-- Navigation -->
    <nav class="nav">
      <div class="container nav-inner">
        <a href="#" class="nav-brand">{{ profile.name.split(' ')[0] }}</a>
        <div class="nav-links">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="nav-link">
            {{ link.label }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <header class="hero">
      <div class="hero-content">
        <p class="hero-greeting">Hi, I'm</p>
        <h1 class="hero-name">{{ profile.name }}</h1>
        <p class="hero-title">{{ profile.title }}</p>
        <p class="hero-tagline">{{ profile.tagline }}</p>
        <div class="hero-links">
          <a :href="`mailto:${profile.email}`" class="btn btn-primary">Get in Touch</a>
          <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">LinkedIn</a>
          <a :href="profile.github" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>
        </div>
      </div>
    </header>

    <!-- Achievements -->
    <section class="section achievements-section">
      <div class="container">
        <div class="achievements-grid">
          <div v-for="item in achievements" :key="item.label" class="achievement-card">
            <span class="achievement-metric">{{ item.metric }}</span>
            <span class="achievement-label">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="section" id="experience">
      <div class="container">
        <h2 class="section-title">Experience</h2>
        <div class="timeline">
          <div v-for="exp in experiences" :key="exp.company" class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="timeline-role">{{ exp.role }}</h3>
                <span class="timeline-period">{{ exp.period }}</span>
              </div>
              <p class="timeline-company">{{ exp.company }} · {{ exp.location }}</p>
              <ul class="timeline-highlights">
                <li v-for="highlight in exp.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
              <div class="tech-tags">
                <span v-for="tech in exp.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section class="section section-alt" id="projects">
      <div class="container">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
          <div v-for="project in projects" :key="project.title" class="project-card">
            <div class="project-header">
              <h3 class="project-title">{{ project.title }}</h3>
              <span class="project-company">{{ project.company }}</span>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <ul class="project-impact">
              <li v-for="impact in project.impact" :key="impact">{{ impact }}</li>
            </ul>
            <div class="tech-tags">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="section" id="skills">
      <div class="container">
        <h2 class="section-title">Skills</h2>
        <div class="skills-grid">
          <div v-for="category in skillCategories" :key="category.name" class="skill-category">
            <h3 class="skill-category-name">{{ category.name }}</h3>
            <div class="tech-tags">
              <span v-for="skill in category.skills" :key="skill" class="tech-tag">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="section section-alt" id="education">
      <div class="container">
        <h2 class="section-title">Education</h2>
        <div class="education-card">
          <h3 class="education-degree">{{ education.degree }}</h3>
          <p class="education-detail">
            {{ education.institution }} · CGPA {{ education.cgpa }}
          </p>
          <p class="education-detail">{{ education.period }} · {{ education.location }}</p>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section contact-section" id="contact">
      <div class="container">
        <h2 class="section-title">Contact</h2>
        <p class="contact-text">
          Interested in working together? Reach out via email or connect on LinkedIn.
        </p>
        <div class="hero-links">
          <a :href="`mailto:${profile.email}`" class="btn btn-primary">{{ profile.email }}</a>
          <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">LinkedIn</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} {{ profile.name }}. Built with Vue.js.</p>
        <p class="footer-links">
          <a :href="profile.github + '/portfolio'" target="_blank" rel="noopener noreferrer">Source</a>
          <span class="footer-sep">·</span>
          <a href="https://shubhamdhatrak.github.io/portfolio/" rel="noopener noreferrer">Portfolio</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.portfolio {
  min-height: 100vh;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Navigation */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(15, 23, 42, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(71, 85, 105, 0.4);
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
}

.nav-brand {
  font-weight: 700;
  font-size: 1.125rem;
  color: #f8fafc;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #38bdf8;
}

/* Hero */
.hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  color: #f8fafc;
  padding: 6rem 1.5rem 5rem;
  text-align: center;
}

.hero-greeting {
  font-size: 1.125rem;
  color: #94a3b8;
  margin-bottom: 0.5rem;
}

.hero-name {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.hero-title {
  font-size: 1.5rem;
  color: #38bdf8;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.hero-tagline {
  font-size: 1.125rem;
  color: #cbd5e1;
  max-width: 640px;
  margin: 0 auto 2rem;
  line-height: 1.7;
}

.hero-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.9375rem;
  transition: all 0.2s ease;
  text-decoration: none;
}

.btn-primary {
  background: #38bdf8;
  color: #0f172a;
}

.btn-primary:hover {
  background: #7dd3fc;
}

.btn-secondary {
  background: transparent;
  color: #f8fafc;
  border: 1px solid #475569;
}

.btn-secondary:hover {
  border-color: #94a3b8;
  background: rgba(255, 255, 255, 0.05);
}

/* Sections */
.section {
  padding: 4rem 0;
}

.section-alt {
  background: #f8fafc;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 2.5rem;
  letter-spacing: -0.01em;
}

/* Achievements */
.achievements-section {
  padding: 3rem 0;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
}

.achievement-card {
  text-align: center;
  padding: 1.25rem;
}

.achievement-metric {
  display: block;
  font-size: 1.75rem;
  font-weight: 700;
  color: #0ea5e9;
  margin-bottom: 0.25rem;
}

.achievement-label {
  font-size: 0.8125rem;
  color: #64748b;
  line-height: 1.4;
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0.375rem;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 2px;
  background: #e2e8f0;
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -1.625rem;
  top: 0.375rem;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: #0ea5e9;
  border: 2px solid #ffffff;
  box-shadow: 0 0 0 2px #0ea5e9;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.timeline-role {
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
}

.timeline-period {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
}

.timeline-company {
  font-size: 0.9375rem;
  color: #475569;
  margin-bottom: 0.75rem;
}

.timeline-highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
}

.timeline-highlights li {
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.5rem;
  font-size: 0.9375rem;
  color: #334155;
  line-height: 1.6;
}

.timeline-highlights li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #0ea5e9;
}

/* Projects */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: box-shadow 0.2s ease;
}

.project-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.project-title {
  font-size: 1.0625rem;
  font-weight: 600;
  color: #0f172a;
}

.project-company {
  font-size: 0.8125rem;
  color: #0ea5e9;
  font-weight: 500;
}

.project-description {
  font-size: 0.9375rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.project-impact {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
}

.project-impact li {
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.375rem;
  font-size: 0.875rem;
  color: #334155;
  line-height: 1.5;
}

.project-impact li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #0ea5e9;
  font-weight: 700;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.skill-category-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.75rem;
}

/* Tech Tags */
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.tech-tag {
  display: inline-block;
  padding: 0.25rem 0.625rem;
  background: #f1f5f9;
  color: #475569;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Education */
.education-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.education-degree {
  font-size: 1.0625rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.education-detail {
  font-size: 0.9375rem;
  color: #475569;
  margin-bottom: 0.25rem;
}

/* Contact */
.contact-section {
  text-align: center;
}

.contact-text {
  font-size: 1.0625rem;
  color: #475569;
  margin-bottom: 1.5rem;
}

/* Footer */
.footer {
  background: #0f172a;
  color: #94a3b8;
  padding: 2rem 0;
  text-align: center;
  font-size: 0.875rem;
}

.footer-links {
  margin-top: 0.5rem;
}

.footer-links a {
  color: #64748b;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: #38bdf8;
}

.footer-sep {
  margin: 0 0.5rem;
  color: #475569;
}

/* Responsive */
@media (max-width: 640px) {
  .nav-links {
    gap: 0.75rem;
  }

  .nav-link {
    font-size: 0.75rem;
  }

  .hero-name {
    font-size: 2.25rem;
  }

  .hero-title {
    font-size: 1.25rem;
  }

  .timeline-header {
    flex-direction: column;
  }
}
</style>
