'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const texts = [
    'Competitive Programmer',
    'Problem Solver',
    'System Design and Networking Explorer',
    'Full Stack Developer'
  ];

  useEffect(() => {
    console.log('HeroSection component mounted');
    
    const currentText = texts[currentIndex];
    let timer: NodeJS.Timeout;

    if (!isFading) {
      if (displayText.length < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 70);
      } else {
        timer = setTimeout(() => {
          setIsFading(true);
        }, 500);
      }
    } else {
      timer = setTimeout(() => {
        setDisplayText('');
        setIsFading(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 35); // fade out duration
    }

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, texts, isFading]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToAbout = () => {
    console.log('Scrolling to about section');
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-apple-gray-50 via-white to-apple-gray-100 dark:from-black dark:via-apple-gray-900 dark:to-apple-gray-800" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-apple-blue/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: i * 4,
            }}
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-4xl md:text-7xl font-bold text-apple-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <br />
            Hi, I'm{' '}
            <span className="text-gradient bg-gradient-to-r from-apple-blue to-apple-green bg-clip-text text-transparent">
              Charuvarthan
            </span>
          </motion.h1>
        </motion.div>

        {/* Animated subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-light text-apple-gray-600 dark:text-apple-gray-300 h-16 flex items-center justify-center">
            I'm a{' '}
            <span className="ml-2 font-medium text-apple-blue relative">
              <span
                style={{
                  transition: 'opacity 0.35s',
                  opacity: isFading ? 0 : 1,
                  display: 'inline-block',
                }}
              >
                {displayText}
                <span className={`text-apple-blue ${showCursor && !isFading ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                  |
                </span>
              </span>
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-apple-gray-500 dark:text-apple-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I bring a strong foundation in data structures, algorithms, and system design, with hands-on experience in building scalable full-stack applications. I thrive on solving real-world problems with high-impact engineering solutions
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { icon: Github, href: 'https://github.com/Charuvarthan', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/charuvarthan-t-7584262b8/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:charuvarthan05@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-element group p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-apple-blue/20 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <Icon className="w-6 h-6 text-apple-gray-600 dark:text-apple-gray-300 group-hover:text-apple-blue transition-colors" />
              <span className="sr-only">{label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="magnetic-element group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{ y: -2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm text-apple-gray-500 dark:text-apple-gray-400 group-hover:text-apple-blue transition-colors">
              Scroll to explore
            </span>
            <ChevronDown className="w-6 h-6 text-apple-gray-400 group-hover:text-apple-blue transition-colors" />
          </motion.div>
        </motion.button>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-apple-orange/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-apple-green/20 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      /> */}
    </section>
  );
}