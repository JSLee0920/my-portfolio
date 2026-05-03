import type { NextPage } from "next";
import Head from "next/head";
import {
  FiBriefcase,
  FiCode,
  FiCpu,
  FiFolder,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
  FiUser,
} from "react-icons/fi";
import { PortfolioCard } from "./components/PortfolioCard";
import type {
  BackgroundItem,
  Project,
  SectionLabelProps,
  SkillGroup,
  SocialLink,
  TechListProps,
} from "./types";

const socialLinks: SocialLink[] = [
  { href: "https://github.com/JSLee0920", label: "GitHub", Icon: FiGithub },
  {
    href: "https://linkedin.com/in/jslee8260",
    label: "LinkedIn",
    Icon: FiLinkedin,
  },
  { href: "mailto:leejiasheng0826@gmail.com", label: "Email", Icon: FiMail },
];

const projects: Project[] = [
  {
    title: "AI Chatbot",
    description:
      "Conversational AI assistant built with transformer models, retrieval workflows, and API-ready deployment.",
    stack: ["Python", "PyTorch", "Transformers", "FastAPI"],
    actions: [
      { label: "Visit Site", href: "/", variant: "primary" },
      {
        label: "GitHub",
        href: "https://github.com/JSLee0920",
        variant: "secondary",
      },
    ],
  },
  {
    title: "Computer Vision App",
    description:
      "Real-time object detection and image classification system with CNN models and a responsive web UI.",
    stack: ["TensorFlow", "OpenCV", "React", "Flask"],
    actions: [
      { label: "Visit Site", href: "/", variant: "primary" },
      {
        label: "GitHub",
        href: "https://github.com/JSLee0920",
        variant: "secondary",
      },
    ],
  },
  {
    title: "ML Pipeline",
    description:
      "End-to-end machine learning pipeline for preprocessing, training, evaluation, and deployment.",
    stack: ["scikit-learn", "Docker", "MLflow", "AWS"],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/JSLee0920",
        variant: "primary",
      },
    ],
  },
];

const backgroundItems: BackgroundItem[] = [
  {
    type: "Education",
    title: "Bachelor of Computer Science",
    org: "Multimedia University (MMU)",
    period: "2023 - Present",
    points: [
      "Majoring in Artificial Intelligence.",
      "Focused on algorithms, neural networks, data structures, and software design.",
    ],
  },
  {
    type: "Experience",
    title: "Full-Stack Developer",
    org: "Project Work",
    period: "2024 - Present",
    points: [
      "Built web apps with clean backend APIs and focused frontend flows.",
      "Integrated AI features into practical user-facing tools.",
    ],
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "FastAPI", "REST APIs", "PostgreSQL"],
  },
  {
    title: "AI / ML",
    skills: ["Python", "PyTorch", "TensorFlow", "OpenCV"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Linux", "Vercel"],
  },
];

const SectionLabel = ({ icon: Icon, children }: SectionLabelProps) => (
  <div className="mb-6 flex items-center gap-3 text-muted-text">
    <Icon className="text-lg" />
    <span>{children}/</span>
  </div>
);

const TechList = ({ items }: TechListProps) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span
        key={item}
        className="border border-zinc-700 bg-[#202020] px-3 py-1 text-sm text-zinc-300"
      >
        {item}
      </span>
    ))}
  </div>
);

