'use client';

import { useEffect } from 'react';

export default function SmoothReveal() {
  useEffect(() => {
    // Function to handle intersection observations for staggered animations
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get all child items that need staggered animation
          const items = entry.target.querySelectorAll('.reveal-item');
          
          // Animate each item with a delay
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('opacity-100', 'translate-y-0');
              item.classList.remove('opacity-0', 'translate-y-4');
            }, 100 * index); // 100ms delay between each item
          });
          
          // Once the animation is done, unobserve
          observer.unobserve(entry.target);
        }
      });
    };
    
    // Setup the intersection observer
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(handleIntersect, options);
      
      // Select containers that have staggered items
      const containers = document.querySelectorAll('.reveal-container');
      
      // Initialize all staggered items with starting classes
      document.querySelectorAll('.reveal-item').forEach(item => {
        item.classList.add('transition-all', 'duration-500', 'ease-out', 'opacity-0', 'translate-y-4');
      });
      
      // Observe each container
      containers.forEach(container => {
        observer.observe(container);
      });
      
      // Clean up on component unmount
      return () => {
        containers.forEach(container => {
          observer.unobserve(container);
        });
      };
    }
  }, []);
  
  return null;
} 