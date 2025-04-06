import React from 'react';

// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-[url('/bg-texture.png')] bg-cover">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-light-blue text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Arthur Felipe De Sousa Chaves
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-text-light mt-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Desenvolvedor Back-end apaixonado por tecnologia
      </motion.p>
    </section>
  );
}