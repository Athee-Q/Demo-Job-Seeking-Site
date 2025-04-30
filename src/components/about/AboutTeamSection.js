"use client";

import Link from "next/link";

const AboutTeamSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-20 text-center bg-background text-text dark:bg-dark-background dark:text-dark-text">
      <div className="max-w-5xl mx-auto">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary dark:text-dark-primary">
          Meet the TalentHive Team
        </div>
        <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
          Behind TalentHive is a passionate and experienced team...
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
          We are more than just a job board; we are your partner in career success.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-4 px-6 py-3 bg-primary dark:bg-dark-primary text-white rounded-xl font-semibold shadow-md hover:opacity-90 transition-all duration-200"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default AboutTeamSection;
