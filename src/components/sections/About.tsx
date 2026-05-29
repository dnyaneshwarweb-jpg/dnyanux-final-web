import SectionHeading from "../ui/SectionHeading";
import { stats } from "@/data/stats";
import StatCard from "../cards/StatCard";

const About = () => {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="container-custom relative z-10">

        <SectionHeading
          badge="About DnyanuX"
          title="Building Premium Websites With Modern Design"
          description="DnyanuX helps brands, businesses and startups build premium online experiences that look modern, feel professional and create trust."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="relative">

            <div className="glass-card overflow-hidden rounded-[32px] p-4">

              <img
                src="/images/about/about-main.jpg"
                alt="About"
                className="h-full w-full rounded-[24px] object-cover"
              />

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div>

            <h3 className="text-4xl font-bold leading-tight">
              Creating Modern Digital Experiences
            </h3>

            <p className="mt-8 text-lg leading-relaxed text-zinc-400">
              We focus on creating premium websites with modern UI,
              smooth animations and clean user experiences that help
              businesses stand out online.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              From local brands to growing startups, DnyanuX builds
              websites designed to increase trust, improve brand image
              and create better online presence.
            </p>

            {/* STATS */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">

              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  number={stat.number}
                  label={stat.label}
                />
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;