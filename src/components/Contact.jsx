"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-32"
    >
      <div className="max-w-3xl w-full">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-center mb-2"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-14"
        >
          Feel free to reach out directly at{" "}
          <span className="text-white font-medium">
            kalgiswar@gmail.com
          </span>{" "}
          or send a message using the form below.
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="hello@gmail.com"
              className="
                w-full bg-transparent
                border border-white/30
                rounded-xl px-4 py-3
                outline-none
                text-white
                placeholder-gray-500
                focus:border-white
                transition
              "
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Message
            </label>
            <textarea
              rows={6}
              placeholder="Hey Kalgiswar, I loved your portfolio..."
              className="
                w-full bg-transparent
                border border-white/30
                rounded-xl px-4 py-3
                outline-none
                text-white
                placeholder-gray-500
                focus:border-white
                resize-none
                transition
              "
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-4">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-8 py-3
                rounded-full
                bg-white text-black
                font-medium
                transition
              "
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
