type ProjectCardProps = {
  title: string;
  category: string;
  image: string;
};

const ProjectCard = ({
  title,
  category,
  image,
}: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:border-blue-500/40">

      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 z-10 w-full p-8">

        {/* Category */}
        <p className="mb-3 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs uppercase tracking-widest text-blue-300 backdrop-blur">
          {category}
        </p>

        {/* Title */}
        <h3 className="text-3xl font-black text-white">
          {title}
        </h3>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">

          <button className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-600">
            Live Preview
          </button>

          <button className="rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:border-blue-500">
            View Details
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;