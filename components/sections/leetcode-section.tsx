'use client';

import { motion } from 'framer-motion';

export function LeetCodeSection() {
  return (
    <section id="leetcode" className="py-20 px-6 bg-apple-gray-50 dark:bg-apple-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-800 dark:text-white mb-6">
            LeetCode{' '}
            <span className="text-gradient bg-gradient-to-r from-apple-blue to-apple-green bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-lg text-apple-gray-600 dark:text-apple-gray-300 max-w-2xl mx-auto">
            Consistent problem-solving and algorithm practice. Here's my coding journey.
          </p>
        </motion.div>

        {/* LeetCode profile link */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center items-center my-20"
        >
          <a
            href="https://leetcode.com/Charuvarthan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-apple-blue hover:bg-apple-green text-white rounded-2xl font-semibold text-xl shadow-lg transition-all duration-300"
          >
            <svg width="28" height="28" viewBox="0 0 50 50" fill="none" className="inline-block">
              <rect width="50" height="50" rx="10" fill="#FFA116"/>
              <path d="M15 35L35 15M15 15h20v20" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Visit My LeetCode Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}