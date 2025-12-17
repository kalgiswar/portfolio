"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Progress",
    description:
      "A Flutter-based application designed in Figma with MongoDB backend and Semantic Scholar API integration.",
    image: "/profile.png",
    tech: ["Flutter", "MongoDB", "API"],
  },
  {
    title: "Progress",
    description:
      "A full-stack project focusing on clean UI, scalable backend, and real-world API usage.",
    image: "/profile.png",
    tech: ["React", "Next.js", "Tailwind"],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-32"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-center mb-2"
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-16"
        >
          Projects I worked on — each with its own real-world case study.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={card}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="border border-white/30 rounded-xl p-6 bg-black/40 backdrop-blur"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg border border-white/20 mb-6">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  className="w-full object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Pills */}
              <div className="flex gap-3 flex-wrap">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-1 border border-white/40 rounded-full text-sm text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
