import type { PortfolioCardProps } from "../types";

export function PortfolioCard({
  children,
  className = "",
}: PortfolioCardProps) {
  const baseClass = "border border-zinc-700/80 bg-[#1b1b1b]/95 p-8";

  return (
    <article className={`${baseClass}${className ? ` ${className}` : ""}`}>
      {children}
    </article>
  );
}
