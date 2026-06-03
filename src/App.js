// ─── CONTENT — edit here ───────────────────────────────────────────────────

const EXPERIENCE = [
  {
    title: 'Senior Marketing Data Scientist',
    company: 'Digikala',
    period: 'Apr 2024 – May 2025',
    bullets: [
      'Built RFM segmentation and LTV prediction models across 40M+ user base, identifying high-value segments and directly optimising marketing spend allocation',
      'Led cross-functional analytics across product, marketing, and growth teams, translating ML outputs into actionable retention and acquisition strategies',
    ],
  },
  {
    title: 'Marketing Data Analyst Specialist',
    company: 'Digikala',
    period: 'Jan 2023 – Apr 2024',
    bullets: [
      'Drove churn reduction and LTV improvement for DigiPlus (subscription service)',
      'Built anomaly detection pipelines to enforce data integrity across upstream sources',
      'Delivered stakeholder insight reports informing senior leadership marketing strategy',
    ],
  },
  {
    title: 'Machine Learning Intern',
    company: 'Rahnema College',
    period: 'Jun 2023 – Aug 2023',
    bullets: [
      'Built demand prediction model for online taxi service using geospatial and temporal features from GPS data',
    ],
  },
  {
    title: 'Data Scientist',
    company: 'Data Co Lab',
    period: 'Jul 2021 – Apr 2022',
    bullets: [
      'Built Speech Emotion Recognition model using fast.ai; deployed as production REST API on AWS',
      'Developed background removal pipeline using U2-Net, achieving production-grade accuracy',
      'Built automated data system using Django ORM for large-scale movie database',
    ],
  },
  {
    title: 'Fraud Analyst',
    company: 'Snapp!',
    period: 'Jan 2020 – Oct 2020',
    bullets: [
      'Developed fraud detection methodologies, reducing fraudulent transactions on 60M+ user platform',
      'Optimised SQL queries to enable real-time fraud monitoring at scale',
      'Designed labelled dataset collection system for supervised fraud model training',
    ],
  },
];

const SKILLS = [
  { category: 'Languages', items: 'Python · SQL (MySQL, PostgreSQL) · C/C++' },
  { category: 'ML / Deep Learning', items: 'Scikit-learn · Pandas · NumPy · TensorFlow · PyTorch · fast.ai · A/B Testing' },
  { category: 'AI Engineering', items: 'Prompt Engineering · LLM APIs (Anthropic, OpenAI) · RAG Pipelines' },
  { category: 'Infrastructure', items: 'Git · AWS · Docker · FastAPI' },
  { category: 'Visualisation', items: 'Matplotlib · Seaborn · Plotly · Power BI · Tableau' },
];

const EDUCATION = [
  {
    degree: 'MSc Artificial Intelligence (with Placement)',
    school: 'Brunel University London',
    period: 'Jan 2026 – Present',
    detail: 'Modules: Machine Learning, Deep Learning, Data Visualisation, Predictive Data Analysis',
  },
  {
    degree: 'BSc Computer Science',
    school: 'Amirkabir University of Technology',
    period: 'Sep 2017 – Jun 2022',
    detail: 'Thesis: Automatic Data Preprocessing (Advisor: Dr. Adel Mohammadpour)',
  },
];

// ─── STYLES ────────────────────────────────────────────────────────────────

