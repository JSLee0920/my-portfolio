import type { BackgroundItem } from "@/app/types";
import { PortfolioCard } from "../PortfolioCard";

export const Experience = ({
  backgroundItems,
}: {
  backgroundItems: BackgroundItem[];
}) => {
  return (
    <section id="experience" className="px-4 py-20 sm:px-12 sm:py-24 md:px-24">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-10 text-4xl font-extrabold text-zinc-100 sm:mb-14 sm:text-5xl">
          Work <span className="text-terminal-yellow">Experience</span>
        </h2>
        <div className="grid gap-6">
          {backgroundItems
            .filter((item) => item.type === "Experience")
            .map((item) => (
              <PortfolioCard key={`${item.type}-${item.title}`}>
                <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
                  <div className="min-w-0">
                    <p className="mb-3 text-sm uppercase tracking-[0.2em] text-terminal-yellow">
                      {item.type}
                    </p>
                    <h3 className="text-xl font-extrabold text-zinc-100 sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-terminal-yellow">{item.org}</p>
                  </div>
                  <span className="shrink-0 border border-zinc-700 bg-[#202020] px-3 py-1 text-sm text-zinc-300">
                    {item.period}
                  </span>
                </div>
                <ul className="space-y-4 text-zinc-300">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="break-words text-sm leading-relaxed sm:text-base"
                    >
                      &gt; {point}
                    </li>
                  ))}
                </ul>
              </PortfolioCard>
            ))}
        </div>
      </div>
    </section>
  );
};
