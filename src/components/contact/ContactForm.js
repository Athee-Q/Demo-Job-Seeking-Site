"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
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