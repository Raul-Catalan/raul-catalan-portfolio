import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <nav className="hidden h-6 w-full flex-row bg-blue-200 md:flex">
      <div>
        <Link href="/" className="">
          Raul Catalan
        </Link>
      </div>
      <div>
        <Link href="/projects" className="">
          Projects
        </Link>
        <Link href="/about" className="">
          About
        </Link>
        <Link href="/contact" className="">
          Contact Me
        </Link>
        //<ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
