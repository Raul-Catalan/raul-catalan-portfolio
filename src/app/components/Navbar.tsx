import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="hidden text-lg uppercase text-slate-300 lg:flex lg:w-full lg:flex-col lg:items-center">
      <Link href="#about" className="">
        About
      </Link>
      <Link href="#experiences" className="">
        Experience
      </Link>
      <Link href="#projects" className="">
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
