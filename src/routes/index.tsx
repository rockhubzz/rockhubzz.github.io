import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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
};

const PROJECTS: Project[] = [
  {
    name: "Fire Hydrant",
    description:
      "IoT fire-hydrant monitoring platform with a live web dashboard for pressure, flow, and status telemetry.",
    tags: ["TypeScript", "IoT", "React", "Next.js", "Tailwind CSS"],
    href: "https://github.com/rockhubzz/fire-hydrant",
    demo: "https://fire-hydrant-fawn.vercel.app",
    featured: true,
  },
  {
    name: "MyMBG — Web",
    description:
      "Full-stack kitchen operations system for the Makan Bergizi Gratis program: ingredients, recipes, production, and distribution.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Postgres"],
    href: "https://github.com/rockhubzz/MyMBG-web",
    demo: "https://my-mbg.vercel.app",
    featured: true,
  },
  {
    name: "MyMBG — Mobile",
    description:
      "Flutter companion app for MBG kitchen staff — record production runs and manage distribution from the field.",
    tags: ["Dart", "Flutter", "Mobile"],
    href: "https://github.com/rockhubzz/MyMBG-mobile",
  },
  {
    name: "MyMBG — Backend",
    description: "C# / .NET API powering the MyMBG web and mobile clients with domain models for the full kitchen workflow.",
    tags: ["C#", ".NET", "API"],
    href: "https://github.com/rockhubzz/MyMBG-backend",
  },
  {
    name: "IoT Fire Hydrant",
    description: "Embedded firmware in C++ for the fire-hydrant device — sensors, connectivity, and MQTT publishing.",
    tags: ["C++", "Embedded", "MQTT"],
    href: "https://github.com/rockhubzz/iot-fire-hydrant",
  },
  {
    name: "MQTT Bridge",
    description: "Python bridge that pipes sensor telemetry from the hydrant devices into the platform backend.",
    tags: ["Python", "MQTT"],
    href: "https://github.com/rockhubzz/mqtt_bridge-fire_hydrant",
  },
  {
    name: "Jawara",
    description: "Cross-platform mobile app to manage housing estate residents records built with Flutter, backed by a PHP service layer.",
    tags: ["Dart", "Flutter"],
    href: "https://github.com/rockhubzz/Jawara",
  },
  {
    name: "Face Age Detection",
    description: "On-device face age detection experiment for mobile — computer vision with a lightweight pipeline.",
    tags: ["C++", "ML", "Flutter", "Dart"],
    href: "https://github.com/rockhubzz/mobile_faceage_detection",
  },
  {
    name: "Sistem Kompen Mahasiswa",
    description: "Java desktop system for tracking student compensation tasks and approvals.",
    tags: ["Java", "Desktop"],
    href: "https://github.com/rockhubzz/SistemKompenMahasiswa",
  },
];

