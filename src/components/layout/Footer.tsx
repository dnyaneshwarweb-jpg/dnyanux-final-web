const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">

      <div className="container-custom flex flex-col items-center justify-between gap-6 text-center md:flex-row">

        <div>

          <h3 className="text-2xl font-bold">
            Dnyanu<span className="gradient-text">X</span>
          </h3>

          <p className="mt-3 text-zinc-500">
            Modern Websites for Brands, Businesses & Startups
          </p>

        </div>

        <div className="flex gap-6 text-zinc-400">

          <a href="#">
            Instagram
          </a>

          <a href="#">
            LinkedIn
          </a>

          <a href="#">
            WhatsApp
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;