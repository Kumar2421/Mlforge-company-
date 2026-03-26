import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/icon.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Docs", href: "/docs" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black border-b border-white/5 h-[76px] flex items-center z-[100]">

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity z-[200]">
          <img src={logo} alt="Exact Logo" className="w-6 h-6 object-contain" />
          <span 
            className="text-white font-inter font-extrabold" 
            style={{ fontSize: '20px', letterSpacing: '-0.05em' }}
          >
            ml forge
          </span>
        </Link>

        {/* Center: Desktop Nav links */}
        <div className="hidden lg:flex items-center space-x-[32px]">
          {navLinks.map((link) => (
            link.name === "Docs" ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-neutral-400 font-inter font-medium text-[14px] hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-400 font-inter font-medium text-[14px] hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            )
          ))}
        </div>

        {/* Right: Action Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 text-[14px]">
          <Link 
            to="/login"
            className="text-[#858585] font-inter font-medium hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link 
            to="/signup"
            className="text-white font-inter font-semibold hover:text-neutral-300 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile: Hamburger Button */}
        <button 
          className="lg:hidden text-white p-2 z-[200] transition-all hover:bg-white/5 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`
          fixed inset-0 bg-black z-[150] flex flex-col pt-[120px] px-8 transition-all duration-300 ease-in-out lg:hidden
          ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}
        `}>
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              link.name === "Docs" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white/70 text-[20px] font-inter font-medium tracking-tight active:text-white hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/70 text-[20px] font-inter font-medium tracking-tight active:text-white hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
            
            <div className="h-[1px] bg-white/10 w-full my-2" />
            
            <Link 
              to="/login"
              className="text-white/70 text-[20px] font-inter font-medium tracking-tight hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
            <Link 
              to="/signup"
              className="text-white text-[16px] font-inter font-bold border border-white/20 py-4 px-6 rounded-xl flex items-center justify-center transition-all bg-white/5 hover:bg-white/10 active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


