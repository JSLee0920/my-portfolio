import { SectionLabelProps } from "../types";

export const SectionLabel = ({ icon: Icon, children }: SectionLabelProps) => (
  <div className="mb-6 flex items-center gap-3 text-zinc-300">
    <Icon className="text-lg" />
    <span>{children}/</span>
  </div>
);
