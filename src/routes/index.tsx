import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

type Project = {
  name: string;
  description: string;
  tags: string[];
  href: string;
  demo?: string;
  featured?: boolean;
  screenshot?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Fire Hydrant",
    description:
      "IoT fire-hydrant monitoring platform with a live web dashboard for pressure, flow, and status telemetry. Full-stack from embedded firmware to a polished React frontend.",
    tags: ["TypeScript", "IoT", "React", "Next.js", "Tailwind CSS"],
    href: "https://github.com/rockhubzz/fire-hydrant",
    demo: "https://fire-hydrant-fawn.vercel.app",
    featured: true,
    screenshot: "/screenshots/fire-hydrant.png",
  },
  {
    name: "MyMBG — Web",
    description:
      "Full-stack kitchen operations system for the Makan Bergizi Gratis program: ingredients, recipes, production tracking, and distribution management.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Postgres"],
    href: "https://github.com/rockhubzz/MyMBG-web",
    demo: "https://my-mbg.vercel.app",
    featured: true,
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
    description:
      "PHP based system for tracking student violations and compensations.",
    tags: ["PHP", "SQL Server", "Web"],
    href: "https://github.com/rockhubzz/PBL_SistemTataTertib",
    screenshot: "/screenshots/sistem-tata-tertib.png",
  },
];

const STACK = [
  {
    group: "Languages",
    items: ["TypeScript", "Dart", "C#", "C++", "Python", "PHP", "Java"],
    icon: "code",
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Flutter", "Tailwind CSS", "Vite"],
    icon: "layout",
  },
  {
    group: "Backend",
    items: [".NET", "Laravel", "Node.js", "REST APIs"],
    icon: "server",
  },
  {
    group: "Systems",
    items: ["IoT", "MQTT", "Embedded C++", "Postgres", "MySQL"],
    icon: "cpu",
  },
];