const projectButtonClasses = {
  primary:
    "border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black-bg",
  secondary:
    "border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100",
};

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>JSLee :: Portfolio</title>
      </Head>

      <main className="relative flex min-h-screen w-full flex-col bg-grid-dots">
        <header className="fixed left-0 top-0 z-50 w-full border-b border-terminal-yellow/50 bg-black-bg/90 px-6 py-4 backdrop-blur-sm sm:px-12">
          <nav className="flex items-center justify-between">
            <a
              href="/"
              className="text-xl font-bold text-terminal-yellow transition-opacity hover:opacity-80"
            >
              JSLee0920.portfolio
            </a>
            <div className="flex items-center gap-6 text-sm text-muted-text">
              {["About", "Education", "Experience", "Projects", "Skills"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="transition-colors hover:text-terminal-yellow"
                  >
                    {item}
                  </a>
                ),
              )}
              <a
                href="#contact"
                className="border border-terminal-yellow bg-terminal-yellow px-5 py-2.5 font-bold text-black-bg transition-colors hover:bg-black-bg hover:text-terminal-yellow"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        <section className="flex min-h-screen px-6 pt-12 sm:px-12 md:px-24">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-center">
            <div className="mb-10 inline-flex items-center gap-3 border border-terminal-green/30 bg-badge-green px-4 py-2 text-sm text-terminal-green selection:bg-terminal-green selection:text-black-bg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping bg-terminal-green opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 bg-terminal-green" />
              </span>
              Available for opportunities
            </div>

            <p className="mb-4 text-sm text-muted-text">
              &gt;_ ~/portfolio{" "}
              <span className="text-terminal-yellow">main</span>
            </p>

            <h1 className="mb-6 text-6xl font-extrabold tracking-tight text-terminal-yellow sm:text-8xl md:text-6xl">
              Lee Jia Sheng
            </h1>

            <p className="mb-8 text-md text-terminal-yellow sm:text-lg">
              &gt; CS Student | AI Enthusiast | Software Developer
            </p>

            <p className="mb-12 max-w-2xl leading-relaxed text-muted-text">
              CS Undergraduate @ Multimedia University (MMU), majoring in
              Artificial Intelligence. Full-stack engineer and AI specialist
              focused on building scalable systems, agentic workflows, and
              high-performance applications from backend to UI.
            </p>

            <div className="mb-2 flex gap-4">
              <a
                href="#contact"
                className="border-2 border-terminal-yellow bg-terminal-yellow px-8 py-3.5 font-extrabold text-black-bg transition-colors hover:bg-black-bg hover:text-terminal-yellow"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="border-2 border-terminal-yellow px-8 py-3.5 font-bold text-terminal-yellow transition-colors hover:bg-terminal-yellow hover:text-black-bg"
              >
                View work
              </a>
            </div>

            <div className="mt-8 flex gap-6 text-xl text-muted-text selection:text-terminal-yellow">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700/70 bg-zinc-800/70 shadow-md transition-all hover:scale-110 hover:border-terminal-yellow/40 hover:bg-zinc-800 hover:text-terminal-yellow"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-6 pt-10 pb-24 sm:px-12 md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <SectionLabel icon={FiUser}>about</SectionLabel>
            <PortfolioCard>
              <h2 className="mb-6 text-4xl font-extrabold text-zinc-100">
                About <span className="text-terminal-yellow">Me</span>
              </h2>
              <p className="mb-8 max-w-3xl leading-relaxed text-muted-text">
                I build practical software that connects AI models, backend
                systems, and clean interfaces. My work sits between experiment
                and production: fast enough to explore, structured enough to
                maintain.
              </p>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-terminal-yellow">
                Current Focus
              </p>
              <TechList
                items={[
                  "Agentic Workflows",
                  "Full-Stack Apps",
                  "Machine Learning",
                  "System Design",
                ]}
              />
            </PortfolioCard>
          </div>
        </section>

        <section id="education" className="px-6 py-24 sm:px-12 md:px-24">
          <div className="mx-auto w-full max-w-7xl">
            <SectionLabel icon={FiBriefcase}>background</SectionLabel>
            <h2 className="mb-14 text-5xl font-extrabold text-terminal-yellow">
              Education
            </h2>
            <div className="grid gap-6">
              {backgroundItems
                .filter((item) => item.type === "Education")
                .map((item) => (
                  <PortfolioCard key={`${item.type}-${item.title}`}>
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-terminal-yellow">
                          {item.type}
                        </p>
                        <h3 className="text-2xl font-extrabold text-zinc-100">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-terminal-yellow">{item.org}</p>
                      </div>
                      <span className="border border-zinc-700 bg-[#202020] px-3 py-1 text-sm text-muted-text">
                        {item.period}
                      </span>
                    </div>
                    <ul className="space-y-4 text-muted-text">
                      {item.points.map((point) => (
                        <li key={point} className="leading-relaxed">
                          &gt; {point}
                        </li>
                      ))}
                    </ul>
                  </PortfolioCard>
                ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-6 py-24 sm:px-12 md:px-24">
          <div className="mx-auto w-full max-w-7xl">
            <h2 className="mb-14 text-5xl font-extrabold text-zinc-100">
              Work <span className="text-terminal-yellow">Experience</span>
            </h2>
            <div className="grid gap-6">
              {backgroundItems
                .filter((item) => item.type === "Experience")
                .map((item) => (
                  <PortfolioCard key={`${item.type}-${item.title}`}>
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-terminal-yellow">
                          {item.type}
                        </p>
                        <h3 className="text-2xl font-extrabold text-zinc-100">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-terminal-yellow">{item.org}</p>
                      </div>
                      <span className="border border-zinc-700 bg-[#202020] px-3 py-1 text-sm text-muted-text">
                        {item.period}
                      </span>
                    </div>
                    <ul className="space-y-4 text-muted-text">
                      {item.points.map((point) => (
                        <li key={point} className="leading-relaxed">
                          &gt; {point}
                        </li>
                      ))}
                    </ul>
                  </PortfolioCard>
                ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-24 sm:px-12 md:px-24">
          <div className="mx-auto w-full max-w-7xl">
            <SectionLabel icon={FiFolder}>projects</SectionLabel>
            <h2 className="mb-20 text-5xl font-extrabold text-zinc-100">
              My <span className="text-terminal-yellow">Projects</span>
            </h2>
            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <PortfolioCard
                  key={project.title}
                  className="flex h-full flex-col transition-colors hover:border-terminal-yellow/60"
                >
                  <h3 className="mb-6 text-2xl font-extrabold text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="mb-8 min-h-24 leading-relaxed text-muted-text">
                    {project.description}
                  </p>
                  <TechList items={project.stack} />
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.actions.map((action) => (
                      <a
                        key={action.label}
                        href={action.href}
                        className={`border px-4 py-2 text-sm font-bold transition-colors ${projectButtonClasses[action.variant]}`}
                      >
                        {action.label}
                      </a>
                    ))}
                  </div>
                </PortfolioCard>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-6 py-24 sm:px-12 md:px-24">
          <div className="mx-auto w-full max-w-7xl">
            <SectionLabel icon={FiCode}>skills</SectionLabel>
            <h2 className="mb-14 text-5xl font-extrabold text-zinc-100">
              Technical <span className="text-terminal-yellow">Stack</span>
            </h2>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group) => (
                <PortfolioCard key={group.title}>
                  <div className="mb-6 inline-flex border border-terminal-yellow/30 bg-[#202020] p-4 text-2xl text-terminal-yellow">
                    <FiCpu />
                  </div>
                  <h3 className="mb-6 text-2xl font-extrabold text-zinc-100">
                    {group.title}
                  </h3>
                  <TechList items={group.skills} />
                </PortfolioCard>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-24 sm:px-12 md:px-24">
          <div className="mx-auto w-full max-w-7xl">
            <SectionLabel icon={FiSend}>contact</SectionLabel>
            <PortfolioCard className="md:p-12">
              <h2 className="mb-6 text-5xl font-extrabold text-zinc-100">
                Build Something{" "}
                <span className="text-terminal-yellow">Useful</span>
              </h2>
              <p className="mb-10 max-w-2xl leading-relaxed text-muted-text">
                Open to work, AI projects, full-stack work, and technical
                collaboration.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:leejiasheng0826@gmail.com"
                  className="border-2 border-terminal-yellow bg-terminal-yellow px-8 py-3.5 font-extrabold text-black-bg transition-colors hover:bg-[#1b1b1b] hover:text-terminal-yellow"
                >
                  Email me
                </a>
                <a
                  href="https://github.com/JSLee0920"
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-terminal-yellow px-8 py-3.5 font-bold text-terminal-yellow transition-colors hover:bg-terminal-yellow hover:text-black-bg"
                >
                  GitHub
                </a>
              </div>
            </PortfolioCard>
          </div>
        </section>

        <footer className="px-6 py-10 sm:px-12 md:px-24">
          <div className="mx-auto w-full max-w-7xl border-t border-zinc-800 pt-4 text-sm text-center text-muted-text sm:text-base">
            © 2026 Lee Jia Sheng. Built with Next.js, Tailwind CSS, and lots of
            coffeeeee
          </div>
        </footer>
      </main>
    </>
  );
};

export default HomePage;
