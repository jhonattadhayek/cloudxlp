import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'primary' | 'secondary' | 'tertiary';
  enableReveal?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children,
  background = 'primary',
  enableReveal = true
}) => {
  const bgColors = {
    primary: 'bg-bg-primary',
    secondary: 'bg-bg-secondary',
    tertiary: 'bg-bg-tertiary',
  };

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enableReveal) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px 0px -50px 0px' 
      } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [enableReveal]);

  const animationClasses = enableReveal 
    ? `transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`
    : '';

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 md:py-24 lg:py-32 px-6 relative overflow-hidden ${bgColors[background]} ${className}`}
    >
      <div className={`max-w-[1200px] mx-auto relative z-10 ${animationClasses}`}>
        {children}
      </div>
    </section>
  );
};