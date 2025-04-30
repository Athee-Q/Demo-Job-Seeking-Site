"use client";
import React from "react";


const ContactHeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] p-6 md:p-8 lg:p-10 overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-fill z-0"
      >
        <source src="/videos/th-contact.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-[var(--color-text)]/20 dark:bg-[var(--color-dark-background)]/80 z-10" />
    </section>
  );
};

export default ContactHeroSection;
