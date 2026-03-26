import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'light' | 'outline';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  icon = <ArrowRight className="w-4 h-4" />, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-4 px-4 py-2.5 transition-colors duration-200";
  
  const variants = {
    primary: "bg-[#0a3eff] hover:bg-[#0831cc] text-[#f8f8f8]",
    secondary: "bg-[#10296e] hover:bg-[#0c1f54] text-[#f8f8f8]",
    light: "bg-[#f8f8f8] border border-gray-200 hover:bg-white text-[#0a3eff]",
    outline: "bg-transparent border border-white/20 hover:bg-white/10 text-white"
  };

  const IconWrapper = ({ children, isLight }: { children: React.ReactNode; isLight: boolean }) => (
    <div className={`flex items-center justify-center w-6 h-6 rounded-full ${isLight ? 'bg-[#0a3eff] text-white' : 'bg-[#f8f8f8] text-black'}`}>
      {children}
    </div>
  );

  const isLight = variant === 'light' || variant === 'outline';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="font-medium text-[15px]">{children}</span>
      <IconWrapper isLight={isLight}>
        {icon || <ArrowRight className="w-3 h-3" />}
      </IconWrapper>
    </button>
  );
};
