'use client';

import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { LeetCodeSection } from '@/components/sections/leetcode-section';
import { ContactSection } from '@/components/sections/ContactSection';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('Portfolio website loaded successfully!');
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <HeroSection />
      
      <AboutSection />
      
      <ProjectsSection />
      
      <LeetCodeSection />
      
      <ContactSection />
    </main>
  );
}
