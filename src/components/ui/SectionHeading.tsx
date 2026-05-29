interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  badge,
}: SectionHeadingProps) => {
  return (
    <div className="mx-auto max-w-3xl text-center">

      {badge && (
        <span className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-400">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg leading-relaxed text-zinc-400">
          {subtitle}
        </p>
      )}

    </div>
  );
};

export default SectionHeading;