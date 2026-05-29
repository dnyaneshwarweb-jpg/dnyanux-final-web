import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="container-custom relative z-10">

        <SectionHeading
          badge="Testimonials"
          title="What Clients Say"
          description="Real feedback from businesses and brands that trusted DnyanuX for their digital presence."
        />

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              review={testimonial.review}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;