'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './theme-toggle';

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

  useEffect(() => {
    console.log('Navigation component mounted');

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
        console.log('Active section:', currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    console.log('Scrolling to section:', href);
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-6">
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
              
              {/* Active indicator */}
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
        </div>
        
        <div className="w-px h-6 bg-apple-gray-300 dark:bg-apple-gray-600" />
        
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}