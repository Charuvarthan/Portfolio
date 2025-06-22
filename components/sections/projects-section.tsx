'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// Color palette for accent bars and badges
const accentColors = [
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-400',
  'bg-orange-500',
  'bg-pink-500',
  'bg-purple-500',
  'bg-red-500',
  'bg-teal-500',
];

export function ProjectsSection() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Charuvarthan/repos')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
      });
  }, []);

  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
  );

  return (
    <section id="projects" className="py-20 px-6 bg-apple-gray-50 dark:bg-apple-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-800 dark:text-white mb-6">
            Featured{' '}
            <span className="text-gradient bg-gradient-to-r from-apple-blue to-apple-green bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-apple-gray-600 dark:text-apple-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {sortedProjects.slice(0, 2).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="magnetic-element group bg-white/90 dark:bg-apple-gray-900/90 rounded-3xl overflow-hidden shadow-xl transition-all duration-500 border-2 border-transparent hover:border-apple-blue relative"
            >
              {/* Accent bar */}
              <div className={`absolute left-0 top-0 h-full w-2 ${accentColors[index % accentColors.length]} rounded-l-2xl`} />
              <div className="p-8 pl-8">
                <h3 className="text-2xl font-bold text-apple-gray-800 dark:text-white mb-3">
                  {project.name}
                </h3>
                <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.language && (
                    <span
                      className={`px-3 py-1 ${accentColors[index % accentColors.length]} text-white rounded-full text-sm font-medium`}
                    >
                      {project.language}
                    </span>
                  )}
                </div>
                <div className="flex space-x-2 mt-4">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic-element p-2 bg-white/30 rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4 text-apple-blue" />
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="magnetic-element p-2 bg-white/30 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-apple-blue" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="magnetic-element group bg-white/90 dark:bg-apple-gray-900/90 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border-2 border-transparent hover:border-apple-blue relative"
            >
              {/* Accent bar */}
              <div className={`absolute left-0 top-0 h-full w-2 ${accentColors[index % accentColors.length]} rounded-l-2xl`} />
              <div className="p-6 pl-8">
                <h3 className="text-xl font-bold text-apple-gray-800 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.language && (
                    <span className={`px-2 py-1 ${accentColors[index % accentColors.length]} text-white rounded text-xs font-medium`}>
                      {project.language}
                    </span>
                  )}
                </div>
                <div className="flex space-x-2 mt-4">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic-element p-2 bg-white/30 rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4 text-apple-blue" />
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="magnetic-element p-2 bg-white/30 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-apple-blue" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Charuvarthan"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-element inline-flex items-center space-x-2 px-8 py-4 bg-apple-blue hover:bg-blue-600 text-white rounded-2xl font-semibold transition-all duration-300 apple-shadow hover:apple-shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}