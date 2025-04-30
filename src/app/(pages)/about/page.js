import React from "react";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutSection from "@/components/about/AboutSection";
import AboutTeamSection from "@/components/about/AboutTeamSection";
import AboutValuesSection from "@/components/about/AboutValuesSection";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About TalentHive - Connecting Talent and Opportunity</title>
        <meta
          name="description"
          content="Learn about TalentHive’s mission to empower job seekers and employers. Discover our vision, commitment, and how we are bridging the gap between talent and opportunity with innovation and passion."
        />
      </Head>
      <div className="bg-background dark:bg-dark-background text-text dark:text-dark-text transition-colors duration-300">
        <AboutHeroSection />
        <AboutSection />
        <AboutValuesSection />
        <AboutTeamSection />
      </div>
    </>
  );
};

export default AboutPage;
