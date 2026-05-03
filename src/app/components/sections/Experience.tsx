import { BackgroundItem } from "@/app/types";
import { PortfolioCard } from "../PortfolioCard";

export const Experience = ({
  backgroundItems,
}: {
  backgroundItems: BackgroundItem[];
}) => {
  return (
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
                  <span className="border border-zinc-700 bg-[#202020] px-3 py-1 text-sm text-zinc-300">
                    {item.period}
                  </span>
                </div>
                <ul className="space-y-4 text-zinc-300">
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
  );
};
