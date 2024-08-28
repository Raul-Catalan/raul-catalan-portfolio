import { ExperienceProps } from "@/app/components/interfaces";

const Experience = ({
  company,
  city,
  state,
  position,
  start,
  end,
  desc,
}: ExperienceProps) => {
  const endDate = end ?? "Present";

  return (
    <div>
      <h3>
        {company} | {city}, {state}
      </h3>
      <p>
        {position} | {start} - {endDate}
      </p>
      <ul>
        {desc.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
