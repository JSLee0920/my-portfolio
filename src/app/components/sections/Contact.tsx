import { FiSend } from "react-icons/fi";
import { PortfolioCard } from "../PortfolioCard";
import { SectionLabel } from "../SectionLabel";

export const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24 sm:px-12 md:px-24">
      <div className="mx-auto w-full max-w-7xl">
        <SectionLabel icon={FiSend}>contact</SectionLabel>
        <PortfolioCard className="md:p-12">
          <h2 className="mb-6 text-5xl font-extrabold text-zinc-100">
            Build Something <span className="text-terminal-yellow">Useful</span>
          </h2>
          <p className="mb-10 max-w-2xl leading-relaxed text-zinc-300">
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
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-terminal-yellow px-8 py-3.5 font-bold text-terminal-yellow transition-colors hover:bg-terminal-yellow hover:text-black-bg"
            >
              Resume
            </a>
          </div>
        </PortfolioCard>
      </div>
    </section>
  );
};
