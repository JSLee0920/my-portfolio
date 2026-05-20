import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { SocialLink } from "@/app/types";

const socialLinks: SocialLink[] = [
  { href: "https://github.com/JSLee0920", label: "GitHub", Icon: FiGithub },
  {
    href: "https://linkedin.com/in/jslee8260",
    label: "LinkedIn",
    Icon: FiLinkedin,
  },
  { href: "mailto:leejiasheng0826@gmail.com", label: "Email", Icon: FiMail },
];

export const Hero = () => {
  return (
    <section className="min-h-screen px-4 pt-20 sm:px-12 md:px-24">
      <div className="mx-auto grid w-[90vw] max-w-7xl items-center gap-12 py-16 sm:w-full sm:py-24 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="flex min-w-0 flex-col items-start">
          <p className="mb-4 text-sm text-zinc-300">
            &gt;_ ~/portfolio <span className="text-terminal-yellow">main</span>
          </p>

          <h1 className="mb-6 max-w-full break-words text-3xl font-extrabold tracking-tight text-terminal-yellow sm:text-6xl lg:text-5xl">
            Hi, I'm Jia Sheng!
          </h1>

          <p className="mb-8 text-sm text-terminal-yellow sm:text-lg">
            &gt; CS Student | Software Developer
          </p>

          <p className="mb-10 max-w-xs break-words text-sm leading-relaxed text-zinc-300 sm:mb-12 sm:max-w-2xl sm:text-base">
            CS Undergraduate @ Multimedia University (MMU), majoring in
            Artificial Intelligence. Software engineer focused on building
            scalable systems, agentic workflows, and high-performance
            applications from backend to UI.
          </p>

          <div className="mb-2 flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
            <a
              href="#contact"
              className="border-2 border-terminal-yellow bg-terminal-yellow px-6 py-3 text-center font-extrabold text-black-bg transition-colors hover:bg-black-bg hover:text-terminal-yellow sm:px-8 sm:py-3.5"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="border-2 border-terminal-yellow px-6 py-3 text-center font-bold text-terminal-yellow transition-colors hover:bg-terminal-yellow hover:text-black-bg sm:px-8 sm:py-3.5"
            >
              View work
            </a>
          </div>

          <div className="mt-8 flex gap-6 text-xl text-zinc-300 selection:text-terminal-yellow">
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

        <div className="mx-auto hidden w-full max-w-72 overflow-hidden rounded-full border border-terminal-yellow/40 bg-zinc-950/40 shadow-[0_0_60px_rgba(250,204,21,0.12)] lg:mr-0 lg:block lg:max-w-none">
          <Image
            src="/profile-pic.jpg"
            alt="Lee Jia Sheng"
            width={2540}
            height={3556}
            className="aspect-square h-auto w-full rounded-full object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
};
