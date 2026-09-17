import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BookOpen,
  Briefcase,
  Code2,
  Cpu,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Send,
  Smartphone,
  Sun,
  Calendar,
  Globe,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: VCardPage,
});

/* ----------------------------------- data ---------------------------------- */

type Project = {
  name: string;
  description: string;
  tags: string[];
  href: string;
  demo?: string;
  screenshot?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Fire Hydrant",
    description:
      "IoT fire-hydrant monitoring platform with live dashboard for pressure, flow, and status telemetry. Full-stack from firmware to React frontend.",
    tags: ["TypeScript", "IoT", "React"],
    href: "https://github.com/rockhubzz/fire-hydrant",
    demo: "https://fire-hydrant-fawn.vercel.app",
    screenshot: "/screenshots/fire-hydrant.png",
  },
  {
    name: "MyMBG — Web",
    description:
      "Kitchen operations system for Makan Bergizi Gratis: ingredients, recipes, production tracking, and distribution management.",
    tags: ["TypeScript", "React", "Postgres"],
    href: "https://github.com/rockhubzz/MyMBG-web",
    demo: "https://my-mbg.vercel.app",
    screenshot: "/screenshots/my-mbg-web.png",
  },
  {
    name: "Jawara",
    description:
      "Cross-platform mobile app for housing estate resident records, built with Flutter and backed by PHP services.",
    tags: ["Dart", "Flutter", "PHP"],
    href: "https://github.com/rockhubzz/Jawara",
    screenshot: "/screenshots/jawara.png",
  },
  {
    name: "Internify",
    description:
      "Web application for internship management with a clean, clarity-focused interface.",
    tags: ["HTML", "CSS", "Web"],
    href: "https://github.com/rockhubzz/Internify",
    screenshot: "/screenshots/internify.png",
  },
  {
    name: "Face Age Detection",
    description:
      "On-device face age detection experiment for mobile with a lightweight vision pipeline.",
    tags: ["C++", "ML", "Dart"],
    href: "https://github.com/rockhubzz/mobile_faceage_detection",
    screenshot: "/screenshots/mobile_faceage_detection.png",
  },
  {
    name: "Sistem Tata Tertib",
    description:
      "PHP based system for tracking student violations and compensations.",
    tags: ["PHP", "SQL", "Web"],
    href: "https://github.com/rockhubzz/PBL_SistemTataTertib",
    screenshot: "/screenshots/sistem-tata-tertib.png",
  },
];

const SERVICES = [
  {
    icon: Code2,
    title: "Full-Stack Web",
    text: "TypeScript, React, Next.js with .NET, Laravel, or Node APIs and Postgres/MySQL.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    text: "Flutter and Dart for cross-platform builds, from resident records to vision experiments.",
  },
  {
    icon: Cpu,
    title: "IoT Systems",
    text: "Embedded firmware, MQTT transport, telemetry pipelines, and live dashboards.",
  },
  {
    icon: Globe,
    title: "Interfaces",
    text: "Calm, content-first UI with clear hierarchy and subtle motion under 300ms.",
  },
];

const SKILLS = [
  { name: "TypeScript / React", level: 90 },
  { name: "Flutter / Dart", level: 85 },
  { name: "Backend (.NET / Laravel / Node)", level: 80 },
  { name: "IoT / MQTT / Embedded C++", level: 75 },
];

const STACK_TABLE = [
  { group: "Languages", items: "TypeScript, Dart, C#, C++, Python, PHP, Java" },
  { group: "Frontend", items: "React, Next.js, Flutter, Tailwind, Vite" },
  { group: "Backend", items: ".NET, Laravel, Node.js, REST APIs" },
  { group: "Systems", items: "IoT, MQTT, Embedded C++, Postgres, MySQL" },
];

const FAQS = [
  {
    q: "What do you actually do?",
    a: "Full-stack, mobile, and IoT. I take systems end-to-end — firmware and sensors, brokers, APIs, and a calm UI on top.",
  },
  {
    q: "Are you open to internships or freelance?",
    a: "Yes. Based in Malang, East Java. Open to internships, collaborations, and small freelance builds.",
  },
  {
    q: "What is your preferred stack?",
    a: "TypeScript + React/Next.js on web, Flutter + Dart on mobile, .NET/Laravel/Node on backend, Postgres or MySQL, MQTT for IoT.",
  },
  {
    q: "How do we start?",
    a: "Send a short brief — scope, timeline, links. I reply with milestones and what I need from you. Email works best.",
  },
];

const FILTERS = ["All", "TypeScript", "Dart", "C++", "PHP", "React"];
const TABS = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
] as const;

type TabId = (typeof TABS)[number]["id"];

