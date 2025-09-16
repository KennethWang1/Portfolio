'use client';

import { useEffect } from 'react';

const ScrollConstraint = () => {
  useEffect(() => {
    const preventOverScroll = () => {
      // Prevent scrolling above the top of the page
      if (window.scrollY < 0) {
        window.scrollTo(0, 0);
      }
      
      // Also prevent elastic scrolling on mobile devices
      document.body.style.overscrollBehavior = 'none';
    };

    const handleScroll = () => {
      preventOverScroll();
    };

    const handleTouchMove = (e) => {
      // Prevent bouncing/elastic scroll on touch devices
      if (window.scrollY <= 0 && e.touches[0].clientY > e.touches[0].clientY) {
        e.preventDefault();
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    // Initial constraint
    preventOverScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollConstraint;