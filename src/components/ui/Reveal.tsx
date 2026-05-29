"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
};

const Reveal = ({ children }: RevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;