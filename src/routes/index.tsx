
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Trophy,
  Award,
  Medal,
  ArrowUpRight,
  Code2,
  FlaskConical,
  User,
  ArrowUp,
  Phone,
} from "lucide-react";

const EMAIL = "praneethadonepudi@gmail.com";
const EMAIL_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=praneethadonepudi@gmail.com";
const LINKEDIN =
  "https://www.linkedin.com/in/lakshmi-praneetha-donepudi-809132325/";
const GITHUB = "https://github.com/praneetha1910";
const RESUME_URL = "/Praneetha_Resume.pdf";
const PHOTO_URL =
  "https://github.com/praneetha1910/my_portfolio/blob/main/profile.jpeg?raw=true";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lakshmi Praneetha Donepudi — AI/ML & Data Engineering Portfolio" },
      {
        name: "description",
        content:
          "CSE student exploring AI, machine learning, data engineering and research. Projects, skills, certifications and contact.",
      },
      {
        property: "og:title",
        content: "Lakshmi Praneetha Donepudi — Portfolio",
      },
      {
        property: "og:description",
        content:
          "Aspiring AI/ML Engineer, Data Engineer and research enthusiast.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: PHOTO_URL },
      { name: "twitter:image", content: PHOTO_URL },
    ],
  }),
  component: Index,
});

const nav = [
  "Home",
  "About",
  "Education",
  "Skills",
  "Projects",
  "Research",
  "Certifications",
  "Achievements",
  "Profiles",
  "Contact",
];

const skills: [string, string[]][] = [
  ["Programming", ["Python", "C", "C++", "Java (Basic)"]],
  ["Databases", ["SQL", "MySQL", "SQLite3"]],
  ["CS Fundamentals", ["Data Structures", "DBMS", "Operating Systems"]],
  ["Web", ["HTML", "CSS", "JavaScript"]],
  ["Frameworks & Backend", ["React", "FastAPI", "REST APIs"]],
  ["Data & ML", ["Pandas", "NumPy", "Isolation Forest"]],
  ["Tools", ["Git", "GitHub", "MS Excel", "Power BI"]],
];

const projects = [
  {
    tag: "SIH 2026 · Team SATLYTICS",
    title: "Satellite Telemetry Anomaly Detection",
    desc: "Anomaly detection for satellite telemetry using Isolation Forest and Autoencoders, with a FastAPI backend and a dashboard to visualize results.",
    tech: [
      "Python",
      "Machine Learning",
      "FastAPI",
      "Isolation Forest",
      "Autoencoders",
    ],
    url: "https://github.com/praneetha1910/SIH_PROTOTYPE--SATLYTICS-",
  },
  {
    tag: "Civic Tech",
    title: "Smart Utility Intelligence Platform",
    desc: "A platform concept for managing community complaints and utility issues — React interfaces, complaint workflows, FastAPI and SQLite services.",
    tech: ["Python", "React", "JavaScript", "FastAPI", "SQLite", "REST APIs"],
    url: "https://github.com/praneetha1910/smart-utility-intelligence",
  },
];

const certs = [
  {
    name: "The Joy of Computing using Python",
    org: "NPTEL",
    badge: "Elite + Gold · 92%",
    url: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs103/Course/NPTEL25CS103S105930061610295994.pdf",
  },
  {
    name: "Introduction to Industry 4.0 and Industrial IoT",
    org: "NPTEL",
    badge: "Elite + Silver · 76%",
  },
  {
    name: "C Essentials 1",
    org: "Cisco",
    badge: "Verified Certificate",
  },
  {
    name: "Relational Model (SQL) to MongoDB's Document Model",
    org: "MongoDB",
    badge: "Verified Certificate",
  },
  {
    name: "Getting Started with Artificial Intelligence",
    org: "Cisco",
    badge: "Verified Certificate",
  },
  {
    name: "IT Specialist – HTML and CSS",
    org: "Certiport",
    badge: "Verified Certificate",
  },
];

const profiles = [
  {
    name: "LeetCode",
    desc: "Solving Data Structures and Algorithms problems.",
    url: "https://leetcode.com/u/praneetha_donepudi_19/",
    icon: Code2,
  },
  {
    name: "HackerRank",
    desc: "Python, C programming and SQL.",
    url: "https://www.hackerrank.com/profile/24p31a0522",
    icon: Code2,
  },
  {
    name: "CodeChef",
    desc: "Username: band_river_37",
    url: "https://www.codechef.com/users/band_river_37",
    icon: Code2,
  },
];

