import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  highlightWord?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  center = false, 
  highlightWord,
  className = ''
}) => {
  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(highlightWord);
    if (parts.length < 2) return title;
    
    return (
      <>
        {parts[0]}
        <span className="text-primary">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`mb-16 md:mb-20 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-text-primary leading-tight mb-4 tracking-tight">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg text-text-muted max-w-2xl font-light ${center ? 'mx-auto' : ''} leading-relaxed`}>
          {subtitle}
        </p>
      )}
      {/* Minimalist divider */}
      <div className={`h-[1px] w-12 bg-primary mt-8 ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};