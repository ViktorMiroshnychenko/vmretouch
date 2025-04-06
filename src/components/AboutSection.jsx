import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#121212] text-[#F4F4F4] py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#E94560] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Про мене
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed text-[#CCCCCC]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Привіт! Мене звати Віктор Мірошниченко, я спеціаліст з ретуші з фокусом на
          портретну обробку, колоризацію, e-commerce та реставрацію фотографій. 
          Я поєдную художній підхід із технічною точністю, щоб створити зображення, 
          які виглядають природно, професійно та емоційно.
        </motion.p>
        <motion.p
          className="text-lg leading-relaxed text-[#CCCCCC] mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Моя мета — показати красу кожної людини, зберігаючи автентичність і
          природність. Працюю з фотографами, студіями та брендами, щоб вивести
          їхні зображення на новий рівень.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
