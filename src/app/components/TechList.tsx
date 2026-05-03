import { TechListProps } from "../types";

const brandColors: Record<string, string> = {
  React: "border-[#61dafb]/40 text-[#61dafb] bg-[#61dafb]/10",
  TypeScript: "border-[#3178c6]/40 text-[#3178c6] bg-[#3178c6]/10",
  "Next.js": "border-zinc-100/40 text-zinc-100 bg-zinc-100/10",
  "Node.js": "border-[#68a063]/40 text-[#68a063] bg-[#68a063]/10",
  FastAPI: "border-[#05998b]/40 text-[#05998b] bg-[#05998b]/10",
  PostgreSQL: "border-[#336791]/40 text-[#336791] bg-[#336791]/10",
  Python: "border-[#ffde57]/40 text-[#ffde57] bg-[#ffde57]/10",
  PyTorch: "border-[#ee4c2c]/40 text-[#ee4c2c] bg-[#ee4c2c]/10",
  TensorFlow: "border-[#ff6f00]/40 text-[#ff6f00] bg-[#ff6f00]/10",
  Git: "border-[#f05032]/40 text-[#f05032] bg-[#f05032]/10",
  Docker: "border-[#2496ed]/40 text-[#2496ed] bg-[#2496ed]/10",
  Linux: "border-[#fcc624]/40 text-[#fcc624] bg-[#fcc624]/10",
};

export const TechList = ({ items }: TechListProps) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => {
      const colorClass = brandColors[item] || "border-zinc-700 text-zinc-300";
      return (
        <span
          key={item}
          className={`border px-3 py-1 text-sm transition-all duration-300 hover:brightness-125 ${colorClass}`}
        >
          {item}
        </span>
      );
    })}
  </div>
);
