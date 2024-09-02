import Experience from "./experience";
import { experiences } from "@/app/components/data";

const Experiences = () => {
  return (
    <section>
      <h2 className="text-lg font-medium uppercase text-slate-200 sm:text-lg">
        Experience
      </h2>
      <ul className="py-4">
        {experiences.map((experience, index) => (
          <li key={index}>
            <Experience
              company={experience.company}
              city={experience.city}
              state={experience.state}
              position={experience.position}
              start={experience.start}
              desc={experience.desc}
              tags={experience.tags}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experiences;
