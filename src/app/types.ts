import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export type SocialLink = {
  href: string;
  label: string;
  Icon: IconType;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  actions: ProjectAction[];
};

export type ProjectAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type BackgroundItem = {
  type: "Education" | "Experience";
  title: string;
  org: string;
  period: string;
  points: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type SectionLabelProps = {
  icon: IconType;
  children: ReactNode;
};

export type TechListProps = {
  items: string[];
};

export type PortfolioCardProps = {
  children: ReactNode;
  className?: string;
};
