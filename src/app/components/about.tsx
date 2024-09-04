// TODO: Add About Me
const About = () => {
  return (
    <section className="max-w-xl py-4">
      <h2 className="text-lg font-medium uppercase text-slate-200 sm:text-lg">
        About
      </h2>
      <p>
        My coding journey started when I enrolled in my first computer science
        course in college. I quickly fell in love with coding, captivated by the
        endless opportunities to learn and explore. Each area of computer
        science felt like an infinite rabbit hole, full of depth and complexity.
        By the time I graduated, I had the privilege of building web
        applications for companies committed to making a positive impact in the
        local community.
      </p>
      <p className="py-4">
        Today, I contribute to the web application at{" "}
        <a
          href="https://thaddeus.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-slate-300"
        >
          Thaddeus Resource Center
        </a>
        , a non-profit dedicated to supporting women and children in times of
        need. In my free time, I enjoy developing web applications and tools,
        especially those that intersect with the gaming industry.
      </p>
      <p className="py-4">
        When I’m not coding, you can find me playing Super Smash Bros with
        friends, meal prepping, working out, or spending quality time with my
        loved ones.
      </p>
    </section>
  );
};

export default About;
