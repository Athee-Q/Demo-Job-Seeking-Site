"use client";

import { useState } from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const CONTACT_EMAILS = {
  general: "info@talenthive.com",
  employer: "employer@talenthive.com",
  support: "support@talenthive.com",
  media: "media@talenthive.com",
};

const SOCIAL_LINKS = [
  { href: "https://linkedin.com/company/talenthive", icon: <FaLinkedin className="w-6 h-6"/> },
  { href: "https://twitter.com/talenthive", icon: <FaTwitter className="w-6 h-6"/> },
  { href: "https://facebook.com/talenthive", icon: <FaFacebook className="w-6 h-6"/> },
  { href: "https://instagram.com/talenthive", icon: <FaInstagram className="w-6 h-6"/> },
];

export default function ContactPage() {
  return (
    <div className="grid gap-8 pb-10 transition-colors duration-300 bg-background dark:bg-dark-background text-text dark:text-dark-text">
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

      <section className=" p-6 md:p-8 lg:p-10 dark:bg-dark-background text-text dark:text-dark-text transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          
        >
          <div className="text-4xl text-center font-bold mb-4 text-primary dark:text-dark-primary">
            We&apos;re here to help. Get in touch with us!
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <ContactCard
              title="General Inquiries"
              description="Questions about TalentHive, services, or job opportunities."
              email={CONTACT_EMAILS.general}
            />
            <ContactCard
              title="Employer Partnerships"
              description="Looking to hire top talent? Partner with us."
              email={CONTACT_EMAILS.employer}
            />
            <ContactCard
              title="Technical Support"
              description="Need help with our platform? Reach out."
              email={CONTACT_EMAILS.support}
            />
          </div>
        </motion.div>
      </section>

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
    </div>
  );
}

// --- Components ---

function ContactCard({ title, description, email }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl shadow-md dark:shadow dark:shadow-gray-700 hover:shadow-lg hover:bg-accent/5 dark:hover:bg-dark-accent dark:hover:shadow-xl transition-all bg-white dark:bg-gray-800"
    >
      <div className="text-2xl font-semibold mb-2 text-primary dark:text-dark-primary">
        {title}
      </div>
      <div className="text-base mb-4">{description}</div>
      <Link
        href={`mailto:${email}`}
        className="text-accent dark:text-dark-accent font-bold hover:underline break-words"
      >
        {email}
      </Link>
    </motion.div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form: ", form);
    // TODO: Integrate your backend API here
  };

  return (
    <motion.form
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-white space-y-6 dark:bg-gray-800 p-8 rounded-2xl shadow-md"
    >
      <div className="text-2xl font-bold text-primary dark:text-dark-primary mb-4">
        Send Us a Message
      </div>

      <div className="space-y-4">
        <InputField
          label="Your Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <InputField
          label="Your Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <InputField
          label="Subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
        />
        <TextareaField
          label="Your Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className=" bg-accent dark:bg-dark-accent text-dark-text font-bold py-3 px-6 rounded-lg hover:opacity-90 transition "
      >
        Send Message
      </button>
    </motion.form>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2 font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary"
      />
    </div>
  );
}

function TextareaField({ label, name, value, onChange, required = false }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2 font-semibold">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows="3"
        value={value}
        onChange={onChange}
        required={required}
        className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary resize-none"
      />
    </div>
  );
}

function InfoCard({ icon, title, content }) {
  return (
    <div className="flex items-center justify-start gap-4">
      <div className="text-alert dark:text-dark-alert p-4 bg-alert/5 rounded-lg ">{icon}</div>
      <div className="flex flex-col">
        <h4 className="text-xl text-accent dark:text-dark-accent font-semibold">{title}</h4>
        <p className="text-lg text-text dark:text-dark-text  break-words">{content}</p>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div>
      <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
      <div className="flex gap-4">
        {SOCIAL_LINKS.map(({ href, icon }, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 text-xl text-primary dark:text-dark-primary hover:bg-primary/10 hover:scale-110 transition-transform"
          >
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
