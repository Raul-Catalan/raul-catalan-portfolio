interface ProjectProps {
  title: string;
  desc: string;
  tags: string[];
  github: string;
  demo: string;
}

export default function Project({
  title,
  desc,
  tags,
  github,
  demo,
}: ProjectProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <a href={github} target="_blank" rel="noopener noreferrer">
        Github
      </a>
      <a href={demo} target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
    </div>
  );
}
