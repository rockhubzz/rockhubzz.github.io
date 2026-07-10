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

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal-section ${className}`}>
      {children}
    </div>
  );
}

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
      <ThemeToggle />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    if (open) {
      setMenuVisible(false);
      setTimeout(() => setOpen(false), 200);
    } else {
      setOpen(true);
      requestAnimationFrame(() => setMenuVisible(true));
    }
  }, [open]);

  const closeMenu = useCallback(() => {
    setMenuVisible(false);
    setTimeout(() => setOpen(false), 200);
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
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-amber-600 shadow-lg shadow-primary/25 group-hover:shadow-primary/40 group-hover:scale-110 transition-all duration-300">
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
              className="nav-underline px-3 py-1.5 rounded-lg hover:text-foreground hover:bg-white/5 transition-all"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/rockhubzz"
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-primary to-amber-500 px-4 py-2 text-sm font-medium text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.97]"
          >
            GitHub
          </a>
        </nav>
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 hover:bg-white/5 transition-all duration-200 hover:scale-110 active:scale-95"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
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
        <div
          className={`md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl transition-all duration-300 ${
            menuVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1 text-sm ${menuVisible ? "mobile-menu-open" : ""}`}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="mobile-menu-item text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg px-3 py-2.5 transition-all"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://github.com/rockhubzz"
              target="_blank"
              rel="noreferrer"
              className="mobile-menu-item mt-2 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-primary to-amber-500 px-4 py-2 font-medium text-primary-foreground"
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
    <section id="top" className="relative overflow-hidden min-h-[70vh] flex items-center">
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

      {/* Floating dev tool icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* VS Code */}
        <svg className="floating-icon text-primary/15" style={{ top: "12%", left: "8%", width: 40, height: 40, "--float-anim": "float-icon-1", "--float-dur": "14s", "--float-delay": "0.2s" } as React.CSSProperties} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.583 2.427L9.292 10.72l-3.542-2.79L4.167 7.6l-1.75.583L6.5 12l-4.083 3.817 1.75.583 1.583-3.33 3.542 2.791 8.292-8.292L15.25 2.427zM9.292 13.28l8.292 8.292V19.5l-8.292-6.22z"/>
        </svg>
        {/* Terminal */}
        <svg className="floating-icon text-accent/15" style={{ top: "20%", right: "12%", width: 36, height: 36, "--float-anim": "float-icon-2", "--float-dur": "12s", "--float-delay": "0.5s" } as React.CSSProperties} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="18" rx="2"/>
          <polyline points="7 8 10 11 7 14"/>
          <line x1="12" y1="14" x2="17" y2="14"/>
        </svg>
        {/* Git branch */}
        <svg className="floating-icon text-primary/12" style={{ top: "55%", left: "5%", width: 32, height: 32, "--float-anim": "float-icon-3", "--float-dur": "16s", "--float-delay": "0.8s" } as React.CSSProperties} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="6" r="2"/>
          <circle cx="6" cy="18" r="2"/>
          <circle cx="18" cy="18" r="2"/>
          <path d="M12 8v4c0 2-2 4-4 4"/>
          <path d="M12 12c2 0 4 2 4 4"/>
        </svg>
        {/* React */}
        <svg className="floating-icon text-accent/12" style={{ top: "65%", right: "8%", width: 38, height: 38, "--float-anim": "float-icon-4", "--float-dur": "18s", "--float-delay": "1s" } as React.CSSProperties} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="12" cy="12" r="2.5"/>
          <ellipse cx="12" cy="12" rx="10" ry="4"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
        </svg>
        {/* Node.js */}
        <svg className="floating-icon text-primary/10" style={{ top: "38%", right: "4%", width: 34, height: 34, "--float-anim": "float-icon-5", "--float-dur": "15s", "--float-delay": "0.3s" } as React.CSSProperties} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.5 3.61L12 11.4 5.5 7.8 12 4.18zM5 8.82l6 3.33v6.7l-6-3.33V8.82zm8 10.03v-6.7l6-3.33v6.7l-6 3.33z"/>
        </svg>
        {/* Docker */}
        <svg className="floating-icon text-primary/10" style={{ top: "80%", left: "15%", width: 30, height: 30, "--float-anim": "float-icon-2", "--float-dur": "13s", "--float-delay": "1.2s" } as React.CSSProperties} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.186.186 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.186v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.186.186 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.186v1.887c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.687 11.687 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288"/>
        </svg>
        {/* Python */}
        <svg className="floating-icon text-accent/10" style={{ top: "45%", left: "18%", width: 32, height: 32, "--float-anim": "float-icon-1", "--float-dur": "17s", "--float-delay": "0.6s" } as React.CSSProperties} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.996 0C5.372 0 5.76 2.962 5.76 2.962l.003 3.08h6.344v.927H3.6S0 5.689 0 12.018c0 6.328 3.149 6.107 3.149 6.107h1.88v-2.93s-.102-3.149 3.093-3.149h5.335s2.99.049 2.99-2.888V3.189S16.662 0 11.996 0zM8.718 1.842a1.053 1.053 0 011.053 1.053 1.053 1.053 0 01-1.053 1.053A1.053 1.053 0 017.665 2.895a1.053 1.053 0 011.053-1.053z"/>
          <path d="M12.004 24c6.624 0 6.236-2.962 6.236-2.962l-.003-3.08h-6.344v-.927H20.4S24 18.311 24 11.982c0-6.328-3.149-6.107-3.149-6.107h-1.88v2.93s.102 3.149-3.093 3.149H10.543s-2.99-.049-2.99 2.888v5.047S7.338 24 12.004 24zm3.278-1.842a1.053 1.053 0 01-1.053-1.053 1.053 1.053 0 011.053-1.053 1.053 1.053 0 011.053 1.053 1.053 1.053 0 01-1.053 1.053z"/>
        </svg>
        {/* Brackets / code */}
        <svg className="floating-icon text-primary/10" style={{ top: "30%", left: "35%", width: 28, height: 28, "--float-anim": "float-icon-3", "--float-dur": "14s", "--float-delay": "1.5s" } as React.CSSProperties} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
        {/* Database */}
        <svg className="floating-icon text-accent/10" style={{ top: "75%", right: "20%", width: 28, height: 28, "--float-anim": "float-icon-5", "--float-dur": "16s", "--float-delay": "0.9s" } as React.CSSProperties} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="5" rx="8" ry="3"/>
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/>
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>
        </svg>
        {/* Cog / settings */}
        <svg className="floating-icon text-primary/8" style={{ top: "15%", left: "50%", width: 26, height: 26, "--float-anim": "float-icon-4", "--float-dur": "19s", "--float-delay": "2s" } as React.CSSProperties} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
        <div className="hero-stagger flex flex-col items-start">
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
              className="ripple-btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-amber-500 px-6 py-3 text-sm font-medium text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 hover:scale-[1.03] transition-all duration-300 active:scale-[0.97]"
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
              className="inline-flex items-center rounded-full border border-border/60 bg-card/60 backdrop-blur-sm px-6 py-3 text-sm font-medium hover:bg-card hover:border-border hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.97]"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-3xl">
          {[
            { k: "35+", v: "Public Repos" },
            { k: "7+", v: "Languages" },
            { k: "IoT → Web", v: "End-to-end" },
            { k: "2026", v: "Latest Release" },
          ].map((s) => (
            <div key={s.v} className="stat-card group cursor-default">
              <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">
                {s.k}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
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
    <section id="about" className="relative mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16">
      <div className="section-bg">
        <div className="blob about-blob-1" />
        <div className="blob about-blob-2" />
        <div className="section-grid-pattern" style={{ "--gx": "70%", "--gy": "30%" } as React.CSSProperties} />
      </div>
      <RevealSection>
        <SectionLabel>01 — About</SectionLabel>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
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
                who enjoys pulling the whole thread — designing embedded
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
            <div className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-6 sm:p-7 hover:border-primary/20 transition-colors duration-300">
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
            <div className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/20 transition-colors duration-300">
              <div className="text-xs font-mono uppercase tracking-widest text-primary">
                Highlights
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {HIGHLIGHTS.map((h) => (
                  <div
                    key={h.label}
                    className="highlight-badge rounded-xl bg-secondary/50 p-3 text-center cursor-default"
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
      </RevealSection>
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
      className="relative mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16"
    >
      <div className="section-bg">
        <div className="blob edu-blob-1" />
        <div className="blob edu-blob-2" />
        <div className="section-grid-pattern" style={{ "--gx": "30%", "--gy": "60%" } as React.CSSProperties} />
      </div>
      <RevealSection>
        <SectionLabel>02 — Education</SectionLabel>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Where I&apos;m learning.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="edu-card rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-7 hover:border-primary/30">
            <div className="flex items-start gap-4">
              <div className="edu-icon grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary">
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
                  className="rounded-lg bg-secondary/80 px-2.5 py-1 text-[11px] font-mono text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors duration-200 cursor-default"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
          <div className="edu-card rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-7 hover:border-primary/30">
            <div className="flex items-start gap-4">
              <div className="edu-icon grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent">
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
                  className="rounded-lg bg-secondary/80 px-2.5 py-1 text-[11px] font-mono text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors duration-200 cursor-default"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>
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
      className="relative mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16"
    >
      <div className="section-bg">
        <div className="blob projects-blob-1" />
        <div className="blob projects-blob-2" />
        <div className="section-grid-pattern" style={{ "--gx": "60%", "--gy": "40%" } as React.CSSProperties} />
      </div>
      <RevealSection>
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
            className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all duration-200"
          >
            All repositories →
          </a>
        </div>

        {/* Filter pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`filter-pill rounded-full px-3.5 py-1.5 text-xs font-medium cursor-pointer ${
              filter === "all"
                ? "filter-pill-active bg-primary text-primary-foreground shadow-lg shadow-primary/20"
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
                className={`filter-pill rounded-full px-3.5 py-1.5 text-xs font-medium cursor-pointer ${
                  filter === tag
                    ? "filter-pill-active bg-primary text-primary-foreground shadow-lg shadow-primary/20"
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
      </RevealSection>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      className={`project-card group relative flex flex-col rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/40 ${
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
            Repository
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
      className="relative mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16"
    >
      <div className="section-bg">
        <div className="blob stack-blob-1" />
        <div className="blob stack-blob-2" />
        <div className="section-grid-pattern" style={{ "--gx": "40%", "--gy": "50%" } as React.CSSProperties} />
      </div>
      <RevealSection>
        <SectionLabel>04 — Stack</SectionLabel>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Tools I use.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STACK.map((g) => (
            <div
              key={g.group}
              className="stack-card rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/30 hover:bg-card/80 group cursor-default"
            >
              <div className="flex items-center gap-3">
                <div className="stack-icon grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary group-hover:from-primary/25 transition-colors">
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
                    className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-default"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                    <span className="text-foreground">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16"
    >
      <div className="section-bg">
        <div className="blob contact-blob-1" />
        <div className="blob contact-blob-2" />
        <div className="section-grid-pattern" style={{ "--gx": "50%", "--gy": "40%" } as React.CSSProperties} />
      </div>
      <RevealSection>
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
      </RevealSection>
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
      className={`contact-link inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium ${
        muted
          ? "border border-border/60 bg-card/60 text-foreground hover:bg-card hover:border-border hover:shadow-md"
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
        className="transition-transform duration-200 group-hover:translate-x-0.5"
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
    <footer className="relative border-t border-border/30 overflow-hidden">
      <div className="section-bg">
        <div className="blob footer-blob" />
      </div>
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col sm:grid sm:grid-cols-[minmax(0,1fr)_auto] items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
        <span className="truncate">
          © {year ?? ""} Rocky Alessandro Kristanto
        </span>
        <span className="footer-link font-mono text-xs opacity-60 cursor-default">
          We walk the talk, not only talk the talk.
        </span>
      </div>
    </footer>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(true);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("light", !isDark);
  }, []);

  const toggle = () => {
    setAnimating(true);
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("light", !next);
    setTimeout(() => setAnimating(false), 400);
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* pulse ring */}
      <span className="absolute inset-0 rounded-full bg-primary/20 animate-[theme-pulse-ring_2s_ease-out_infinite] group-hover:animate-none" />
      {/* button */}
      <span
        className={`relative flex h-12 w-12 items-center justify-center rounded-full border border-border/40 bg-card/80 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:scale-110 active:scale-95 transition-all duration-300 ${
          animating ? "scale-90" : ""
        }`}
      >
        {/* sun icon */}
        <svg
          className={`absolute h-5 w-5 text-amber-500 transition-all duration-300 ${
            dark
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
        {/* moon icon */}
        <svg
          className={`absolute h-5 w-5 text-primary transition-all duration-300 ${
            dark
              ? "-rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </button>
  );
}
