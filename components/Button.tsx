import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  children: React.ReactNode;
  fullWidth?: boolean;
  withIcon?: boolean;
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  fullWidth = false, 
  withIcon = false,
  className = '',
  href,
  external,
  ...props 
}) => {
  // Sophisticated base: No heavy focus rings, just color transitions. Sharper corners (rounded-sm or rounded).
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors duration-300 rounded-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed tracking-wide";
  
  const variants = {
    // Flat blue, no shadow. Darkens on hover.
    primary: "bg-primary text-white hover:bg-primary-dark",
    // 1px border, sophisticated look.
    secondary: "bg-transparent text-white border border-white/20 hover:border-primary hover:text-primary",
    // Larger, but flat.
    tertiary: "bg-primary text-white text-lg px-8 py-4 hover:bg-primary-dark",
    // Minimal link style
    ghost: "bg-transparent text-text-muted hover:text-primary hover:bg-white/5",
  };

  const sizes = variant === 'tertiary' ? 'text-lg px-8 py-4' : 'px-6 py-3 text-sm';
  const width = fullWidth ? 'w-full' : '';

  const classes = `${baseStyles} ${variants[variant]} ${sizes} ${width} ${className}`;

  const content = (
    <>
      {children}
      {withIcon && <ArrowRight className="ml-2 w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};