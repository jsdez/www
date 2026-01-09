'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BlogsSection() {
  return (
    <section
      id="blogs"
      className="w-full bg-white dark:bg-secondaryBlack py-16 md:py-20 lg:py-24 border-t-4 border-border dark:border-darkBorder"
    >
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">Blog Posts</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights on solutions engineering, automation, and modern SaaS platforms
          </p>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center py-20"
        >
          <div className="inline-block bg-teal-300 dark:bg-main border-4 border-border dark:border-darkBorder rounded-base p-12 shadow-shadow" style={{boxShadow: 'var(--shadow)'}}>
            <h3 className="text-3xl md:text-4xl font-heading mb-4 text-black dark:text-white">
              Coming Soon! 🚀
            </h3>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Exciting blog content is on its way.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
