"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext"; // Assuming you have ThemeContext
import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  const { theme } = useTheme();

  const sectionOne = [
    {
      image: "/images/our-mission.png",
      imgorder: "order-1",
      order: "order-2",
      title: "Our Mission:",
      description:
        " To revolutionize your job search. We simplify the process, personalize your experience, and connect you directly with opportunities at leading companies. At TalentHive, we empower you with the tools and resources needed to achieve your career goals and build meaningful professional connections.",
    },
    {
      image: "/images/about-one.png",
      imgorder: "order-2",
      order: "order-1",
      title: "Empowering Your Career Journey:",
      description:
        "TalentHive's core mission is to make finding your dream job easier and more tailored to you. We connect you with top employers and provide the essential resources for your success. Beyond just placements, we aim to foster lasting professional relationships that support your growth.",
    },
    {
      image: "/images/about-two.png",
      imgorder: "order-1",
      order: "order-2",
      title: "Connecting Talent with Opportunity, Effortlessly:",
      description:
        "At TalentHive, our mission is clear: to bridge the gap between talented individuals and leading companies. We simplify the complexities of the job search through a personalized experience, equipping you with the resources to thrive and build enduring professional connections.",
    },
    {
      image: "/images/about-three.png",
      imgorder: "order-2",
      order: "order-1",
      title: "Driven by Your Success:",
      description:
        "TalentHive is on a mission to transform the job search. We're committed to simplifying the process and personalizing your journey to connect you with exciting opportunities at top-tier companies. We empower you with the insights, tools, and support you need to not only land your next role but also cultivate lasting professional relationships that will benefit your career long-term.",
    },
  ];
  const sectionTwo = [
    {
      name: "Empowerment",
      description:
        "Providing job seekers with tools, information, and support to navigate their career journeys confidently.",
    },
    {
      name: "Personalization",
      description:
        "Tailoring job recommendations and resources to align with individual skills, experiences, and career goals.",
    },
    {
      name: "Transparency",
      description:
        "Maintaining open and honest communication about job opportunities and the hiring process.",
    },
    {
      name: "Innovation",
      description:
        "Continuously evolving and leveraging new technologies to enhance the job search experience.",
    },
    {
      name: "Collaboration",
      description:
        "Partnering with job seekers and employers to create successful, meaningful matches.",
    },
    {
      name: "Integrity",
      description:
        "Upholding the highest ethical standards, ensuring fairness and respect in all interactions.",
    },
  ];

  return (
    <div className="bg-background dark:bg-dark-background text-text dark:text-dark-text transition-colors duration-300">
      <section className="relative flex items-center justify-center min-h-[80vh] p-6 md:p-8 lg:p-10 overflow-hidden">
        {/* 🔹 Background Video */}
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

        {/* 🔹 Overlay */}
        <div className="absolute inset-0 bg-[var(--color-text)]/20 dark:bg-[var(--color-dark-background)]/80 z-10" />

        {/* 🔹 Foreground Content */}
        <div className="relative z-20 flex flex-col items-center text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-[var(--color-dark-primary)] dark:text-[var(--color-primary-primary)] mb-6"
          >
            More Than Just a Job Board. We&apos;re Your Partners in Progress.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-[var(--color-dark-text)] mb-8 max-w-2xl"
          >
            At TalentHive, we&apos;re driven by a clear purpose: to connect talented
            individuals with the opportunities they deserve. We believe that
            finding the right job is a pivotal moment, and we&apos;re here to make
            that journey seamless, personalized, and ultimately successful.
          </motion.p>
        </div>
      </section>
      <section className="bg-background text-text dark:bg-dark-background dark:text-dark-text p-6 md:p-8 lg:p-10 space-y-10">
        {sectionOne.map((section, index) => (
          <div key={index} className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`${section.imgorder}`}
            >
              <div
                className={`relative rounded-2xl shadow-lg w-full h-96 overflow-hidden `}
              >
                <Image src={section.image} alt="Team Collaborating" fill />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`space-y-6 ${section.order}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {section.title}
              </h2>
              <p className="text-lg text-muted-foreground dark:text-gray-400">
                {section.description}
              </p>
            </motion.div>
          </div>
        ))}
      </section>
      {/* <div className="min-h-screen py-12 px-6 lg:px-24 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300"> */}
      <section className="text-center w-full mx-auto p-6 md:p-8 lg:p-10 bg-(--color-primary)/10 dark:bg-(--color-dark-primary)/20 inset-shadow-sm ">
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
                className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md dark:shadow dark:shadow-gray-700 hover:shadow-lg dark:hover:shadow-xl transition-all group"
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

      <section className="w-full px-4 sm:px-6 lg:px-20 py-20 text-center bg-background text-text dark:bg-dark-background dark:text-dark-text transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary dark:text-dark-primary">
            Meet the TalentHive Team
          </div>

          <div className="text-base sm:text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            Behind TalentHive is a passionate and experienced team spanning
            recruitment, HR technology, career coaching, and data science. Our
            deep understanding of industry trends and commitment to user-centric
            design help us build a platform that&apos;s effective, intuitive, and
            constantly evolving.
          </div>

          <div className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
            We are more than just a job board; we are your partner in career
            success.
          </div>

          <Link
            href="/contact"
            className="inline-block mt-4 px-6 py-3 bg-primary dark:bg-dark-primary text-white rounded-xl font-semibold shadow-md hover:opacity-90 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
