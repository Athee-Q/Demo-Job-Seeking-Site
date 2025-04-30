"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sectionOne = [
  {
    image: "/images/our-mission.png",
    imgorder: "order-1",
    order: "order-2",
    title: "Our Mission:",
    description: "To revolutionize your job search...",
  },
  {
    image: "/images/about-one.png",
    imgorder: "order-2",
    order: "order-1",
    title: "Empowering Your Career Journey:",
    description: "TalentHive's core mission is to make finding your dream job easier...",
  },
  // Add the remaining items...
];

const AboutSection = () => {
  return (
    <section className="bg-background text-text dark:bg-dark-background dark:text-dark-text p-6 md:p-8 lg:p-10 space-y-10">
      {sectionOne.map((section, index) => (
        <div
          key={index}
          className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${section.imgorder}`}
          >
            <div className="relative rounded-2xl shadow-lg w-full h-96 overflow-hidden">
              <Image src={section.image} alt={section.title} fill />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`space-y-6 ${section.order}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">{section.title}</h2>
            <p className="text-lg text-muted-foreground dark:text-gray-400">
              {section.description}
            </p>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default AboutSection;
