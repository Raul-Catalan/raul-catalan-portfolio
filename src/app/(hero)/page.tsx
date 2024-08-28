import Image from "next/image";
import Landing from "./components/landing";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Experiences from "./components/experiences";

export default function Home() {
  return (
    <>
      <Landing />
      <Experiences />
      <Projects />
    </>
  );
}
