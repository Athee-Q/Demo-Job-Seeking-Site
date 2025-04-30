"use client";
import React from 'react'
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { motion } from 'framer-motion'
import InfoCard from './InfoCard'
import ContactForm from './ContactForm'
import SocialLinks from './SocialLinks'


const CONTACT_EMAILS = {
    general: "info@talenthive.com",
    employer: "employer@talenthive.com",
    support: "support@talenthive.com",
    media: "media@talenthive.com",
  };

const ContactSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 p-6 md:p-8 lg:p-10 gap-10 items-start bg-accent/5 dark:bg-dark-accent/20">
        <ContactForm />

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <InfoCard
            icon={<MdLocationOn className="w-7 h-7" />}
            title="Visit Us"
            content="123 TalentHive Street, TechCity, 560001, India"
          />
          <InfoCard
            icon={<MdEmail className="w-7 h-7" />}
            title="Media & Press"
            content={CONTACT_EMAILS.media}
          />
          <SocialLinks />
        </motion.div>
      </section>
  )
}

export default ContactSection