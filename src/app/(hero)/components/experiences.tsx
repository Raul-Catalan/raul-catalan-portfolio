import Experience from "./experience";
import { ExperienceProps } from "@/app/components/interfaces";

const experiences: ExperienceProps[] = [
  {
    company: "Thaddeus Resource Center",
    city: "San Dimas",
    state: "California",
    position: "Web Development Intern",
    start: "July 2024",
    desc: ["Testing bullet", "Testing Bullet 2"],
  },
];

const Experiences = () => {
  return (
    <section>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index}>
            <Experience
              company={experience.company}
              city={experience.city}
              state={experience.state}
              position={experience.position}
              start={experience.start}
              desc={experience.desc}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experiences;
