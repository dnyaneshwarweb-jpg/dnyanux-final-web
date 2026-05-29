import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Pricing from "@/components/sections/Pricing";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Stats */}
      <Stats />

      {/* About */}
      <About />

      {/* Services */}
      <Services />

      {/* Projects */}
      <Projects />

      {/* Pricing */}
      <Pricing />

      {/* Gallery */}
      <Gallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}