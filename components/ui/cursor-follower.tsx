'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorFollowerProps {
  className?: string;
}

export function CursorFollower({ className }: CursorFollowerProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    console.log('CursorFollower component mounted');
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      console.log('Mouse entered interactive element');
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      console.log('Mouse left interactive element');
      setIsHovering(false);
    };

    // Track mouse movement
    window.addEventListener('mousemove', updateMousePosition);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .magnetic-element'
    );

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Add this for vibrant text on hover
    if (isHovering) {
      document.body.classList.add('cursor-vibrant-text');
    } else {
      document.body.classList.remove('cursor-vibrant-text');
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.body.classList.remove('cursor-vibrant-text');
    };
  }, [isHovering]);

  return (
    <>
      {/* Vibrant animated cursor dot */}
      <motion.div
        className={`fixed w-10 h-10 bg-gradient-to-br from-blue-500 via-cyan-400 to-fuchsia-500 rounded-full pointer-events-none z-[9999] mix-blend-difference shadow-2xl ${className}`}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.7 : 1,
          rotate: isHovering ? 15 : 0,
          boxShadow: isHovering
            ? "0 0 40px 10px #38bdf8, 0 0 80px 20px #a21caf"
            : "0 8px 32px 0 rgba(56,189,248,0.25), 0 2px 8px 0 rgba(168,85,247,0.10)"
        }}
        transition={{
          type: 'tween', // changed from 'spring' to 'tween' for instant movement
          ease: 'linear',
          duration: 0, // no delay, follows cursor instantly
        }}
        style={{
          background: "linear-gradient(135deg, #38bdf8 0%, #a21caf 100%)",
          filter: "blur(0.5px)",
        }}
      />

      {/* Animated vibrant ring */}
      <motion.div
        className="fixed w-20 h-20 border-4 border-fuchsia-400/40 rounded-full pointer-events-none z-[9998] transition"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          scale: isHovering ? 1.2 : 1,
          rotate: isHovering ? -10 : 0,
          borderColor: isHovering ? "#38bdf8" : "#a21caf",
          opacity: isHovering ? 0.7 : 0.4,
        }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0,
        }}
        style={{
          boxShadow: "0 0 32px 0 #a21caf44, 0 0 16px 0 #38bdf844"
        }}
      />
    </>
  );
}