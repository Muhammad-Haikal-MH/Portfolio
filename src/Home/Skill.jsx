import React, { useEffect, useRef } from 'react';

export default function Skill({ direction = 'left', speed = 30, children, className = '' }) {
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);
    
   useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    
    // Clone the content for a seamless loop
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach(item => {
      const duplicate = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicate);
    });
    
    // Adjust animation based on content width
    const scrollerWidth = scrollerRef.current.offsetWidth / 2;
    
    // Apply the animation
    scrollerRef.current.style.animationDuration = `${scrollerWidth / speed}s`;
    scrollerRef.current.style.animationDirection = direction === 'right' ? 'reverse' : 'normal';
  }, [direction, speed]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        ref={scrollerRef}
        className={`flex animate-scroll whitespace-nowrap`}
        style={{
          animationDuration: '30s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {children}
      </div>
    </div>
  );
}
