import { ExperienceProps, ProjectProps } from "@/app/components/interfaces";

export const experiences: ExperienceProps[] = [
  {
    company: "Thaddeus Resource Center",
    city: "San Dimas",
    state: "California",
    position: "Web Development Intern",
    start: "July 2024",
    desc: "At Thaddeus Resource Center, I improved a legacy codebase by fixing critical bugs that increased browser read rates by 50,000/day. I developed responsive interfaces with Next.js, React, and Tailwind CSS, managed Firebase interactions, and contributed to server-side logic with Node.js, all while collaborating in an Agile/SCRUM environment.",
    tags: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "Node.js",
      "HTML & CSS",
    ],
  },
];

export const projects: ProjectProps[] = [
  {
    title: "Weather App",
    desc: "A Front-End Application that consumes API and displays it for the end-user.",
    tags: ["React", "JavaScript", "HTML", "CSS", "NextJS", "TailwindCSS"],
    iframeSrc: "https://pokedex-app-wheat-alpha.vercel.app/",
    github: "https://www.google.com",
    demo: "https://www.youtube.com",
  },
  {
    title: "Personal Portfolio",
    desc: "My Personal Portfolio that I built with Next.js. Mostly to showcase my technical experience, projects, and provide my socials. :)",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
    github: "https://github.com/Raul-Catalan/raul-catalan-portfolio",
    demo: "https://www.youtube.com",
  },
];
