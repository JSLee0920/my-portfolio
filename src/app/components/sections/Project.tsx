import { FiFolder } from "react-icons/fi";
import { SectionLabel } from "../SectionLabel";
import { PortfolioCard } from "../PortfolioCard";
import { TechList } from "../TechList";
import { Project } from "../../types";

const projectButtonClasses = {
  primary:
    "border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black-bg",
  secondary:
    "border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100",
};

interface ProjectsProps {
  items: Project[];
}

export const Projects = ({ items }: ProjectsProps) => {
  return (
    <section id="projects" className="px-6 py-24 sm:px-12 md:px-24">
      <div className="mx-auto w-full max-w-7xl">
        <SectionLabel icon={FiFolder}>projects</SectionLabel>

        <h2 className="mb-20 text-5xl font-extrabold text-zinc-100">
          My <span className="text-terminal-yellow">Projects</span>
        </h2>

        <div className="grid gap-5 lg:grid-cols-3">
          {items.map((project) => (
            <PortfolioCard
              key={project.title}
              className="flex h-full flex-col transition-all duration-300 hover:border-terminal-yellow/60 hover:-translate-y-1"
            >
              <h3 className="mb-6 text-2xl font-extrabold text-zinc-100">
                {project.title}
              </h3>

              <p className="mb-8 min-h-24 leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-auto">
                <TechList items={project.stack} />

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.actions.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      target={
                        action.href.startsWith("http") ? "_blank" : "_self"
                      }
                      rel="noreferrer"
                      className={`border px-4 py-2 text-sm font-bold transition-colors ${
                        projectButtonClasses[action.variant]
                      }`}
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              </div>
            </PortfolioCard>
          ))}
        </div>
      </div>
    </section>
  );
};
