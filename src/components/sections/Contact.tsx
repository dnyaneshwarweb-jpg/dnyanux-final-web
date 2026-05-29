"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_psyozvr",
        "template_nswuhyn",
        form,
        "r1ndk0t5P7Pnzk-vK"
      );

      setSuccess("✅ Inquiry Sent Successfully!");

      form.reset();
    } catch (error) {
      console.log(error);
      setSuccess("❌ Failed To Send Inquiry");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-black"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <div className="mb-10 text-center">
            <p className="mb-3 text-cyan-400 font-medium">
              CONTACT US
            </p>

            <h2 className="text-4xl font-bold text-white">
              Let’s Build Something Amazing
            </h2>

            <p className="mt-4 text-gray-400">
              Send your project inquiry and let’s create a premium digital experience.
            </p>
          </div>

          <form onSubmit={sendEmail} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              name="service"
              placeholder="Service Needed"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your project..."
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-cyan-500 py-4 font-semibold text-black transition hover:scale-[1.02]"
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>

            {success && (
              <p className="text-center text-sm text-white">
                {success}
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;