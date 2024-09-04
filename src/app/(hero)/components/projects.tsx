import Project from "./project";
import { projects } from "@/app/components/data";

const Projects = () => {
  return (
    <section className="max-w-xl">
      <h2 className="text-lg font-medium uppercase text-slate-200 sm:text-lg">
        Projects
      </h2>
      <ul className="py-4">
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
    </section>
  );
};

export default Projects;
