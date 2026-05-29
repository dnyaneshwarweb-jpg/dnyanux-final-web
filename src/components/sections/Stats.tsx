const stats = [
  {
    number: "10+",
    label: "Projects Completed",
  },
  {
    number: "100%",
    label: "Responsive Design",
  },
  {
    number: "24/7",
    label: "Client Support",
  },
  {
    number: "Fast",
    label: "Delivery",
  },
];

const Stats = () => {
  return (
    <section className="section-padding">

      <div className="container-custom">

        <div className="grid gap-6 md:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
            >
              <h3 className="text-4xl font-bold text-blue-500">
                {item.number}
              </h3>

              <p className="mt-3 text-white/70">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Stats;