import Landing from "./components/landing";
import Projects from "./components/projects";
import Experiences from "./components/experiences";
import ThemeSwitch from "../components/ThemeSwitch";

export default function Home() {
  return (
    <div className="px-6 py-12">
      <Landing />
      <Experiences />
      <Projects />
    </div>
  );
}
