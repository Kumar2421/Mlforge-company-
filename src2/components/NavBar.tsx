import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'FEATURES', href: '#features' },
    { label: 'HOW IT WORKS', href: '#how-it-works' },
    { label: 'TESTIMONIALS', href: '#testimonials' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'F.A.Q', href: '#faq' },
  ];

  return (
    <nav className="w-full bg-[#f8f8f8] border-b border-black/5 sticky top-0 z-50">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-300">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img src="/icon.jpeg" alt="mlforge studio" className="w-8 h-8 rounded-sm object-cover" />
          <span className="font-medium text-[18.9px] text-[#202020] tracking-tight">mlforge studio</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href}
              className="text-[#5f5f5f] hover:text-[#0a3eff] text-[15.3px] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button variant="primary">Get started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
           <button onClick={() => setIsOpen(!isOpen)} className="text-[#202020]">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-black/5 flex flex-col items-start px-6 py-4 shadow-lg">
           {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#5f5f5f] w-full py-3 border-b border-gray-100 last:border-b-0 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 w-full">
            <Button variant="primary" className="w-full justify-center">Get started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
