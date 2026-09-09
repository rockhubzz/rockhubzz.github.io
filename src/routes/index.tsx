import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

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
      "IoT fire-hydrant monitoring platform with a live web dashboard for pressure, flow, and status telemetry. Full-stack from embedded firmware to a polished React frontend.",
    tags: ["TypeScript", "IoT", "React", "Next.js"],
    href: "https://github.com/rockhubzz/fire-hydrant",
    demo: "https://fire-hydrant-fawn.vercel.app",
    screenshot: "/screenshots/fire-hydrant.png",
  },
  {
    name: "MyMBG — Web",
    description:
      "Full-stack kitchen operations system for the Makan Bergizi Gratis program: ingredients, recipes, production tracking, and distribution management.",
    tags: ["TypeScript", "React", "Next.js", "Postgres"],
    href: "https://github.com/rockhubzz/MyMBG-web",
    demo: "https://my-mbg.vercel.app",
    screenshot: "/screenshots/my-mbg-web.png",
  },
  {
    name: "Jawara",
    description:
      "Cross-platform mobile app to manage housing estate residents records built with Flutter, backed by a PHP service layer.",
    tags: ["Dart", "Flutter", "PHP"],
    href: "https://github.com/rockhubzz/Jawara",
    screenshot: "/screenshots/jawara.png",
  },
  {
    name: "Internify",
    description:
      "A web application for internship management — styled with CSS and designed for clarity.",
    tags: ["HTML", "CSS", "Web"],
    href: "https://github.com/rockhubzz/Internify",
    screenshot: "/screenshots/internify.png",
  },
  {
    name: "Face Age Detection",
    description:
      "On-device face age detection experiment for mobile — computer vision with a lightweight pipeline.",
    tags: ["C++", "ML", "Flutter", "Dart"],
    href: "https://github.com/rockhubzz/mobile_faceage_detection",
    screenshot: "/screenshots/mobile_faceage_detection.png",
  },
  {
    name: "Sistem Tata Tertib Mahasiswa",
    description: "PHP based system for tracking student violations and compensations.",
    tags: ["PHP", "SQL Server", "Web"],
    href: "https://github.com/rockhubzz/PBL_SistemTataTertib",
    screenshot: "/screenshots/sistem-tata-tertib.png",
  },
];

const STACK = [
  { group: "Languages", items: ["TypeScript", "Dart", "C#", "C++", "Python", "PHP", "Java"] },
  { group: "Frontend", items: ["React", "Next.js", "Flutter", "Tailwind CSS", "Vite"] },
  { group: "Backend", items: [".NET", "Laravel", "Node.js", "REST APIs"] },
  { group: "Systems", items: ["IoT", "MQTT", "Embedded C++", "Postgres", "MySQL"] },
];

const FAQS = [
  {
    q: "What do you actually do?",
    a: "Full-stack, mobile, and IoT. I take systems end-to-end — firmware and sensors, message brokers, APIs, and a calm UI on top. Recent work: hydrant telemetry, kitchen operations for Makan Bergizi Gratis, Flutter apps.",
  },
  {
    q: "Are you open to internships or freelance?",
    a: "Yes. I'm based in Malang, East Java and open to internships, collaborations, and small freelance builds — especially IoT dashboards, full-stack web apps, and Flutter.",
  },
  {
    q: "What is your preferred stack?",
    a: "TypeScript + React / Next.js on the web, Flutter + Dart on mobile, .NET / Laravel / Node on the backend, Postgres or MySQL for data, MQTT for IoT transport.",
  },
  {
    q: "How do we start working together?",
    a: "Send a short brief — what you're building, timeline, and links. I reply with scope, milestones, and what I need from you. Email works best.",
  },
];

