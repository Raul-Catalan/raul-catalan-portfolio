import Image from "next/image";

export default function Landing() {
  return (
    <main className="">
      <section className="">
        <p className="">Hi, my name is</p>
        <h1 className="">Raul Catalan</h1>
        <p className="">Full-Stack Web Developer / Software Engineer</p>
        <p className="">
          Turning ideas into interactive, user-friendly web applications with a
          focus on modern technologies.
        </p>
        <button className="bg-white text-black rounded-full px-3 self-center">
          View My Projects
        </button>
      </section>
      <section className="basis-1/3 flex justify-center">
        <Image
          src="/images/gitHubProfilePicCrop1.jpg"
          width={300}
          height={300}
          className="max-w-screen-lg h-fit rounded-full"
          alt="Picture of Raul Catalan"
        />
      </section>
    </main>
  );
}
