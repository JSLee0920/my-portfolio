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
    title: "HealthNavigator: AI-Powered Personal Health Assistant",
    description:
      "HealthNavigator is an advanced, production-grade healthcare AI assistant powered by a Hybrid Retrieval-Augmented Generation (RAG) architecture. It combines the semantic search capabilities of a Vector Database with the deep relational logic of a Graph Database to provide highly accurate, context-aware medical insights.",
    stack: [
      "Python",
      "Next.js",
      "PostgreSQL",
      "FastAPI",
      "Qdrant",
      "Neo4j",
      "Docker",
    ],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/JSLee0920/healthnavigator-fyp",
        variant: "primary",
      },
    ],
  },
  {
    title: "Full Stack Event Ticketing System Platform",
    description:
      "A full-stack event ticketing platform designed to manage complex event workflows and process high-concurrency ticket sales seamlessly. Powered by a robust Java Spring Boot backend and a  TanStack Start frontend (via Bun), the system acts as a secure engine for checkout fulfillment. To guarantee inventory accuracy during massive traffic spikes, it utilizes PostgreSQL and optimistic locking to completely eliminate the risk of overselling.",
    stack: ["React", "Spring Boot", "Bun", "Tailwind CSS", "TypeScript"],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/JSLee0920/event-ticketing-system",
        variant: "primary",
      },
    ],
  },
  {
    title: "JobHunter",
    description:
      "An AI-powered job search application that matches your resume with job listings and generates personalized cover letters using Google's Agent Development Kit (ADK) and Gemini.",
    stack: ["Python", "FastAPI", "React", "Google ADK"],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/JSLee0920/jobhunter",
        variant: "primary",
      },
    ],
  },
  {
    title: "Diabetes Prediction using Machine Learning",
    description:
      "This project focuses on building a predictive model to identify the likelihood of diabetes in patients based on clinical and demographic features. By utilizing machine learning and deep learning techniques, the project evaluates and compares different algorithms to find the most effective approach for early diagnosis.",
    stack: ["scikit-learn", "TensorFlow", "pandas"],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/JSLee0920/diabetes-prediction",
        variant: "primary",
      },
    ],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js and Tailwind CSS to present my projects, technical background, and contact details through a fast, responsive, terminal-inspired interface.",
    stack: ["Next.js", "Tailwind CSS"],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/JSLee0920/my-portfolio",
        variant: "primary",
      },
    ],
  },

  {
    title: "AetherHR",
    description:
      "AetherHR is an intelligent, agentic HR operations platform designed to transform HR from a bottleneck into a strategic asset by automating documents / contracts generation and providing HR conversational assistant for handling FAQS from employees. Developed for the Deriv AI Hackathon.",
    stack: ["Next.js", "FastAPI", "LangChain", "LangGraph"],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/JSLee0920/deriv-ai-hackathon-hr",
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
      "Relevant Coursework: Computer Programming, Operating Systems, Database Systems, Data Structures and Algorithms, Object-Oriented Programming, System Analysis and Design, Machine Learning, Software Engineering Fundamentals, Web Techniques and Application, Computer Vision, Computer Networks",
    ],
  },
  {
    type: "Experience",
    title: "Frontend Developer Intern",
    org: "Softinn Solutions",
    period: "July 2025 - October 2025",
    points: [
      "Developed the company's new official website using HTML, CSS, JavaScript, and Bootstrap within an ASP.Net Core framework to ensure a responsive, high performance user experience across all device types.",
      "Worked on the frontend side of product development, collaborating closely with backend engineers and UI/UX designers to translate wireframes into functional, interactive features.",
      "Developed user interfaces and integrated RESTful APIs for the company's products using Angular, managing CRUD operations to ensure seamless data flow and real-time interface updates.",
    ],
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "Svelte",
      "TypeScript",
      "Tailwind CSS",
    ],
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
