"use client";

import { motion } from "framer-motion";

const AboutHeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] p-6 md:p-8 lg:p-10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/th-about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-[var(--color-text)]/20 dark:bg-[var(--color-dark-background)]/80 z-10" />

      <div className="relative z-20 flex flex-col items-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-[var(--color-dark-primary)] dark:text-[var(--color-primary)] mb-6"
        >
          More Than Just a Job Board. We&apos;re Your Partners in Progress.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-[var(--color-dark-text)] mb-8 max-w-2xl"
        >
          At TalentHive, we&apos;re driven by a clear purpose: to connect talented individuals with the opportunities they deserve...
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
