import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../cards/ProjectCard";
import Reveal from "../ui/Reveal";

import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="container-custom relative z-10">

        <SectionHeading
          badge="Our Work"
          title="Featured Projects"
          description="A collection of premium websites and modern digital experiences created for brands and businesses."
        />

        {/* Projects Grid */}
        <div className="grid gap-10 lg:grid-cols-2">

          {projects.map((project, index) => (
            <Reveal key={index}>

              <ProjectCard
                title={project.title}
                category={project.category}
                image={project.image}
              />

            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;