'use client';

import { useEffect } from 'react';

export default function ScrollToSection() {
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleNavClick = (e: Event) => {
      e.preventDefault();
      
      // Ensure we're working with an HTMLAnchorElement
      const target = e.currentTarget as HTMLAnchorElement;
      
      if (!target || !target.hash) return;
      
      const targetElement = document.querySelector(target.hash);
      if (!targetElement) return;
      
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
      
      // Smooth scroll animation
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Update URL hash without scrolling
      window.history.pushState({}, '', target.hash);
    };
    
    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });
    
    // Clean up event listeners on component unmount
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);
  
  return null; // This component doesn't render anything
} 