const HIGHLIGHTS = [
  {
    icon: "star",
    label: "35+ Repositories",
    detail: "Open source projects across 9 languages",
  },
  {
    icon: "globe",
    label: "35 Repositories",
    detail: "Public projects on GitHub",
  },
  {
    icon: "code",
    label: "9 Languages",
    detail: "TypeScript, Dart, C#, C++, Python, PHP, Java, JS, HTML",
  },
  {
    icon: "zap",
    label: "Full-Stack + IoT",
    detail: "From embedded firmware to polished UIs",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#work", label: "Work" },
    { href: "#stack", label: "Stack" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "bg-background/80 border-b border-border/40 shadow-lg shadow-black/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 grid grid-cols-[minmax(0,1fr)_auto] items-center">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2.5 font-display font-semibold group"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-amber-600 shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow">
            <img
              src="/R-white.ico"
              alt="Rocky Alessandro Kristanto"
              className="h-5 w-5"
            />
          </span>
          <span className="truncate text-sm sm:text-base">
            Rocky Alessandro
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-lg hover:text-foreground hover:bg-white/5 transition-all"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/rockhubzz"
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-primary to-amber-500 px-4 py-2 text-sm font-medium text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
          >
            GitHub
          </a>
        </nav>
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 hover:bg-white/5 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg px-3 py-2.5 transition-all"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://github.com/rockhubzz"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-primary to-amber-500 px-4 py-2 font-medium text-primary-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
    }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.offsetWidth;
        if (p.x > canvas.offsetWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.offsetHeight;
        if (p.y > canvas.offsetHeight) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(217, 169, 78, ${p.a})`;
        ctx.fill();
      });

      // draw lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(217, 169, 78, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="top" className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-orb-1" />
        <div className="absolute top-[10%] right-[-15%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] animate-orb-2" />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] animate-orb-3" />
      </div>
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-mono text-primary backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Tech Enthusiast
        </div>
        <h1 className="mt-8 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl">
          Rocky Alessandro{" "}
          <br className="hidden sm:block" />
          <span className="text-gradient">Kristanto</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
          Full-stack, mobile, and IoT developer based in Malang, Indonesia. I
          build systems end-to-end — from firmware and sensors, through APIs and
          databases, to the interfaces people actually use.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-amber-500 px-6 py-3 text-sm font-medium text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
          >
            View work
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border/60 bg-card/60 backdrop-blur-sm px-6 py-3 text-sm font-medium hover:bg-card hover:border-border transition-all"
          >
            Get in touch
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-3xl">
          {[
            { k: "35+", v: "Public Repos" },
            { k: "7+", v: "Languages" },
            { k: "IoT → Web", v: "End-to-end" },
            { k: "2026", v: "Latest Release" },
          ].map((s) => (
            <div key={s.v} className="group">
              <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">
                {s.k}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
      <SectionLabel>01 — About</SectionLabel>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Builder across the whole stack — hardware to interface.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a developer at{" "}
              <span className="text-foreground font-medium">
                Politeknik Negeri Malang
              </span>{" "}
              (TI-3D) who enjoys pulling the whole thread — designing embedded
              firmware, wiring it through message brokers, standing up the API,
              and finishing with a UI that feels calm to use.
            </p>
            <p>
              Recent work spans an IoT platform for fire hydrants, a full-stack
              operations system for community kitchens (Makan Bergizi Gratis), a
              housing management mobile app, and a face age detection experiment.
              I care about clean domain models, sensible defaults, and shipping.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, or diving into the latest
              in edge ML and distributed systems.
            </p>
          </div>
        </div>
        <div className="space-y-5">
          <div className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-6 sm:p-7">
            <div className="text-xs font-mono uppercase tracking-widest text-primary">
              Currently
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <Row label="Focus" value="IoT, Full-stack, Flutter" />
              <Row label="Learning" value="Distributed systems, Edge ML" />
              <Row label="Location" value="Malang, East Java" />
              <Row label="Open to" value="Internships & collaborations" />
            </ul>
          </div>
          <div className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-6">
            <div className="text-xs font-mono uppercase tracking-widest text-primary">
              Highlights
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.label}
                  className="rounded-xl bg-secondary/50 p-3 text-center"
                >
                  <div className="font-display text-lg font-bold text-foreground">
                    {h.label}
                  </div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground leading-tight">
                    {h.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <li className="grid grid-cols-[5rem_minmax(0,1fr)] items-start gap-3">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground">{value}</span>
    </li>
  );
}

function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24"
    >
      <SectionLabel>02 — Education</SectionLabel>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
        Where I&apos;m learning.
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-7 hover:border-primary/30 transition-colors">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold">
                Politeknik Negeri Malang
              </h3>
              <p className="text-sm text-muted-foreground">
                Diploma IV — Teknik Informatika
              </p>
              <p className="mt-1 text-xs text-muted-foreground/60">
                NIM: 2341720197
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Data Structures",
              "Web Programming",
              "Framework Programming",
              "Mobile Programming",
              "Database Systems",
              "OOP",
            ].map((course) => (
              <span
                key={course}
                className="rounded-lg bg-secondary/80 px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-7 hover:border-primary/30 transition-colors">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent">
              <img
                src="/sarastya.png"
                alt="Logo"
                className="h-[35px] w-[35px] object-contain"
              />            
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold">
                Sarastya Agility Innovations
              </h3>
              <p className="text-sm text-muted-foreground">
                Full Stack Developer Intern
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Backend Web Development",
              "Flutter Development",
              "Next.js / React",
              ".NET / C#",
              "CI/CD",
            ].map((topic) => (
              <span
                key={topic}
                className="rounded-lg bg-secondary/80 px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const allTags = Array.from(
    new Set(PROJECTS.flatMap((p) => p.tags))
  ).sort();
  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(filter));

  return (
    <section
      id="work"
      className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <SectionLabel>03 — Selected work</SectionLabel>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Things I&apos;ve built.
          </h2>
        </div>
        <a
          href="https://github.com/rockhubzz?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition"
        >
          All repositories →
        </a>
      </div>

      {/* Filter pills */}
      <div className="mt-8 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
            filter === "all"
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
              : "bg-card border border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
          }`}
        >
          All
        </button>
        {["TypeScript", "Dart", "C#", "C++", "Python", "Java", "PHP"].map(
          (tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                filter === tag
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card border border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {tag}
            </button>
          )
        )}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      className={`card-hover group relative flex flex-col rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 ${
        p.featured ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Screenshot placeholder */}
      {p.screenshot ? (
        <div className="relative h-44 overflow-hidden bg-secondary/50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80 z-10" />
          <img
            src={p.screenshot}
            alt={`${p.name} screenshot`}
            className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            onError={(e) => {
              // Show placeholder on error
              e.currentTarget.style.display = "none";
              if (e.currentTarget.nextElementSibling) {
                (e.currentTarget.nextElementSibling as HTMLElement).style.display =
                  "flex";
              }
            }}
          />
          <div
            className="absolute inset-0 items-center justify-center bg-gradient-to-br from-secondary/80 to-secondary/40 z-0 hidden"
            style={{ display: p.screenshot ? "none" : "flex" }}
          >
            <div className="text-center">
              <svg
                className="mx-auto mb-2 text-muted-foreground/40"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <p className="text-[11px] font-mono text-muted-foreground/50">
                Screenshot placeholder
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-32 bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center">
          <div className="text-center opacity-40">
            <svg
              className="mx-auto mb-1.5"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <p className="text-[10px] font-mono text-muted-foreground/40">
              Add screenshot
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M9 19c-4 1.5-4-2-6-2M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.8 0-1.3-.5-2.6-1.4-3.6.4-1.2.4-2.5-.1-3.7 0 0-1.2-.4-3.8 1.4a13 13 0 0 0-7 0C5.4 1.1 4.2 1.5 4.2 1.5c-.5 1.2-.5 2.5-.1 3.7A5.2 5.2 0 0 0 2.7 8.8c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.5V22"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {p.demo && (
            <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-primary">
              Live
            </span>
          )}
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold">{p.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3 flex-1">
          {p.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-lg bg-secondary/80 px-2 py-1 text-[11px] font-mono text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-border/30 flex items-center gap-4 text-sm">
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition font-medium"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M7 17L17 7M9 7h8v8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Code
          </a>
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  d="M7 17L17 7M9 7h8v8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Stack() {
  const icons: Record<string, React.ReactNode> = {
    code: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    layout: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    server: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <circle cx="6" cy="6" r="1" />
        <circle cx="6" cy="18" r="1" />
      </svg>
    ),
    cpu: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2" />
      </svg>
    ),
  };

  return (
    <section
      id="stack"
      className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24"
    >
      <SectionLabel>04 — Stack</SectionLabel>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
        Tools I use.
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((g) => (
          <div
            key={g.group}
            className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/30 hover:bg-card/80 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary group-hover:from-primary/25 transition-colors">
                {icons[g.icon]}
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-primary">
                {g.group}
              </div>
            </div>
            <ul className="mt-5 space-y-2.5 text-sm">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="flex items-center gap-2.5 text-muted-foreground"
                >
                  <span className="h-1 w-1 rounded-full bg-primary/60" />
                  <span className="text-foreground">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28"
    >
      <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-card/50 backdrop-blur-sm p-8 sm:p-14">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-50%] right-[-20%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[80px]" />
        </div>
        <div className="relative">
          <SectionLabel>05 — Contact</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold tracking-tight max-w-2xl">
            Have a project in mind?{" "}
            <span className="text-gradient">Let&apos;s talk.</span>
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
            Whether it&apos;s an IoT prototype, a full-stack build, or a mobile
            app — I&apos;m happy to chat. Reach me on any of these.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ContactLink
              href="https://www.linkedin.com/in/rocky-alessandro-66972535a/"
              label="LinkedIn"
            />
            <ContactLink
              href="https://github.com/rockhubzz"
              label="GitHub"
            />
            <ContactLink
              href="mailto:rockyalessandro7@gmail.com"
              label="Email"
              muted
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  label,
  muted,
}: {
  href: string;
  label: string;
  muted?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 ${
        muted
          ? "border border-border/60 bg-card/60 text-foreground hover:bg-card hover:border-border"
          : "bg-gradient-to-r from-primary to-amber-500 text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
      }`}
    >
      {label}
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path
          d="M7 17L17 7M9 7h8v8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
      {children}
    </div>
  );
}

function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="border-t border-border/30">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 text-sm text-muted-foreground">
        <span className="truncate">
          © {year ?? ""} Rocky Alessandro Kristanto
        </span>
        <span className="font-mono text-xs opacity-60">
          We walk the talk, not only talk the talk.
        </span>
      </div>
    </footer>
  );
}
