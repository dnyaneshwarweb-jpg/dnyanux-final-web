import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../cards/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          badge="Projects"
          title="Featured Premium Projects"
          subtitle="A showcase of modern luxury websites designed for ambitious brands and businesses."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;