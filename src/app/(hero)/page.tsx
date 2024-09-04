import Landing from "./components/landing";
import Projects from "./components/projects";
import Experiences from "./components/experiences";
import About from "../components/about";

export default function Home() {
  return (
    <div className="flex flex-col px-6 py-12 lg:flex-row lg:px-24 lg:py-12">
      <div className="lg:sticky lg:top-0 lg:flex lg:flex-1 lg:justify-end">
        <Landing />
      </div>
      <div className="flex flex-col lg:flex-1 lg:overflow-y-auto">
        <About />
        <Experiences />
        <Projects />
      </div>
    </div>
  );
}
