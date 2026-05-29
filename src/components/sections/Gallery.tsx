import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

import { gallery } from "@/data/gallery";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="section-padding relative overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="container-custom relative z-10">

        <SectionHeading
          badge="Gallery"
          title="Creative Visual Showcase"
          description="A collection of premium visuals, projects and creative digital experiences."
        />

        {/* Gallery Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {gallery.map((item, index) => (
            <Reveal key={index}>

              <div className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl">

                <div className="overflow-hidden">

                  <img
                    src={item.image}
                    alt="Gallery"
                    className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

              </div>

            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;