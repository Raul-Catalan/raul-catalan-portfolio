import Project from "./project";
import { ProjectProps } from "@/app/components/interfaces";


const projects: ProjectProps[] = [
  {
    title: "Test Title",
    desc: "Testing the description of the project",
    tags: ["React", "JavaScript", "HTML", "CSS", "NextJS", "TailwindCSS"],
    github: "www.google.com",
    demo: "www.youtube.com",
  },
  {
    title: "Tester Title",
    desc: "Testering the description of the project",
    tags: ["React", "JavaScript", "HTML", "CSS", "NextJS", "TailwindCSS"],
    github: "www.google.com",
    demo: "www.youtube.com",
  },
];

const Projects = () => {
  return (
    <ul>
      {projects.map((project, index) => (
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
