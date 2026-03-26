import { Link } from 'react-router-dom';
import logo from '../assets/icon.png';

const Navbar = () => {
  const navLinks = [
    { name: "Features", href: "/#features" },
    // { name: "Use cases", href: "/#use-cases" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Docs", href: "/docs" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/5 h-[76px] flex items-center z-[100]">
      <div className="w-full max-w-[1920px] mx-auto px-20 grid grid-cols-3 items-center">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center space-x-4 pl-4 justify-start hover:opacity-80 transition-opacity">
          <img src={logo} alt="Exact Logo" className="w-6 h-6 object-contain" />
          <span 
            className="text-white font-inter font-extrabold" 
            style={{ fontSize: '20px', letterSpacing: '-0.05em' }}
          >
            ml forge
          </span>
        </Link>



        {/* Center: Nav links */}
        <div className="hidden lg:flex items-center justify-center space-x-[32px]">
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


        {/* Right: Action Button */}
        <div className="flex items-center justify-end gap-8">
          <Link 
            to="/login"
            className="text-[#858585] font-inter font-medium text-[14px] hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link 
            to="/signup"
            className="text-white font-inter font-semibold text-[14px] hover:text-neutral-300 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
