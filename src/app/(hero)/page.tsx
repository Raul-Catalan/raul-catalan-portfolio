import Landing from "./components/landing";
import Projects from "./components/projects";
import Experiences from "./components/experiences";
import ThemeSwitch from "../components/ThemeSwitch";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <Landing />
      <Experiences />
      <Projects />
    </div>
  );
}
