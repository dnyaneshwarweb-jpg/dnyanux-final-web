import Image from "next/image";

const galleryImages = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg",
];

const GalleryGrid = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {galleryImages.map((image, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900"
        >

          <div className="relative h-[350px] w-full overflow-hidden">

            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

          </div>

          <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/30" />

        </div>
      ))}

    </div>
  );
};

export default GalleryGrid;