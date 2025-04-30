"use client";

import { motion } from "framer-motion";

const sectionTwo = [
  { name: "Empowerment", description: "Providing job seekers with tools..." },
  { name: "Personalization", description: "Tailoring job recommendations..." },
  // Add remaining values...
];

const AboutValuesSection = () => {
  return (
    <section className="text-center w-full mx-auto p-6 md:p-8 lg:p-10 bg-[--color-primary]/10 dark:bg-[--color-dark-primary]/20">
      <motion.div
        className="w-11/12 mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-primary dark:text-dark-primary mb-6"
        >
          Our Values
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sectionTwo.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md dark:shadow-gray-700 hover:shadow-lg dark:hover:shadow-xl transition-all group"
            >
              <div className="text-xl mb-4 text-accent dark:text-dark-accent group-hover:scale-110 transition-transform">
                {section.name}
              </div>
              <div className="text-lg font-semibold text-primary dark:text-dark-primary group-hover:underline">
                {section.description}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutValuesSection;
