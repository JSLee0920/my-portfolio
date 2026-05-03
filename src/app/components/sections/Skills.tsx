import { FiCode } from "react-icons/fi";
import { SectionLabel } from "../SectionLabel";
import { PortfolioCard } from "../PortfolioCard";
import { TechList } from "../TechList";
import { SkillGroup } from "../../types";

export const Skills = ({ skillGroups }: { skillGroups: SkillGroup[] }) => (
  <section id="skills" className="px-6 py-24 sm:px-12 md:px-24">
    <div className="mx-auto w-full max-w-7xl">
      <SectionLabel icon={FiCode}>skills</SectionLabel>
      <h2 className="mb-14 text-5xl font-extrabold text-zinc-100">
        Tech <span className="text-terminal-yellow">Stack</span>
      </h2>
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <PortfolioCard key={group.title}>
            <h3 className="mb-6 text-2xl font-extrabold text-zinc-100">
              {group.title}
            </h3>
            <TechList items={group.skills} />
          </PortfolioCard>
        ))}
      </div>
    </div>
  </section>
);
