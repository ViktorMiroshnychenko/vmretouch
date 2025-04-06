import { motion } from "framer-motion";
import React from 'react';


function HeroSection() {
  return (
    <section className="relative h-screen bg-background text-text flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-0"></div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold z-10"
      >
        Вітаю у <span className="text-accent">VMRetouch</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-4 text-lg text-text z-10 max-w-xl"
      >
        Ретуш, колоризація, реставрація. Професійна обробка портретів та e-commerce фотографії.
      </motion.p>

      <motion.a
        href="#gallery"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-8 inline-block px-8 py-3 text-base font-semibold rounded-2xl bg-accent text-white hover:bg-secondary transition z-10"
      >
        Переглянути роботи
      </motion.a>
    </section>
  );
}

export default HeroSection;