const STACK = [
  { group: "Languages", items: ["TypeScript", "Dart", "C#", "C++", "Python", "PHP", "Java"] },
  { group: "Frontend", items: ["React", "Next.js", "Flutter", "Tailwind CSS"] },
  { group: "Backend", items: [".NET", "Laravel", "Node.js", "REST APIs"] },
  { group: "Systems", items: ["IoT", "MQTT", "Embedded C++", "Postgres / MySQL"] },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#stack", label: "Stack" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 grid grid-cols-[minmax(0,1fr)_auto] items-center">
        <a href="#top" className="flex min-w-0 items-center gap-2 font-display font-semibold">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary">
            <img
              src="/R-white.ico"
              alt="Rocky Alessandro Kristanto"
              className="h-5 w-5"
            />
          </span>          
          <span className="truncate">Rocky Alessandro</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/rockhubzz"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            GitHub
          </a>
        </nav>
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="i-menu block">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95">
          <div className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://github.com/rockhubzz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground"
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
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 hero-bg pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
        {/* <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-mono text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Available for opportunities
        </div> */}
        <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl">
          Rocky Alessandro <br className="hidden sm:block" />
          <span className="text-gradient">Kristanto</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
          Full-stack, mobile, and IoT developer. I build systems end-to-end — from firmware and
          sensors, through APIs and databases, to the interfaces people actually use.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition"
          >
            View work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium hover:bg-card transition"
          >
            Get in touch
          </a>
        </div>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-2xl">
          {[
            { k: "20+", v: "Projects shipped" },
            { k: "7", v: "Languages" },
            { k: "IoT → Web", v: "End-to-end" },
            { k: "2025", v: "Latest release" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-2xl sm:text-3xl font-bold">{s.k}</div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.v}</div>
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
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Builder across the whole stack — hardware to interface.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a developer who enjoys pulling the whole thread — designing embedded firmware,
              wiring it through message brokers, standing up the API, and finishing with a UI that
              feels calm to use.
            </p>
            <p>
              Recent work spans an IoT platform for fire hydrants, a full-stack operations system
              for community kitchens, and a handful of mobile apps in Flutter. I care about clean
              domain models, sensible defaults, and shipping.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Currently
          </div>
          <ul className="mt-4 space-y-4 text-sm">
            <Row label="Focus" value="IoT platforms, full-stack web, Flutter" />
            <Row label="Learning" value="Distributed systems, edge ML" />
            <Row label="Location" value="Indonesia" />
            <Row label="Open to" value="Internships & collaborations" />
          </ul>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <li className="grid grid-cols-[6rem_minmax(0,1fr)] items-start gap-3">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground">{value}</span>
    </li>
  );
}

function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <SectionLabel>02 — Selected work</SectionLabel>
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
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      className={`card-hover group relative flex flex-col rounded-2xl border border-border bg-card p-6 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] ${
        p.featured ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 19c-4 1.5-4-2-6-2M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.8 0-1.3-.5-2.6-1.4-3.6.4-1.2.4-2.5-.1-3.7 0 0-1.2-.4-3.8 1.4a13 13 0 0 0-7 0C5.4 1.1 4.2 1.5 4.2 1.5c-.5 1.2-.5 2.5-.1 3.7A5.2 5.2 0 0 0 2.7 8.8c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.5V22" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {p.demo && (
          <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-primary">
            Live
          </span>
        )}
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold">{p.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-4">
        {p.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-md bg-secondary px-2 py-1 text-[11px] font-mono text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-4 text-sm">
        <a
          href={p.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-foreground hover:text-primary transition"
        >
          Code
          <ArrowUp />
        </a>
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition"
          >
            Demo
            <ArrowUp />
          </a>
        )}
      </div>
    </article>
  );
}

function ArrowUp() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
      <SectionLabel>03 — Stack</SectionLabel>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
        Tools I use.
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((g) => (
          <div key={g.group} className="rounded-2xl border border-border bg-card p-6">
            <div className="text-xs font-mono uppercase tracking-widest text-primary">
              {g.group}
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {g.items.map((i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-primary" />
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
    <section id="contact" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-14">
        <div className="absolute inset-0 hero-bg opacity-70 pointer-events-none" />
        <div className="relative">
          <SectionLabel>04 — Contact</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold tracking-tight max-w-2xl">
            Have a project in mind? <span className="text-gradient">Let&apos;s talk.</span>
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
            Whether it&apos;s an IoT prototype, a full-stack build, or a mobile app — I&apos;m happy
            to chat. Reach me on any of these.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ContactLink
              href="https://www.linkedin.com/in/rocky-alessandro-66972535a/"
              label="LinkedIn"
            />
            <ContactLink href="https://github.com/rockhubzz" label="GitHub" />
            <ContactLink href="mailto:rockyalessandro7@gmail.com" label="Email" muted />
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
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${
        muted
          ? "border border-border bg-card/60 text-foreground hover:bg-card"
          : "bg-primary text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]"
      }`}
    >
      {label}
      <ArrowUp />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-8 bg-primary" />
      {children}
    </div>
  );
}

function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 text-sm text-muted-foreground">
        <span className="truncate">© {year ?? ""} Rocky Alessandro Kristanto</span>
        <span className="font-mono text-xs">We walk the talk, not only talk the talk.</span>
      </div>
    </footer>
  );
}
