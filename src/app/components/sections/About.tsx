import { PortfolioCard } from "../PortfolioCard";
import { SectionLabel } from "../SectionLabel";
import { FiUser } from "react-icons/fi";

export const About = () => {
  return (
    <section id="about" className="px-6 pt-10 pb-24 sm:px-12 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <SectionLabel icon={FiUser}>about</SectionLabel>
        <PortfolioCard>
          <h2 className="mb-6 text-4xl font-extrabold text-zinc-100">
            About <span className="text-terminal-yellow">Me</span>
          </h2>
          <p className="mb-8 max-w-3xl leading-relaxed text-zinc-300">
            Hi, I'm Lee Jia Sheng. I'm a CS student majoring in AI who loves the
            challenge of building software from the ground up. I’m currently
            diving into full-stack and AI development, while also keeping an eye
            on the DevOps side of things. Lately, I've been practicing my skills
            on Java and React as well as learning more about system design,
            especially microservices architecture. When I'm not coding, you will
            find me watching movies, reading or basically just chilling.
          </p>
        </PortfolioCard>
      </div>
    </section>
  );
};
