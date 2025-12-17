"use client";

import React from "react";
import { motion } from "framer-motion";

const techStack = [
  { src: "/assets/python.png", name: "Python" },
  { src: "/assets/flutter.png", name: "Flutter" },
  { src: "/assets/docker.svg", name: "Docker" },
  { src: "/assets/java.png", name: "Java" },
  { src: "/assets/nextjs.jpg", name: "Next.js" },
  { src: "/assets/react.png", name: "React" },
  { src: "/assets/tailwind.png", name: "Tailwind CSS" },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};


const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl text-center"
      >
        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-6 tracking-wide"
        >
          About Me
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          I’m <span className="text-white font-semibold">Kalgiswar</span>, a
          passionate Computer Science Engineering student at SRM Ramapuram,
          specializing in{" "}
          <span className="text-white">
            Artificial Intelligence & Machine Learning
          </span>
          . I love turning ideas into impactful tech products — from full-stack
          applications to intelligent AI-driven systems.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6"
        >
          Currently, I’m exploring modern technologies like Python, React,
          Flutter, and AI/ML while building real-world solutions — whether it’s
          facial emotion detection, smart order systems, or futuristic
          military-tech like{" "}
          <span className="text-white font-semibold">HawkSight</span>.
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          variants={container}
          className="mt-16 flex flex-wrap justify-center gap-10 md:gap-14"
        >
          {techStack.map((tech, index) => (
            <motion.div
  key={tech.name}
  variants={fadeUp}
  whileHover={{ scale: 1.12 }}
  animate={{ y: [0, -4, 0] }}
  transition={{
    duration: 2.4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative group cursor-pointer"
>

              <img
                src={tech.src}
                alt={tech.name}
                className="h-10 w-auto drop-shadow-[0_0_0_rgba(255,255,255,0)] group-hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.7)] transition-all duration-300"
              />

              {/* Tooltip */}
              <span
                className="
                  pointer-events-none
                  absolute -bottom-8 left-1/2 -translate-x-1/2
                  whitespace-nowrap
                  text-xs font-medium
                  text-white bg-black/80
                  px-2 py-1 rounded-md
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
              >
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
