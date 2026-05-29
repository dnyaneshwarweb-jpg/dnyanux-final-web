import SectionHeading from "../ui/SectionHeading";
import GalleryGrid from "../ui/GalleryGrid";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="relative py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          badge="Gallery"
          title="Creative Design Showcase"
          subtitle="A premium collection of modern visuals, UI experiences and brand-focused digital creativity."
        />

        <div className="mt-16">
          <GalleryGrid />
        </div>

      </div>
    </section>
  );
};

export default Gallery;