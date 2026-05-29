"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/hero-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      {/* Content */}
      <div className="container-custom relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="mx-auto max-w-5xl text-center"
        >

          {/* Badge */}
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white/80 backdrop-blur">
            Premium Websites For Modern Brands
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">

            Building Premium
            <span className="mt-2 block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Digital Experiences
            </span>

          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300">

            DnyanuX creates modern websites with premium UI,
            cinematic visuals and high-converting digital experiences
            for brands, startups and businesses.

          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="#contact"
              className="rounded-full bg-blue-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-600"
            >
              Start Project
            </a>

            <a
              href="#projects"
              className="rounded-full border border-white/10 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:border-blue-500 hover:bg-white/20"
            >
              View Projects
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;