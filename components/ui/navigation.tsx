'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './theme-toggle';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'LeetCode', href: '#leetcode' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setOpen(false); // close mobile menu after click
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border border-white/20 dark:border-white/10' 
          : 'bg-transparent'
      } rounded-full px-6 py-3`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`magnetic-element relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-apple-blue ${
                activeSection === item.href.slice(1) 
                  ? 'text-apple-blue' 
                  : 'text-apple-gray-600 dark:text-apple-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.name}
              {activeSection === item.href.slice(1) && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-apple-blue/10 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
          <ThemeToggle />
        </div>
        {/* Hamburger */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button
            className="ml-2 flex items-center px-3 py-2 rounded text-apple-blue dark:text-white focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 px-4 pb-4 pt-2 shadow-lg border-t border-apple-blue/10 dark:border-apple-blue/20 rounded-2xl mt-2 flex flex-col space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`w-full text-left px-4 py-2 rounded-lg font-semibold text-base transition hover:bg-apple-blue/10 dark:hover:bg-apple-blue/20 ${
                activeSection === item.href.slice(1)
                  ? 'text-apple-blue'
                  : 'text-apple-gray-600 dark:text-apple-gray-300'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
}