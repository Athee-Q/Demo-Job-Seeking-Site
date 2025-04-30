import ContactSection from "@/components/contact/ContactSection";
import GetInTouch from "@/components/contact/GetInTouch";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact TalentHive - Connecting Talent and Opportunity</title>
        <meta
          name="description"
          content="Reach out to TalentHive! Contact us with your inquiries, feedback, or partnership opportunities. We're here to help connect talent and opportunity."
        />
      </Head>
      <div className="grid gap-8 pb-10 transition-colors duration-300 bg-background dark:bg-dark-background text-text dark:text-dark-text">
        <ContactHeroSection />
        <GetInTouch />
        <ContactSection />
      </div>
    </>
  );
}