function SectionTitle({
  children,
  kicker,
}: {
  children: string;
  kicker?: string;
}) {
  return (
    <div className="mb-12 text-center">
      {kicker && (
        <p className="font-serif text-2xl italic text-muted-foreground">
          {kicker}
        </p>
      )}
      <h2 className="heading-xl text-5xl md:text-7xl">{children}</h2>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-serif text-3xl italic">
            Praneetha.
          </a>

          <nav className="hidden gap-6 text-sm font-medium xl:flex">
            {nav.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className="transition-colors hover:text-accent"
              >
                {n}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={RESUME_URL}
              download="Lakshmi_Praneetha_Donepudi_Resume.pdf"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              Resume
            </a>

            <button
              className="xl:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col gap-3 border-t px-6 py-4 xl:hidden">
            {nav.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                {n}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-12 lg:grid-cols-12 lg:pt-16">
          <h1 className="fade-up text-center font-serif text-7xl italic md:text-9xl lg:col-span-12">
            Hey, there
          </h1>

          <div className="flex flex-col justify-end gap-8 lg:col-span-4">
            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-card px-4 py-2 text-sm shadow-soft transition-transform hover:scale-105"
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent" />
              Open to internships & research
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <p className="heading-xl text-6xl md:text-7xl">
              I am
              <br />
              Praneetha
            </p>

            <p className="text-sm text-muted-foreground">
              Lakshmi Praneetha Donepudi
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="mx-auto flex aspect-[3/4] max-w-sm items-center justify-center overflow-hidden rounded-[2rem] bg-secondary shadow-soft">
              {PHOTO_URL ? (
                <img
                  src={PHOTO_URL}
                  alt="Lakshmi Praneetha Donepudi"
                  className="h-full w-full object-cover"
                />
              ) : (
                <User
                  className="h-24 w-24 text-muted-foreground"
                  strokeWidth={1}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col justify-end gap-6 lg:col-span-4">
            <p className="text-sm leading-relaxed">
              Passionate about building intelligent solutions, exploring
              data-driven technologies, and turning ideas into meaningful
              technical applications.
            </p>

            <p className="heading-xl text-4xl md:text-5xl">
              AI / ML &amp; Data
              <br />
              Engineer
              <br />
              in the making
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground"
              >
                Explore my work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-foreground px-5 py-2.5 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Let's Connect
              </a>

              <a
                href={RESUME_URL}
                download="Lakshmi_Praneetha_Donepudi_Resume.pdf"
                className="rounded-full border border-foreground px-5 py-2.5 text-sm"
              >
                Download resume
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href={EMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle kicker="a little">About me</SectionTitle>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              I am a third-year Computer Science Engineering student with a
              growing expertise in programming, data structures, and software
              development. My interests include data-driven technologies,
              artificial intelligence, and research-oriented problem solving.
            </p>
            <p>
              I enjoy exploring new concepts, developing practical
              applications, and turning ideas into meaningful technical
              solutions — committed to continuous learning and real-world
              experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border">
            {[
              "AI & Machine Learning",
              "Data Engineering",
              "Software Development",
              "Research & Innovation",
              "Problem Solving",
            ].map((t, i) => (
              <div key={t} className="bg-card p-6">
                <p className="font-serif text-3xl italic text-muted-foreground">
                  0{i + 1}
                </p>
                <p className="mt-4 font-semibold">{t}</p>
              </div>
            ))}

            <div className="flex items-center justify-center bg-secondary p-6">
              <span className="heading-xl text-5xl">9.05</span>
              <span className="ml-2 text-xs text-muted-foreground">CGPA</span>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="bg-secondary py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle>Education</SectionTitle>

          {[
            [
              "Aug 2024 – May 2028",
              "B.Tech – Computer Science & Engineering",
              "Aditya College of Engineering and Technology",
              "CGPA 9.05/10",
            ],
            [
              "2022 – 2024",
              "Intermediate – MPC",
              "Sri Sai Aditya Junior College",
              "95.20%",
            ],
            ["2021 – 2022", "SSC", "Aditya School", "95.50%"],
          ].map(([d, t, s, g], i) => (
            <div
              key={t}
              className="grid items-center gap-2 border-b py-8 md:grid-cols-[160px_1fr_auto]"
            >
              <p className="text-sm text-muted-foreground">{d}</p>
              <div>
                <p className="text-xl font-semibold">{t}</p>
                <p className="text-muted-foreground">{s}</p>
              </div>
              <p
                className={
                  i === 0
                    ? "heading-xl text-3xl text-accent"
                    : "font-semibold"
                }
              >
                {g}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle>Experience &amp; Skills</SectionTitle>

        {skills.map(([cat, items]) => (
          <div
            key={cat}
            className="grid gap-4 border-b py-6 md:grid-cols-[260px_1fr]"
          >
            <p className="text-lg font-semibold">{cat}</p>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border bg-card px-3 py-1 text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle>Recent Projects</SectionTitle>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-[2rem] border bg-card shadow-soft"
            >
              <div className="relative flex aspect-[16/9] items-end overflow-hidden bg-hero bg-secondary p-8">
                <span className="heading-xl absolute right-6 top-4 text-8xl text-foreground/10">
                  0{i + 1}
                </span>
                <h3 className="heading-xl text-4xl">{p.title}</h3>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {p.tag}
                </p>
                <p className="text-muted-foreground">{p.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-3 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground"
                >
                  <Github className="h-4 w-4" />
                  View repository
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="bg-secondary py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionTitle kicker="beyond code">Research</SectionTitle>

          <div className="rounded-[2rem] border bg-card p-10 shadow-soft">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FlaskConical className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-semibold">
                  Upcoming Chemistry Research Project
                </h3>
              </div>
              <span className="rounded-full border border-accent px-3 py-1 text-xs font-semibold text-accent">
                Upcoming / In Progress
              </span>
            </div>

            <p className="mt-4 text-sm">
              <span className="font-semibold">Focus:</span> Improving yield and
              environmental aspects.
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Exploring an interdisciplinary research direction involving
              chemistry, yield improvement, and environmental considerations,
              with an interest in understanding how scientific research and
              technology can contribute to practical and sustainable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle>Certifications</SectionTitle>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => {
            const content = (
              <>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {c.org}
                </p>
                <p className="mt-3 text-lg font-semibold leading-snug">
                  {c.name}
                </p>
                {c.badge && (
                  <span className="mt-4 inline-block rounded-full bg-peach px-3 py-1 text-xs font-semibold">
                    {c.badge}
                  </span>
                )}
                {c.url && (
                  <span className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent">
                    View Certificate
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                )}
              </>
            );

            return c.url ? (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                {content}
              </a>
            ) : (
              <div
                key={c.name}
                className="rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                {content}
              </div>
            );
          })}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle>Achievements</SectionTitle>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-[2rem] bg-primary p-10 text-primary-foreground lg:row-span-2">
              <Trophy className="h-10 w-10 text-peach" />
              <p className="heading-xl mt-8 text-5xl">
                EAMCET
                <br />
                College Top Rank
              </p>
              <p className="mt-6 opacity-80">
                Secured a top rank in Andhra Pradesh EAMCET and achieved a top
                position among students in my college.
              </p>
            </div>

            {[
              [
                Award,
                "First Prize",
                "Visual Representation Competition — Futuristic Library Design.",
              ],
              [
                Medal,
                "Second Prize",
                "Poster Presentation on Blockchain Technology.",
              ],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Award;
              return (
                <div
                  key={t as string}
                  className="rounded-[2rem] border bg-card p-8 lg:col-span-2"
                >
                  <I className="h-7 w-7 text-accent" />
                  <p className="heading-xl mt-4 text-3xl">{t as string}</p>
                  <p className="mt-2 text-muted-foreground">{d as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROFILES */}
      <section id="profiles" className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle>Coding Profiles</SectionTitle>

        <div className="grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
          {profiles.map((p) => (
            <div key={p.name} className="flex flex-col gap-3 bg-card p-8">
              <p.icon className="h-6 w-6 text-accent" />
              <p className="text-xl font-semibold">{p.name}</p>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 text-sm font-semibold"
              >
                View profile
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden py-28"
      >
        <div className="absolute inset-0 bg-hero" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="font-serif text-4xl italic">Let's</p>
          <h2 className="heading-xl text-7xl md:text-9xl">Connect</h2>

          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Have an opportunity, project idea, or research collaboration in
            mind? I'd love to connect and explore possibilities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+918501942006"
              aria-label="Call +91 85019 42006"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card/60 px-4 py-2 text-sm transition-colors hover:border-foreground"
            >
              <Phone className="h-4 w-4" />
              +91 85019 42006
            </a>

            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card/60 px-4 py-2 text-sm transition-colors hover:border-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card/60 px-4 py-2 text-sm transition-colors hover:border-foreground"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href={EMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              Send me an Email
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <p>
            Designed and built with curiosity by Lakshmi Praneetha Donepudi.
            © {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-4">
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={EMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a href="#home" className="inline-flex items-center gap-1">
              Top
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
