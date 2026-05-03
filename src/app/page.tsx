import type { NextPage } from "next";
import type { BackgroundItem, Project, SkillGroup } from "./types";
import Head from "next/head";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Education } from "./components/sections/Education";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { Projects } from "./components/sections/Project";
import { Skills } from "./components/sections/Skills";
import { Footer } from "./components/sections/Footer";

const projects: Project[] = [
  {
    title: "AI Chatbot",
    description:
      "Conversational AI assistant built with transformer models, retrieval workflows, and API-ready deployment.",
    stack: ["Python", "PyTorch", "Transformers", "FastAPI"],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/JSLee0920",
        variant: "primary",
      },
    ],
  },
  {
    title: "Computer Vision App",
    description:
      "Real-time object detection and image classification system with CNN models and a responsive web UI.",
    stack: ["TensorFlow", "OpenCV", "React", "Flask"],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/JSLee0920",
        variant: "primary",
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
    title: "Bachelor of Computer Science (Honours) (Artificial Intelligence)",
    org: "Multimedia University (MMU)",
    period: "July 2023 - Present",
    points: [
      "Cumulative GPA: 3.92/4.0 | Dean’s List",
      "Relevant Coursework: Data Structures, Program Development, Microprocessors, Abstract Algebra I: Groups and Rings, Linear Algebra, Discrete Mathematics, Multivariable & Single Variable Calculus, Principles and Practice of Comp Sc",
    ],
  },
  {
    type: "Experience",
    title: "Frontend Developer Intern",
    org: "Softinn Solutions",
    period: "July 2025 - October 2025",
    points: [
      "Built company's new official website and ensure a responsive, high-performance user experience across all device types.",
      "Worked on the frontend side of product development, collaborating closely with backend engineers and UI/UX designers to translate wireframes into functional, interactive features.",
      "Integrated RESTful APIs and managed complex state transitions to ensure seamless data flow and real-time interface updates.",
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

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>JSLee :: Portfolio</title>
      </Head>

      <main className="relative flex min-h-screen w-full flex-col bg-grid-dots">
        <Header />
        <Hero />
        <About />
        <Education backgroundItems={backgroundItems} />
        <Experience backgroundItems={backgroundItems} />
        <Projects items={projects} />
        <Skills skillGroups={skillGroups} />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
