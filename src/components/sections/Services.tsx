import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../cards/ServiceCard";
import { services } from "@/data/services";

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          badge="Services"
          title="Premium Digital Services"
          subtitle="Modern high-performance websites crafted for startups, brands and businesses."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;