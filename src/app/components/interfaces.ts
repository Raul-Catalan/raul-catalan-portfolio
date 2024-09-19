export interface ProjectProps {
  title: string;
  desc: string;
  tags: string[];
  github: string;
  demo: string;
  iframeSrc?: string;
}

export interface ExperienceProps {
  company: string;
  city: string;
  state: string;
  position: string;
  start: string;
  end?: string;
  desc: string;
  tags: string[];
}