/* ----------------------------------- page ---------------------------------- */

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vcard-theme");
      if (stored === "dark" || stored === "light") {
        setTheme(stored);
        return;
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      }
    } catch {
      /* storage unavailable — keep light default */
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("vcard-theme", theme);
    } catch {
      /* storage unavailable */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#17191c" : "#e8eaed");
  }, [theme]);

  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

function VCardPage() {
  const [tab, setTab] = useState<TabId>("about");
  const { theme, toggle } = useTheme();

  return (
    <div className="vcard-page">
      <div className="vcard-container">
        <div className="vcard-layout">
          <Sidebar onNavigate={setTab} />
          <main className="main">
            <Nav active={tab} onChange={setTab} theme={theme} onToggleTheme={toggle} />
            <div className="main-inner">
              {tab === "about" && <AboutPanel onNavigate={setTab} />}
              {tab === "resume" && <ResumePanel />}
              {tab === "portfolio" && <PortfolioPanel />}
              {tab === "contact" && <ContactPanel />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- sidebar --------------------------------- */

function Sidebar({ onNavigate }: { onNavigate: (t: TabId) => void }) {
  return (
    <aside className="sidebar">
      <div className="avatar-wrap">
        <img
          src="/profile.jpg"
          alt="Rocky Alessandro Kristanto"
          className="avatar"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const sib = e.currentTarget.nextElementSibling as HTMLElement | null;
            if (sib) sib.style.display = "grid";
          }}
        />
        <span className="avatar-fallback" style={{ display: "none" }}>
          RK
        </span>
      </div>

      <h1 className="sidebar-name">Rocky Alessandro Kristanto</h1>
      <div className="sidebar-role">
        <span className="badge badge-dark">Full-Stack · Mobile · IoT</span>
      </div>

      <div className="sidebar-divider" />

      <ul className="contact-list">
        <li className="contact-item">
          <span className="contact-icon">
            <Mail size={20} />
          </span>
          <div>
            <div className="contact-label">Email</div>
            <div className="contact-value">
              <a href="mailto:rockyalessandro7@gmail.com">rockyalessandro7@gmail.com</a>
            </div>
          </div>
        </li>
        <li className="contact-item">
          <span className="contact-icon">
            <Phone size={20} />
          </span>
          <div>
            <div className="contact-label">Phone</div>
            <div className="contact-value">Available on request</div>
          </div>
        </li>
        <li className="contact-item">
          <span className="contact-icon">
            <MapPin size={20} />
          </span>
          <div>
            <div className="contact-label">Location</div>
            <div className="contact-value">Malang, East Java</div>
          </div>
        </li>
        <li className="contact-item">
          <span className="contact-icon">
            <Calendar size={20} />
          </span>
          <div>
            <div className="contact-label">Status</div>
            <div className="contact-value">Open to internships</div>
          </div>
        </li>
      </ul>

      <div className="social-row">
        <a
          className="social-btn"
          href="https://github.com/rockhubzz"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          className="social-btn"
          href="https://www.linkedin.com/in/rocky-alessandro-66972535a/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a className="social-btn" href="mailto:rockyalessandro7@gmail.com" aria-label="Email">
          <Mail size={20} />
        </a>
      </div>

      <div style={{ marginTop: 25 }}>
        <button className="btn-primary" style={{ width: "100%" }} onClick={() => onNavigate("contact")}>
          <Send size={16} /> Get in touch
        </button>
      </div>
    </aside>
  );
}

/* ----------------------------------- nav ----------------------------------- */

function Nav({
  active,
  onChange,
  theme,
  onToggleTheme,
}: {
  active: TabId;
  onChange: (t: TabId) => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}) {
  const dark = theme === "dark";
  return (
    <nav className="nav" aria-label="Primary">
      <span className="nav-brand">
        R<span style={{ color: "var(--text-muted)" }}>/</span>
      </span>
      <div className="nav-links" role="tablist" aria-label="Portfolio sections">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            onClick={() => onChange(t.id)}
            className={`nav-link ${active === t.id ? "active" : ""}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-pressed={dark}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        title={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {dark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
}

/* ---------------------------------- about ---------------------------------- */

function AboutPanel({ onNavigate }: { onNavigate: (t: TabId) => void }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="tab-panel">
      <div className="page-head">
        <h2 className="page-title">About Me</h2>
        <div className="title-underline" />
        <p className="lead">
          I&apos;m Rocky Alessandro Kristanto — a developer at Politeknik Negeri Malang. I build
          dedicated systems for real operations, from firmware and sensors to interfaces people
          actually enjoy using. Code isn&apos;t everything. Results matter.
        </p>
      </div>

      <h3 className="section-label">What I&apos;m doing</h3>
      <div className="grid-2">
        {SERVICES.map((s) => (
          <div key={s.title} className="card service-card">
            <span className="service-icon">
              <s.icon size={20} />
            </span>
            <div>
              <h3 className="card-title" style={{ fontSize: 24 }}>{s.title}</h3>
              <p className="card-text">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="section-label">Stack at a glance</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Group</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {STACK_TABLE.map((r) => (
            <tr key={r.group}>
              <td style={{ fontWeight: 600 }}>{r.group}</td>
              <td style={{ color: "var(--text-muted)" }}>{r.items}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="section-label">Questions, answered</h3>
      <div className="faq-list">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="faq-item">
              <button
                className="faq-btn"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{f.q}</span>
                <span className="badge">{isOpen ? "−" : "+"}</span>
              </button>
              <div className={`faq-panel ${isOpen ? "open" : ""}`}>
                <div className="faq-panel-inner">
                  <p className="faq-answer">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 30, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button className="btn-primary" onClick={() => onNavigate("portfolio")}>
          View portfolio
        </button>
        <button className="btn-ghost" onClick={() => onNavigate("resume")}>
          View resume
        </button>
      </div>
    </section>
  );
}

/* ---------------------------------- resume --------------------------------- */

function ResumePanel() {
  return (
    <section className="tab-panel">
      <div className="page-head">
        <h2 className="page-title">Resume</h2>
        <div className="title-underline" />
        <p className="lead">
          Four groups, one pipeline — from language to deploy. Education, experience, and working
          skills.
        </p>
      </div>

      <h3 className="section-label" style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <GraduationCap size={20} /> Education
      </h3>
      <div className="card">
        <ul className="timeline">
          <li className="timeline-item">
            <span className="timeline-dot" />
            <div className="timeline-date">2023 — Present</div>
            <h3 className="card-title" style={{ fontSize: 24, marginTop: 10 }}>
              Politeknik Negeri Malang
            </h3>
            <p className="card-text">Diploma IV — Informatics Engineering. Data structures, web, frameworks, mobile, databases, OOP.</p>
            <div style={{ marginTop: 15, display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["Data Structures", "Web", "Mobile", "Databases", "OOP"].map((c) => (
                <span key={c} className="badge">{c}</span>
              ))}
            </div>
          </li>
          <li className="timeline-item">
            <span className="timeline-dot" />
            <div className="timeline-date">2025</div>
            <h3 className="card-title" style={{ fontSize: 24, marginTop: 10 }}>
              Sarastya Agility — Intern
            </h3>
            <p className="card-text">Full Stack Developer Intern. Backend web, Flutter, Next.js, .NET/C#, CI/CD.</p>
            <div style={{ marginTop: 15, display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["Next.js", "Flutter", ".NET", "CI/CD"].map((c) => (
                <span key={c} className="badge">{c}</span>
              ))}
            </div>
          </li>
        </ul>
      </div>

      <h3 className="section-label" style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Briefcase size={20} /> Experience
      </h3>
      <div className="card">
        <ul className="timeline">
          <li className="timeline-item">
            <span className="timeline-dot" />
            <div className="timeline-date">2025 — 2026</div>
            <h3 className="card-title" style={{ fontSize: 24, marginTop: 10 }}>
              IoT Telemetry — Fire Hydrant
            </h3>
            <p className="card-text">Sensors to dashboard: pressure, flow, status telemetry with a polished React frontend.</p>
          </li>
          <li className="timeline-item">
            <span className="timeline-dot" />
            <div className="timeline-date">2025</div>
            <h3 className="card-title" style={{ fontSize: 24, marginTop: 10 }}>
              MyMBG Kitchen Operations
            </h3>
            <p className="card-text">Ingredients, recipes, production tracking, and distribution for Makan Bergizi Gratis.</p>
          </li>
          <li className="timeline-item">
            <span className="timeline-dot" />
            <div className="timeline-date">2024 — 2025</div>
            <h3 className="card-title" style={{ fontSize: 24, marginTop: 10 }}>
              Flutter Builds — Jawara
            </h3>
            <p className="card-text">Resident records app backed by a PHP service layer.</p>
          </li>
        </ul>
      </div>

      <h3 className="section-label" style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <BookOpen size={20} /> Working skills
      </h3>
      <div className="card">
        {SKILLS.map((s) => (
          <div key={s.name} className="skill-row">
            <div className="skill-head">
              <span style={{ fontWeight: 600 }}>{s.name}</span>
              <span className="badge">{s.level}%</span>
            </div>
            <div className="skill-track">
              <div className="skill-fill" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- portfolio -------------------------------- */

function PortfolioPanel() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.some((t) => t.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section className="tab-panel">
      <div className="page-head">
        <h2 className="page-title">Portfolio</h2>
        <div className="title-underline" />
        <p className="lead">
          Things I&apos;ve built — {PROJECTS.length} selected projects. Filter by stack, open the
          repo, or try the live demo.
        </p>
      </div>

      <div className="filter-row" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`filter-btn ${filter === f ? "active" : ""}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filtered.map((p) => (
          <article key={p.name} className="card project-card">
            <div className="project-media">
              {p.screenshot ? (
                <img
                  src={p.screenshot}
                  alt={`${p.name} screenshot`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <span className="badge">No preview</span>
              )}
            </div>
            <div className="project-body">
              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                <span className="badge">{p.tags[0]}</span>
                {p.demo && <span className="badge badge-dark">Live</span>}
              </div>
              <h3 className="card-title" style={{ fontSize: 24 }}>{p.name}</h3>
              <p className="card-text">{p.description}</p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {p.tags.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.href} target="_blank" rel="noreferrer" className="link-strong">
                  Repository →
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="link-muted">
                    Demo →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="card" style={{ marginTop: 20 }}>
          <p className="card-text">No projects match this filter.</p>
        </div>
      )}
    </section>
  );
}

/* --------------------------------- contact ---------------------------------- */

function ContactPanel() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="tab-panel">
      <div className="page-head">
        <h2 className="page-title">Contact</h2>
        <div className="title-underline" />
        <p className="lead">
          Have a project in mind? Whether it&apos;s an IoT prototype, a full-stack build, or a
          mobile app — I&apos;m happy to chat.
        </p>
      </div>

      <div className="contact-grid">
        <div className="card">
          <h3 className="card-title" style={{ fontSize: 24 }}>Direct channels</h3>
          <p className="card-text">Email works best. I reply with scope and milestones.</p>
          <ul className="contact-list" style={{ marginTop: 20 }}>
            <li className="contact-item">
              <span className="contact-icon"><Mail size={20} /></span>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">
                  <a href="mailto:rockyalessandro7@gmail.com">rockyalessandro7@gmail.com</a>
                </div>
              </div>
            </li>
            <li className="contact-item">
              <span className="contact-icon"><Github size={20} /></span>
              <div>
                <div className="contact-label">GitHub</div>
                <div className="contact-value">
                  <a href="https://github.com/rockhubzz" target="_blank" rel="noreferrer">
                    github.com/rockhubzz
                  </a>
                </div>
              </div>
            </li>
            <li className="contact-item">
              <span className="contact-icon"><Linkedin size={20} /></span>
              <div>
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">
                  <a
                    href="https://www.linkedin.com/in/rocky-alessandro-66972535a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Rocky Alessandro
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 className="card-title" style={{ fontSize: 24 }}>Send a message</h3>
          <p className="card-text">Opens as a draft — nothing is stored.</p>
          <form onSubmit={submit} style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="form-grid form-grid-2">
              <div>
                <label className="field-label" htmlFor="vc-name">Name</label>
                <input
                  id="vc-name"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="field-label" htmlFor="vc-email">Email</label>
                <input
                  id="vc-email"
                  className="input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="field-label" htmlFor="vc-msg">Message</label>
              <textarea
                id="vc-msg"
                className="input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are you building? Timeline? Links?"
                required
              />
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button type="submit" className="btn-primary">
                <Send size={16} /> Send message
              </button>
              <a
                href={`mailto:rockyalessandro7@gmail.com?subject=${encodeURIComponent(
                  `Portfolio inquiry from ${name || "website"}`
                )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`}
                className="btn-ghost"
              >
                Open in email
              </a>
            </div>
          </form>
        </div>
      </div>

      {sent && (
        <div className="modal-backdrop" onClick={() => setSent(false)}>
          <div className="modal" role="dialog" aria-modal="true" aria-label="Message ready" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 15, alignItems: "center" }}>
              <h3 className="card-title" style={{ fontSize: 24 }}>Ready to send</h3>
              <button className="social-btn" aria-label="Close" onClick={() => setSent(false)}>
                <X size={20} />
              </button>
            </div>
            <p className="card-text" style={{ marginTop: 15 }}>
              Thanks{name ? `, ${name}` : ""}. Your draft is addressed to
              rockyalessandro7@gmail.com — click confirm to open your mail app.
            </p>
            <div style={{ marginTop: 25, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href={`mailto:rockyalessandro7@gmail.com?subject=${encodeURIComponent(
                  `Portfolio inquiry from ${name || "website"}`
                )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`}
                className="btn-primary"
              >
                Confirm
              </a>
              <button className="btn-ghost" onClick={() => setSent(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