const NAV_LINKS = [
  { href: "#work", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

/* ---------------------------------- hooks --------------------------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal-section ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------------------------------- page ---------------------------------- */

function Index() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff]">
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Knowledge />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------------- navigation ------------------------------- */
/* walaszczyk: minimal top bar — mark left, centered links, dash menu right.   */

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-20 transition-colors duration-200 ${scrolled && !open ? "bg-[#000000]" : "bg-transparent"
          }`}
      >
        <header className="nav-studio mx-auto w-full max-w-[60rem]">
          <a href="#top" className="studio-mark" aria-label="Back to top">
            R<span className="studio-mark-slash">/</span>
          </a>

          <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-sm">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden text-xs tracking-widest text-[#999999] uppercase sm:block">
              Malang, ID
            </span>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="menu-dash"
            >
              <span className={`menu-dash-bar ${open ? "menu-dash-open-top" : ""}`} />
              <span className={`menu-dash-bar ${open ? "menu-dash-open-bottom" : ""}`} />
            </button>
          </div>
        </header>
        {scrolled && !open && <div className="section-divider" />}
      </div>

      {open && (
        <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Site menu">
          <nav className="mobile-menu-open mx-auto flex w-full max-w-[60rem] flex-col px-4 pt-28 pb-12 sm:px-6">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="mobile-menu-item menu-overlay-link"
                style={{ animationDelay: `${0.05 + i * 0.05}s` }}
              >
                <span className="menu-overlay-index">0{i + 1}</span>
                {l.label}
              </a>
            ))}
            <div className="mobile-menu-item mt-12 flex flex-wrap gap-4" style={{ animationDelay: "0.3s" }}>
              <a href="#work" onClick={close} className="btn-pill-light">
                View work <span aria-hidden="true">→</span>
              </a>
              <a href="#contact" onClick={close} className="btn-ghost">
                Get in touch
              </a>
            </div>
            <div className="mobile-menu-item mt-12 flex flex-wrap gap-4 text-sm text-[#999999]">
              <a href="https://github.com/rockhubzz" target="_blank" rel="noreferrer" className="menu-meta-link">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rocky-alessandro-66972535a/"
                target="_blank"
                rel="noreferrer"
                className="menu-meta-link"
              >
                LinkedIn
              </a>
              <a href="mailto:rockyalessandro7@gmail.com" className="menu-meta-link">
                Email
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

/* ---------------------------------- hero ---------------------------------- */
/* walaszczyk hero: full-viewport dark stage, oversized 2-line display,        */
/* supporting paragraph, pill CTA row, stat strip on a top border.             */

function Hero() {
  return (
    <section id="top" className="hero-stage">
      <div className="mx-auto w-full max-w-[60rem] px-4 pt-36 sm:px-6 sm:pt-44">
        <div className="hero-stagger flex flex-col items-start">
          <div className="hero-profile-row">
            {/* Profile photo placeholder — swap inner with:
                <img src="/profile.jpg" alt="Rocky Alessandro Kristanto" className="hero-avatar-img" /> */}
            <div className="hero-avatar" role="img" aria-label="Profile photo placeholder">
              {/* <span aria-hidden="true" className="hero-avatar-initials">
                RK
              </span> */}
              <img src="/profile.jpg" alt="Rocky Alessandro Kristanto" className="hero-avatar-img" />
              <span aria-hidden="true" className="hero-avatar-status" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="badge">Portfolio — Malang, ID</span>
              <span className="hero-available">
                <span aria-hidden="true" className="hero-available-dot" />
                Open to work
              </span>
            </div>
          </div>
          <h1 className="hero-display mt-8">
            Code isn&apos;t everything.
            <br />
            Results matter.
          </h1>
          <p className="mt-8 max-w-2xl text-[1.25rem] leading-relaxed text-[#999999]">
            I&apos;m Rocky Alessandro Kristanto — full-stack, mobile, and IoT developer. I build
            dedicated systems for real operations, from firmware and sensors to interfaces people
            actually enjoy using.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="btn-pill-light">
              View work <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[60rem] px-4 pb-12 sm:px-6">
        <dl className="hero-stats mt-16">
          {[
            ["35+", "Public repos"],
            ["9", "Languages"],
            ["IoT → Web", "End-to-end"],
            ["2026", "Latest release"],
          ].map(([k, v]) => (
            <div key={v}>
              <dt className="sr-only">{v}</dt>
              <dd className="text-2xl font-bold text-[#ffffff]">{k}</dd>
              <dd className="mt-1 text-xs tracking-widest text-[#999999] uppercase">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------------------------------- work ---------------------------------- */

function Work() {
  const [filter, setFilter] = useState("all");
  const tags = ["all", "TypeScript", "Dart", "C++", "PHP", "Python"];
  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filter));

  return (
    <section id="work" className="section-shell">
      <Reveal>
        <p className="section-index">01 — Portfolio</p>
        <div className="section-head-row">
          <h2 className="section-title">
            Things I&apos;ve built.
          </h2>
          <a
            href="https://github.com/rockhubzz?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="section-side-link"
          >
            All repositories →
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              aria-pressed={filter === t}
              className={`filter-pill ${filter === t ? "filter-pill-active" : "filter-pill-idle"}`}
            >
              {t === "all" ? "All" : t}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid w-full gap-4 sm:grid-cols-2">
        {filtered.map((p, i) => (
          <Reveal key={p.name} delay={Math.min(i * 40, 200)}>
            <article className="card work-card">
              <div className="work-media">
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
                  <span className="text-xs text-[#999999]">Screenshot placeholder</span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs tracking-widest text-[#999999] uppercase">
                    0{i + 1} — {p.tags[0]}
                  </span>
                  {p.demo && <span className="badge badge-accent">Live</span>}
                </div>
                <h3 className="mt-4 text-lg font-bold">{p.name}</h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#999999]">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4 border-t border-[#333333] pt-4 text-sm">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[#ffffff] transition-colors duration-200 hover:text-[#ff8a8a]"
                  >
                    Repository →
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#999999] transition-colors duration-200 hover:text-[#ff8a8a]"
                    >
                      Demo →
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- about --------------------------------- */

function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-index">02 — About</p>
        <h2 className="section-title">
          Builder across
          <br />
          the whole stack.
        </h2>
        <p className="section-lead">
          I&apos;m a developer at Politeknik Negeri Malang who enjoys pulling the whole thread —
          embedded firmware, message brokers, APIs, and a calm UI on top.
        </p>
      </Reveal>

      <div className="mt-12 grid w-full gap-4 sm:grid-cols-2">
        <Reveal delay={80}>
          <div className="card h-full p-6">
            <p className="text-xs font-medium tracking-widest text-[#ff8a8a] uppercase">Currently</p>
            <ul className="mt-4 space-y-4 text-sm">
              <AboutRow label="Focus" value="IoT, Full-stack, Flutter" />
              <AboutRow label="Learning" value="Distributed systems, Edge ML" />
              <AboutRow label="Location" value="Malang, East Java" />
              <AboutRow label="Open to" value="Internships & collaborations" />
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card grid h-full grid-cols-2 gap-4 p-6">
            {[
              ["35+", "Open source repos across 9 languages"],
              ["9", "Languages in active use"],
              ["IoT → UI", "From firmware to polished interfaces"],
              ["2026", "Latest release shipped"],
            ].map(([k, v]) => (
              <div key={k} className="stat-cell">
                <div className="text-xl font-bold">{k}</div>
                <div className="mt-1 text-xs leading-snug text-[#999999]">{v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={80}>
        <div className="mt-4 grid w-full gap-4 sm:grid-cols-2">
          <div className="card edu-card">
            <h3 className="text-lg font-bold">Politeknik Negeri Malang</h3>
            <p className="mt-1 text-sm text-[#999999]">Diploma IV — Informatics Engineering</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Data Structures", "Web Programming", "Frameworks", "Mobile", "Databases", "OOP"].map(
                (c) => (
                  <span key={c} className="badge">
                    {c}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="card edu-card">
            <h3 className="text-lg font-bold">Sarastya Agility</h3>
            <p className="mt-1 text-sm text-[#999999]">Full Stack Developer Intern</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Backend Web", "Flutter", "Next.js", ".NET / C#", "CI/CD"].map((c) => (
                <span key={c} className="badge">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function AboutRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="grid grid-cols-[5rem_minmax(0,1fr)] items-start gap-4">
      <span className="text-[#999999]">{label}</span>
      <span className="text-[#ffffff]">{value}</span>
    </li>
  );
}

/* -------------------------------- knowledge -------------------------------- */

function Knowledge() {
  return (
    <section id="stack" className="section-shell">
      <Reveal>
        <p className="section-index">03 — Stack</p>
        <div className="section-head-row">
          <h2 className="section-title">Tools I use.</h2>
          <p className="max-w-sm text-sm leading-relaxed text-[#999999]">
            Four groups, one pipeline — from language to deploy. Pick a lane or take the whole
            stack.
          </p>
        </div>
      </Reveal>
      <div className="mt-12 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((g, i) => (
          <Reveal key={g.group} delay={Math.min(i * 40, 200)}>
            <div className="card h-full p-4">
              <p className="text-xs font-medium tracking-widest text-[#ff8a8a] uppercase">
                0{i + 1} — {g.group}
              </p>
              <ul className="mt-4 space-y-4 text-sm">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[#ffffff]">
                    <span className="h-1 w-1 rounded-full bg-[#ff8a8a]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------- faq ----------------------------------- */

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="section-shell">
      <Reveal>
        <p className="section-index">04 — FAQ</p>
        <h2 className="section-title">Questions, answered.</h2>
      </Reveal>
      <div className="mt-12 w-full">
        {FAQS.map((f, i) => {
          const open = openIndex === i;
          return (
            <Reveal key={f.q} delay={Math.min(i * 40, 160)}>
              <div className={`faq-item ${open ? "faq-item-open" : ""}`}>
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="faq-trigger"
                >
                  <span className="faq-q">
                    <span className="faq-index">0{i + 1}</span>
                    {f.q}
                  </span>
                  <span className={`faq-icon ${open ? "faq-icon-open" : ""}`} aria-hidden="true">
                    +
                  </span>
                </button>
                <div className={`faq-answer ${open ? "faq-answer-open" : ""}`}>
                  <p className="faq-answer-inner">{f.a}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ----------------------------------- cta ----------------------------------- */

function Cta() {
  return (
    <section id="contact" className="section-shell">
      <Reveal>
        <div className="cta-panel">
          <span className="badge">05 — Contact</span>
          <h2 className="cta-title">
            Have a project in mind? Let&apos;s talk.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-[#999999]">
            Whether it&apos;s an IoT prototype, a full-stack build, or a mobile app — I&apos;m
            happy to chat.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/rocky-alessandro-66972535a/"
              target="_blank"
              rel="noreferrer"
              className="btn-pill-light"
            >
              LinkedIn <span aria-hidden="true">→</span>
            </a>
            <a
              href="https://github.com/rockhubzz"
              target="_blank"
              rel="noreferrer"
              className="btn-pill-light"
            >
              GitHub <span aria-hidden="true">→</span>
            </a>
            <a href="mailto:rockyalessandro7@gmail.com" className="btn-ghost">
              Email
            </a>
          </div>
          <div className="cta-meta">
            <span>rockyalessandro7@gmail.com</span>
            <span aria-hidden="true">·</span>
            <span>Malang, East Java</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* --------------------------------- footer ---------------------------------- */

function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="border-t border-[#333333] bg-[#000000]">
      <div className="mx-auto flex w-full max-w-[60rem] flex-col gap-4 px-4 py-8 text-sm text-[#999999] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>© {year ?? ""} Rocky Alessandro Kristanto</span>
        <nav className="flex flex-wrap gap-4" aria-label="Footer">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="footer-link">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#top" className="footer-link">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
