type ServiceCardProps = {
  title: string;
  description: string;
};

const ServiceCard = ({
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/40">

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/0 opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl text-blue-400 transition duration-500 group-hover:scale-110">
        ✦
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-relaxed text-zinc-400">
        {description}
      </p>

    </div>
  );
};

export default ServiceCard;