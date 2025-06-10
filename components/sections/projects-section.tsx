'use client';

// import { motion } from 'framer-motion';
// import { ExternalLink, Github, Play } from 'lucide-react';
// import { useState } from 'react';

// const projects = [
//   {
//     id: 1,
//     title: 'E-Commerce Platform',
//     description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
//     image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
//     tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
//     github: 'https://github.com',
//     demo: 'https://demo.com',
//     color: 'from-apple-blue to-blue-600',
//     featured: true,
//   },
//   {
//     id: 2,
//     title: 'AI Task Manager',
//     description: 'Smart task management app with AI-powered prioritization and natural language processing for task creation.',
//     image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
//     tags: ['Next.js', 'OpenAI', 'TypeScript', 'Prisma', 'PostgreSQL'],
//     github: 'https://github.com',
//     demo: 'https://demo.com',
//     color: 'from-apple-green to-green-600',
//     featured: true,
//   },
//   {
//     id: 3,
//     title: 'Real-time Chat App',
//     description: 'Modern chat application with real-time messaging, file sharing, and video calls.',
//     image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
//     tags: ['React', 'Socket.io', 'WebRTC', 'Express', 'Redis'],
//     github: 'https://github.com',
//     demo: 'https://demo.com',
//     color: 'from-apple-orange to-orange-600',
//   },
//   {
//     id: 4,
//     title: 'Portfolio Website',
//     description: 'This very website! Built with Next.js, Framer Motion, and Tailwind CSS.',
//     image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
//     tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
//     github: 'https://github.com',
//     demo: 'https://demo.com',
//     color: 'from-purple-500 to-pink-600',
//   },
//   {
//     id: 5,
//     title: 'Weather Dashboard',
//     description: 'Beautiful weather app with detailed forecasts, interactive maps, and location-based alerts.',
//     image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
//     tags: ['Vue.js', 'Weather API', 'Chart.js', 'PWA'],
//     github: 'https://github.com',
//     demo: 'https://demo.com',
//     color: 'from-cyan-500 to-blue-600',
//   },
//   {
//     id: 6,
//     title: 'Fitness Tracker',
//     description: 'Comprehensive fitness tracking app with workout plans, progress monitoring, and social features.',
//     image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
//     tags: ['React Native', 'Firebase', 'Health Kit', 'Charts'],
//     github: 'https://github.com',
//     demo: 'https://demo.com',
//     color: 'from-red-500 to-pink-600',
//   },
// ];

// export function ProjectsSection() {
//   const [hoveredProject, setHoveredProject] = useState<number | null>(null);

//   return (
//     <section id="projects" className="py-20 px-6 bg-apple-gray-50 dark:bg-apple-gray-900">
//       <div className="max-w-7xl mx-auto">
//         {/* Section header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-apple-gray-800 dark:text-white mb-6">
//             Featured{' '}
//             <span className="text-gradient bg-gradient-to-r from-apple-blue to-apple-green bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>
//           <p className="text-lg text-apple-gray-600 dark:text-apple-gray-300 max-w-2xl mx-auto">
//             A collection of projects that showcase my skills and passion for creating innovative solutions.
//           </p>
//         </motion.div>

//         {/* Featured projects */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-16">
//           {projects.filter(p => p.featured).map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               whileHover={{ y: -10 }}
//               onHoverStart={() => setHoveredProject(project.id)}
//               onHoverEnd={() => setHoveredProject(null)}
//               className="magnetic-element group"
//             >
//               <div className="bg-white dark:bg-apple-gray-800 rounded-3xl overflow-hidden apple-shadow-lg hover:apple-shadow-xl transition-all duration-500">
//                 {/* Project image */}
//                 <div className="relative overflow-hidden h-64">
//                   <motion.div
//                     className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}
//                     animate={{
//                       opacity: hoveredProject === project.id ? 0.7 : 0.9,
//                     }}
//                     transition={{ duration: 0.3 }}
//                   />
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover"
//                   />
                  
//                   {/* Overlay with links */}
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ 
//                       opacity: hoveredProject === project.id ? 1 : 0,
//                     }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute inset-0 flex items-center justify-center space-x-4"
//                   >
//                     <motion.a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="magnetic-element p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Github className="w-6 h-6 text-white" />
//                     </motion.a>
//                     <motion.a
//                       href={project.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="magnetic-element p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors"
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <ExternalLink className="w-6 h-6 text-white" />
//                     </motion.a>
//                   </motion.div>
//                 </div>

//                 {/* Project content */}
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold text-apple-gray-800 dark:text-white mb-3">
//                     {project.title}
//                   </h3>
                  
//                   <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-6 leading-relaxed">
//                     {project.description}
//                   </p>
                  
