"use client";

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">

      <div className="container-custom flex h-20 items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-black text-white"
        >
          Dnyanu<span className="text-blue-500">X</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#services"
            className="text-sm text-white/80 transition hover:text-blue-400"
          >
            Services
          </a>

          <a
            href="#projects"
            className="text-sm text-white/80 transition hover:text-blue-400"
          >
            Projects
          </a>

          <a
            href="#pricing"
            className="text-sm text-white/80 transition hover:text-blue-400"
          >
            Pricing
          </a>

          <a
            href="#about"
            className="text-sm text-white/80 transition hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-white/80 transition hover:text-blue-400"
          >
            Contact
          </a>

        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-blue-600 md:block"
        >
          Start Project
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1 md:hidden"
        >
          <span className="h-[2px] w-6 bg-white" />
          <span className="h-[2px] w-6 bg-white" />
          <span className="h-[2px] w-6 bg-white" />
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 md:hidden">

          <nav className="container-custom flex flex-col gap-6 py-8">

            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="text-white/80 transition hover:text-blue-400"
            >
              Services
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="text-white/80 transition hover:text-blue-400"
            >
              Projects
            </a>

            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="text-white/80 transition hover:text-blue-400"
            >
              Pricing
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-white/80 transition hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-white/80 transition hover:text-blue-400"
            >
              Contact
            </a>

          </nav>

        </div>
      )}

    </header>
  );
};

export default Navbar;