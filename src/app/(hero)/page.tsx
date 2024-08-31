import Landing from "./components/landing";
import Projects from "./components/projects";
import Experiences from "./components/experiences";
import ThemeSwitch from "../components/ThemeSwitch";

export default function Home() {
  return (
    <div className="flex flex-col px-6 py-12 lg:flex-row lg:px-24 lg:py-12">
      <div className="lg:sticky lg:top-0 lg:flex-1">
        <Landing />
      </div>
      <div className="flex flex-col lg:flex-1 lg:overflow-y-auto">
        <Experiences />
        <Projects />
      </div>
    </div>
  );
}
