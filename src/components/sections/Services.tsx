import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../cards/ServiceCard";
import Reveal from "../ui/Reveal";

import { services } from "@/data/services";

const Services = () => {
  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="container-custom relative z-10">

        <SectionHeading
          badge="Our Services"
          title="Premium Digital Services"
          description="We create modern websites and digital experiences designed to help brands, businesses and startups grow online."
        />

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => (
            <Reveal key={index}>

              <ServiceCard
                title={service.title}
                description={service.description}
              />

            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;