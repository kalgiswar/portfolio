"use client";

import React from "react";
import { motion } from "framer-motion";
import Switch from "./Switch";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-12 px-6"
    >
      {/* PROFILE IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-80 h-80 flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-56 h-56 overflow-hidden z-10 rounded-2xl"
        >
          <img
            src="/profile.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Glow */}
        <div className="absolute inset-0 rounded-full blur-3xl bg-white/5" />
      </motion.div>

      {/* TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-4xl md:text-5xl font-bold text-center max-w-4xl"
      >
        Hi, I&apos;m a{" "}
        <span className="text-red-500">Frontend</span> developer creating modern
        web apps.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="text-lg md:text-xl text-gray-300 text-center max-w-3xl"
      >
        A frontend developer passionate about building modern web applications
        using Next.js, React, and Tailwind CSS — focused on clean UI and smooth
        user experience.
      </motion.p>

      {/* ACTION BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="flex flex-wrap justify-center items-center gap-4 mt-6"
      >
        {/* Get in touch */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-full bg-white text-black font-medium"
        >
          Get in touch
        </motion.button>

        {/* Download Switch */}
        <Switch />

        {/* LinkedIn */}
        <motion.a
          whileHover={{ scale: 1.12 }}
          href="https://www.linkedin.com/in/kalgiswar/"
          target="_blank"
          className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center transition hover:bg-white hover:text-black"
        >
          in
        </motion.a>

        {/* GitHub */}
        <motion.a
          whileHover={{ scale: 1.12 }}
          href="https://github.com/kalgiswar"
          target="_blank"
          className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center transition hover:bg-white hover:text-black"
        >
          ⌂
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;
