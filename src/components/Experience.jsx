"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    logo: "/assets/ssn.webp",
    org: "SSN College – Code & Craft",
    role: "Frontend Competition",
    date: "2025",
    desc: "I participated in the Code & Craft Frontend Competition and received a Special Mention Award.",
  },
  {
    logo: "/assets/1stop.webp",
    org: "1Stop . AI (Online)",
    role: "Machine Learning Internship",
    date: "01 Mar – 30 Apr · 2025",
    desc: "This journey enhanced my skills in data preprocessing, model training, and evaluation, making me more passionate about AI.",
  },
  {
    logo: "/assets/hindustan.jpg",
    org: "Hindustan Institute of Technology",
    role: "National-Level 24-Hour Hackathon",
    date: "2025",
    desc: "Our team competed among 140+ teams across India. 🏆 Internship Offer – Smint TIQ Private Limited.",
  },
  {
    logo: "/assets/smint.webp",
    org: "Smint TIQ Private Limited, Chennai",
    role: "Offline Internship",
    date: "2025",
    desc: "Internship Offer – Smint TIQ Private Limited. Domain: Design & Development of Embedded Systems using Communication Protocols.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white py-32"
    >
      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-center mb-3"
        >
          My Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-16"
        >
          Professional experience that I have accumulated over several years.
        </motion.p>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative border-l border-gray-700 ml-4 space-y-16"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative pl-10"
            >
              {/* Dot */}
              <span className="absolute -left-[9px] top-2 w-4 h-4 bg-white rounded-full" />

              {/* Org */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-white/10 border border-white/10">
                  <img
                    src={exp.logo}
                    alt={exp.org}
                    className="max-w-[70%] max-h-[70%] object-contain"
                  />
                </div>

                <h3 className="text-lg font-semibold">
                  {exp.org}
                </h3>
              </div>

              {/* Role */}
              <h4 className="text-xl font-medium mb-1">
                {exp.role}
              </h4>

              {/* Date */}
              <p className="text-sm text-gray-400 mb-3">
                📅 {exp.date}
              </p>

              {/* Description */}
              <p className="text-gray-400 max-w-xl">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
