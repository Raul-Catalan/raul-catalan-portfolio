import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Landing() {
  return (
    <main className="flex max-w-lg flex-col">
      <section className="">
        <p className="sm:text-xl">Hi, my name is</p>
        <h1 className="pt-0 text-4xl font-bold text-slate-200 sm:text-5xl">
          Raul Catalan
        </h1>
        <p className="py-4 text-lg font-medium text-slate-300 sm:text-xl">
          Full-Stack Web Developer / Software Engineer
        </p>
        <p className="">
          Turning ideas into interactive, user-friendly web applications with a
          focus on modern technologies.
        </p>
      </section>
      <section className="hidden lg:flex">
        <Image
          src="/images/gitHubProfilePicCrop1.jpg"
          width={300}
          height={300}
          className="h-fit max-w-lg rounded-full"
          alt="Picture of Raul Catalan"
        />
      </section>
      <ul className="flex py-8 text-4xl">
        <li className="pr-4 lg:pr-8">
          <a
            href="https://github.com/Raul-Catalan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/raul-catalan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </main>
  );
}
