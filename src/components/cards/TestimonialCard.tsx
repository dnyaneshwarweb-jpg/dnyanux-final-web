type TestimonialCardProps = {
  name: string;
  role: string;
  review: string;
};

const TestimonialCard = ({
  name,
  role,
  review,
}: TestimonialCardProps) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white">
          {name}
        </h3>

        <p className="text-sm text-cyan-400">
          {role}
        </p>
      </div>

      <p className="text-sm leading-relaxed text-zinc-300">
        “{review}”
      </p>
    </div>
  );
};

export default TestimonialCard;