const s = {
  page: {
    maxWidth: 720,
    margin: '0 auto',
    padding: '0 24px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '28px 0',
    borderBottom: '1px solid var(--border)',
    marginBottom: 80,
  },
  navName: {
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
    color: 'var(--muted)',
    letterSpacing: '0.05em',
  },
  navLinks: {
    display: 'flex',
    gap: 24,
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    color: 'var(--muted)',
  },
  hero: {
    marginBottom: 100,
  },
  heroLabel: {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    color: 'var(--accent)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  heroName: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(42px, 8vw, 72px)',
    lineHeight: 1.05,
    marginBottom: 24,
    letterSpacing: '-0.01em',
  },
  heroBio: {
    fontSize: 17,
    color: 'var(--muted)',
    lineHeight: 1.7,
    maxWidth: 560,
    marginBottom: 36,
  },
  heroLinks: {
    display: 'flex',
    gap: 20,
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
  },
  section: {
    marginBottom: 80,
  },
  sectionLabel: {
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    color: 'var(--accent)',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: 32,
    paddingBottom: 12,
    borderBottom: '1px solid var(--border)',
  },
  jobItem: {
    marginBottom: 40,
    paddingBottom: 40,
    borderBottom: '1px solid var(--border)',
  },
  jobHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
    flexWrap: 'wrap',
    gap: 8,
  },
  jobTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: 20,
  },
  jobPeriod: {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    color: 'var(--muted)',
  },
  jobCompany: {
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
    color: 'var(--accent)',
    marginBottom: 12,
  },
  jobBullets: {
    paddingLeft: 16,
    color: 'var(--muted)',
    fontSize: 15,
    lineHeight: 1.7,
  },
  skillRow: {
    display: 'grid',
    gridTemplateColumns: '160px 1fr',
    gap: '12px 24px',
    marginBottom: 12,
    fontSize: 15,
    alignItems: 'baseline',
  },
  skillCategory: {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    color: 'var(--muted)',
  },
  skillItems: {
    color: 'var(--text)',
    lineHeight: 1.6,
  },
  eduItem: {
    marginBottom: 28,
  },
  eduDegree: {
    fontFamily: 'var(--font-serif)',
    fontSize: 18,
    marginBottom: 2,
  },
  eduMeta: {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    color: 'var(--accent)',
    marginBottom: 4,
  },
  eduDetail: {
    fontSize: 14,
    color: 'var(--muted)',
  },
  contact: {
    padding: '48px 0',
    borderTop: '1px solid var(--border)',
    marginTop: 40,
    marginBottom: 60,
  },
  contactTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: 28,
    marginBottom: 8,
  },
  contactSub: {
    color: 'var(--muted)',
    fontSize: 15,
    marginBottom: 24,
  },
  contactLinks: {
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap',
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
  },
};

// ─── COMPONENT ─────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={s.page}>

      {/* Nav */}
      <nav style={s.nav}>
        <span style={s.navName}>amir goudarzi</span>
        <div style={s.navLinks}>
          <a href="#experience" style={{ color: 'var(--muted)' }}>experience</a>
          <a href="#skills" style={{ color: 'var(--muted)' }}>skills</a>
          <a href="#education" style={{ color: 'var(--muted)' }}>education</a>
          <a href="#contact" style={{ color: 'var(--muted)' }}>contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={s.hero}>
        <p style={s.heroLabel}>ML Engineer · Data Scientist · AI Engineer</p>
        <h1 style={s.heroName}>Amir<br />Goudarzi</h1>
        <p style={s.heroBio}>
          AI and data professional with 4+ years of industry experience building ML systems at
          enterprise scale. Built RFM, LTV, time-series, anomaly detection, and fraud detection
          models across Digikala (40M+ users) and Snapp! (60M+ users). MSc in Artificial
          Intelligence at Brunel University London.
        </p>
        <div style={s.heroLinks}>
          <a href="https://github.com/Darkmatter23" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/amir-goudarzi" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:amirgoudarzi023@gmail.com">Email</a>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={s.section}>
        <p style={s.sectionLabel}>Experience</p>
        {EXPERIENCE.map((job, i) => (
          <div key={i} style={i === EXPERIENCE.length - 1 ? { ...s.jobItem, borderBottom: 'none' } : s.jobItem}>
            <div style={s.jobHeader}>
              <span style={s.jobTitle}>{job.title}</span>
              <span style={s.jobPeriod}>{job.period}</span>
            </div>
            <div style={s.jobCompany}>{job.company}</div>
            <ul style={s.jobBullets}>
              {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section id="skills" style={s.section}>
        <p style={s.sectionLabel}>Skills</p>
        {SKILLS.map((row, i) => (
          <div key={i} style={s.skillRow}>
            <span style={s.skillCategory}>{row.category}</span>
            <span style={s.skillItems}>{row.items}</span>
          </div>
        ))}
      </section>

      {/* Education */}
      <section id="education" style={s.section}>
        <p style={s.sectionLabel}>Education</p>
        {EDUCATION.map((edu, i) => (
          <div key={i} style={s.eduItem}>
            <div style={s.eduDegree}>{edu.degree}</div>
            <div style={s.eduMeta}>{edu.school} · {edu.period}</div>
            <div style={s.eduDetail}>{edu.detail}</div>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section id="contact" style={s.contact}>
        <h2 style={s.contactTitle}>Get in touch</h2>
        <p style={s.contactSub}>Open to ML Engineer, Data Scientist, and AI Engineer placements in London.</p>
        <div style={s.contactLinks}>
          <a href="mailto:amirgoudarzi023@gmail.com">amirgoudarzi023@gmail.com</a>
          <a href="https://linkedin.com/in/amir-goudarzi" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Darkmatter23" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

    </div>
  );
}
