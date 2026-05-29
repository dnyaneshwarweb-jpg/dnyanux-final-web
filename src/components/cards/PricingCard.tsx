type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  features?: string[];
  popular?: boolean;
};

const PricingCard = ({
  title,
  price,
  description,
  features = [],
  popular,
}: PricingCardProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
        popular
          ? "border-cyan-400 bg-cyan-500/10"
          : "border-white/10 bg-white/5"
      }`}
    >
      {popular && (
        <div className="absolute right-4 top-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-black">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <div className="mt-4 text-4xl font-extrabold text-cyan-400">
        {price}
      </div>

      <p className="mt-4 text-zinc-300">
        {description}
      </p>

      <ul className="mt-8 space-y-3">
        {features.map((feature, index) => (
          <li
            key={index}
            className="text-sm text-zinc-200"
          >
            ✓ {feature}
          </li>
        ))}
      </ul>

      <button className="mt-8 w-full rounded-xl bg-cyan-400 py-3 font-semibold text-black transition-all hover:bg-cyan-300">
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;