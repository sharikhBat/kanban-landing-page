'use client';

import { useEffect, useState } from 'react';

export default function ScrollToIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator after scrolling a bit
      if (window.scrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center animate-pulse">
      <div className="text-gray-500 text-sm mb-2 font-medium">Scroll Down</div>
      <svg 
        className="w-6 h-6 text-blue-600 animate-bounce" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19 14l-7 7m0 0l-7-7m7 7V3" 
        />
      </svg>
    </div>
  );
} 