type SectionHeadingProps = {
  badge: string;
  title: string;
  description: string;
};

const SectionHeading = ({
  badge,
  title,
  description,
}: SectionHeadingProps) => {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">

      <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400 backdrop-blur-xl">
        {badge}
      </div>

      <h2 className="text-4xl font-bold leading-tight md:text-6xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-zinc-400">
        {description}
      </p>

    </div>
  );
};

export default SectionHeading;