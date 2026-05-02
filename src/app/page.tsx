import type { NextPage } from "next";
import Head from "next/head";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"; // npm install react-icons

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>JSLee :: Portfolio</title>
      </Head>

      {/* Main Container with Grid Background */}
      <main className="relative flex flex-col w-full h-full bg-grid-dots">
        {/* Navigation Bar */}
        <header className="fixed top-0 left-0 w-full z-50 px-6 sm:px-12 py-6 bg-black-bg/90 border-b border-terminal-green/10 backdrop-blur-sm">
          <nav className="flex items-center justify-between">
            <a
              href="#"
              className="text-xl font-bold text-terminal-green hover:opacity-80 transition-opacity"
            >
              &gt;_ jslee.portfolio
            </a>
            <div className="flex items-center gap-6 text-sm text-muted-text">
              {["About", "Experience", "Projects", "Skills"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-terminal-green transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-2.5 bg-[#0b3b24] text-terminal-green border border-terminal-green/20 font-bold hover:bg-terminal-green hover:text-black-bg transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col grow justify-center items-start pt-32 px-6 sm:px-12 md:px-24">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-terminal-green/30 bg-badge-green text-terminal-green/80 text-sm mb-10 selection:bg-terminal-green selection:text-black-bg">
            <span className="relative flex h-2.5 w-2.5">
              {/* Removed rounded-full to make the pinging dot a square */}
              <span className="animate-ping absolute inline-flex h-full w-full bg-terminal-green opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 bg-terminal-green"></span>
            </span>
            Available for opportunities
          </div>

          {/* Terminal Path */}
          <p className="text-muted-text text-sm mb-4">
            &gt;_ ~/portfolio •{" "}
            <span className="text-terminal-green">main</span>
          </p>

          {/* Large Name */}
          <h1 className="text-7xl sm:text-8xl md:text-7xl font-extrabold text-terminal-green mb-6 tracking-tight">
            Lee Jia Sheng
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-terminal-green mb-8">
            &gt; CS Student | AI Enthusiast | Software Developer |
          </p>

          {/* Paragraph Description */}
          <p className="max-w-3xl leading-relaxed text-muted-text mb-12">
            CS Undergraduate @ Multimedia University (MMU), majoring in
            Artificial Intelligence. Full-stack engineer and AI specialist
            focused on building scalable systems, agentic workflows, and
            high-performance applications from the backend to the UI. Passionate
            about creating innovative solutions that push the boundaries of
            technology.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-8">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-[#0b3b24] text-terminal-green border-2 border-terminal-green/20 font-extrabold hover:bg-terminal-green hover:text-black-bg transition-colors"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3.5 border-2 border-terminal-green text-terminal-green font-bold hover:bg-terminal-green/20 transition-colors"
            >
              View work
            </a>
          </div>

          {/* Social Icons (Footer-style within hero) */}
          <div className="flex gap-6 mt-auto pt-1 pb-2 text-xl justify-end align-bottom text-muted-text selection:text-terminal-green">
            {[FiGithub, FiLinkedin, FiMail].map((Icon, index) => (
              <a
                key={index}
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:text-terminal-green transition-colors hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
