import { ProjectProps } from "@/app/components/interfaces";
import { FaGithub, FaLink } from "react-icons/fa";

// TODO: Add Image of Project here
const Project = ({ title, desc, tags, github, demo }: ProjectProps) => {
  return (
    <div className="pb-6">
      <h2 className="text-lg text-slate-300 sm:text-xl">{title}</h2>
      <p className="py-2 leading-tight">{desc}</p>
      <ul className="flex flex-wrap">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="my-1 mr-2 rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="flex py-2 text-2xl sm:text-3xl">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="pr-4"
        >
          <FaGithub />
        </a>
        <a href={demo} target="_blank" rel="noopener noreferrer" className="">
          <FaLink />
        </a>
      </div>
    </div>
  );
};

export default Project;
