type StatCardProps = {
  number: string;
  label: string;
};

const StatCard = ({
  number,
  label,
}: StatCardProps) => {
  return (
    <div className="glass-card rounded-[28px] p-8 text-center">

      <h3 className="text-4xl font-bold gradient-text">
        {number}
      </h3>

      <p className="mt-4 text-zinc-400">
        {label}
      </p>

    </div>
  );
};

export default StatCard;