//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag, tagIndex) => (
//                       <motion.span
//                         key={tag}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.3, delay: tagIndex * 0.05 }}
//                         className="px-3 py-1 bg-apple-gray-100 dark:bg-apple-gray-700 text-apple-gray-700 dark:text-apple-gray-300 rounded-full text-sm font-medium"
//                       >
//                         {tag}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Other projects grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.filter(p => !p.featured).map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -5, scale: 1.02 }}
//               onHoverStart={() => setHoveredProject(project.id)}
//               onHoverEnd={() => setHoveredProject(null)}
//               className="magnetic-element group"
//             >
//               <div className="bg-white dark:bg-apple-gray-800 rounded-2xl overflow-hidden apple-shadow hover:apple-shadow-lg transition-all duration-300">
//                 {/* Project image */}
//                 <div className="relative overflow-hidden h-48">
//                   <motion.div
//                     className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}
//                     animate={{
//                       opacity: hoveredProject === project.id ? 0.7 : 0.9,
//                     }}
//                     transition={{ duration: 0.3 }}
//                   />
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover"
//                   />
                  
//                   {/* Quick action buttons */}
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ 
//                       opacity: hoveredProject === project.id ? 1 : 0,
//                     }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute top-4 right-4 flex space-x-2"
//                   >
//                     <motion.a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="magnetic-element p-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition-colors"
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Github className="w-4 h-4 text-white" />
//                     </motion.a>
//                     <motion.a
//                       href={project.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="magnetic-element p-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition-colors"
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <ExternalLink className="w-4 h-4 text-white" />
//                     </motion.a>
//                   </motion.div>
//                 </div>

//                 {/* Project content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-apple-gray-800 dark:text-white mb-2">
//                     {project.title}
//                   </h3>
                  
//                   <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
//                     {project.description}
//                   </p>
                  
//                   {/* Tags - showing first 3 */}
//                   <div className="flex flex-wrap gap-1">
//                     {project.tags.slice(0, 3).map((tag, tagIndex) => (
//                       <span
//                         key={tag}
//                         className="px-2 py-1 bg-apple-gray-100 dark:bg-apple-gray-700 text-apple-gray-700 dark:text-apple-gray-300 rounded text-xs font-medium"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                     {project.tags.length > 3 && (
//                       <span className="px-2 py-1 text-apple-gray-500 dark:text-apple-gray-400 text-xs">
//                         +{project.tags.length - 3}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Call to action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mt-16"
//         >
//           <motion.a
//             href="https://github.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="magnetic-element inline-flex items-center space-x-2 px-8 py-4 bg-apple-blue hover:bg-blue-600 text-white rounded-2xl font-semibold transition-all duration-300 apple-shadow hover:apple-shadow-lg"
//             whileHover={{ scale: 1.05, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Github className="w-5 h-5" />
//             <span>View All Projects on GitHub</span>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  const [projects, setProjects] = useState<any[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Charuvarthan/repos')
      .then(res => res.json())
      .then(data => {
        // Optionally filter, sort, or map data to match your UI needs
        setProjects(data);
      });
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-apple-gray-50 dark:bg-apple-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section header ... */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, type: "spring" }}
              whileHover={{ y: -16, scale: 1.04, boxShadow: "0 12px 40px 0 rgba(52,211,153,0.10)" }}
              className="relative group rounded-3xl overflow-hidden apple-shadow-lg bg-white/60 dark:bg-apple-gray-900/60 backdrop-blur-xl border border-white/30 dark:border-apple-gray-700/40 transition-all duration-300"
              style={{ minHeight: 340 }}
            >
              {/* Animated blurred gradient blob */}
              <motion.div
                className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-apple-blue/30 to-apple-green/30 blur-3xl z-0"
                animate={{
                  x: [0, 40, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Project content */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-apple-gray-800 dark:text-white mb-2 text-center">
                  {project.name}
                </h3>
                <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-4 text-center text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {(project.topics?.length
                    ? project.topics
                    : [project.language].filter(Boolean)
                  ).map((tag: string, tagIndex: number) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: tagIndex * 0.05 }}
                      className="px-3 py-1 bg-apple-gray-100 dark:bg-apple-gray-700 text-apple-gray-700 dark:text-apple-gray-300 rounded-full text-xs font-medium shadow"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                {/* Action buttons */}
                <div className="flex justify-center gap-4 mt-auto">
                  <motion.a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic-element px-5 py-2 bg-apple-blue/90 hover:bg-apple-blue text-white rounded-full font-semibold shadow transition-all"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    title="View on GitHub"
                  >
                    GitHub
                  </motion.a>
                  {/* {project.homepage && (
                    <motion.a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="magnetic-element px-5 py-2 bg-apple-green/90 hover:bg-apple-green text-white rounded-full font-semibold shadow transition-all"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                      title="Live Demo"
                    >
                      Live Demo
                    </motion.a> */}
                  {/* )} */}
                </div>
                {/* Subtle glass overlay for extra effect */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-3xl bg-white/10 dark:bg-apple-gray-800/10 transition-all duration-300 backdrop-blur-sm group-hover:backdrop-blur-0"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}