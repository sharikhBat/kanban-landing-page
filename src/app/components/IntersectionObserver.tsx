'use client';

import { useEffect } from 'react';

export default function SectionAnimator() {
  useEffect(() => {
    // Function to handle intersection observations
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        // Add animation classes when the section comes into view
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          
          // Once the animation is complete, we can stop observing this element
          // This is optional - remove this line if you want the animation to replay when scrolling up
          // observer.unobserve(entry.target);
        }
      });
    };
    
    // Setup the intersection observer
    const options = {
      root: null, // use the viewport
      rootMargin: '0px',
      threshold: 0.1, // trigger when 10% of the element is visible
    };
    
    // Check if we're in a browser environment before creating the observer
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(handleIntersect, options);
      
      // Target all section elements
      const sections = document.querySelectorAll('section');
      
      // Add initial classes and observe each section
      sections.forEach(section => {
        // Add transition classes
        section.classList.add('section-transition');
        
        // Add initial state classes (invisible and shifted down)
        section.classList.add('opacity-0', 'translate-y-8');
        
        // Start observing
        observer.observe(section);
      });
      
      // Clean up on component unmount
      return () => {
        sections.forEach(section => {
          observer.unobserve(section);
        });
      };
    }
  }, []);
  
  return null; // This component doesn't render anything
} 