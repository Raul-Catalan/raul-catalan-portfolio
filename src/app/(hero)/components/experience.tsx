import { ExperienceProps } from "@/app/components/interfaces";

const Experience = ({
  company,
  city,
  state,
  position,
  start,
  end,
  desc,
  tags,
}: ExperienceProps) => {
  const endDate = end ?? "Present";

  return (
    <div>
      <p className="text-sm sm:text-base">
        {start} - {endDate}
      </p>
      <h3 className="text-lg text-slate-300 sm:text-xl">
        {position}, {company}
      </h3>
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
    </div>
  );
};

export default Experience;
