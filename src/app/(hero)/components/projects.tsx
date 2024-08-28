import Project from "./project";
import { ProjectProps } from "@/app/components/interfaces";

const projects: ProjectProps[] = [
  {
    title: "Personal Portfolio",
    desc: "My Personal Portfolio that I built with Next.js. Mostly to showcase my technical experience, projects, and provide my socials. :)",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
    github: "https://github.com/Raul-Catalan/raul-catalan-portfolio",
    demo: "www.youtube.com",
  },
  {
    title: "Weather App",
    desc: "A Front-End Application that consumes API and displays it for the end-user.",
    tags: ["React", "JavaScript", "HTML", "CSS", "NextJS", "TailwindCSS"],
    github: "www.google.com",
    demo: "www.youtube.com",
  },
];

const Projects = () => {
  return (
    <ul>
      {projects.toReversed().map((project, index) => (
        <li key={index}>
          <Project
            title={project.title}
            desc={project.desc}
            tags={project.tags}
            github={project.github}
            demo={project.demo}
          />
        </li>
      ))}
    </ul>
  );
};

export default Projects;
