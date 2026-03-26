import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    text: "I gave @mlforge a try today and I was positively impressed! Very quick setup to get a working remote database with API access and documentation generated automatically for you ✌️ 10/10 will play more",
    author: "@razvanilin",
    role: "ML Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=razvan"
  },
  {
    text: "Okay, I finally tried mlforge today and wow... why did I wait so long? Went from 'how do I even start' to having a working deterministic model in like 20 minutes. Sometimes the hype is actually justified! #mlforge",
    author: "@Aliahsan_sfv",
    role: "ML Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alia"
  }
];

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen bg-white flex font-inter selection:bg-[#3ECF8E]/30 overflow-hidden">
      {/* Left Section: Form Area */}
      <div className="w-full lg:w-[480px] xl:w-[540px] flex flex-col p-8 lg:p-12 relative z-10 bg-white border-r border-[#E5E7EB]">
        {/* Logo */}
        <div className="absolute top-10 left-10 lg:left-12 shrink-0">
          <Link to="/" className="flex items-center gap-2.5">
             <div className="flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="6" fill="#111827"/>
                  <circle cx="9" cy="12" r="2" fill="#3ECF8E"/>
                  <circle cx="15" cy="12" r="2" fill="#3ECF8E"/>
                </svg>
             </div>
             <span className="text-black font-bold text-[20px] tracking-tight">ml forge</span>
          </Link>
        </div>

        {/* Centered Content Container */}
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-[360px] animate-in fade-in slide-in-from-bottom-2 duration-500">
            {children}
          </div>
        </div>

        {/* Footer info - moved to bottom of centered stack if possible or kept here */}
        <div className="absolute bottom-10 left-10 right-10 lg:left-12 lg:right-12 text-center lg:text-left">
           <p className="text-[#9CA3AF] text-[11px] leading-relaxed">
            By continuing, you agree to ml forge's <Link to="/" className="underline hover:text-black transition-colors">Terms of Service</Link> and <Link to="/" className="underline hover:text-black transition-colors">Privacy Policy</Link>.
          </p>
        </div>
      </div>

      {/* Right Section: Testimonial & Showcase */}
      <div className="hidden lg:flex flex-1 bg-white items-center justify-center p-20 relative overflow-hidden">
        {/* Fixed Documentation Access */}
        <button className="absolute top-8 right-8 flex items-center gap-2 py-1.5 px-3.5 bg-white border border-[#E5E7EB] rounded-md text-[#374151] text-[12px] font-semibold hover:bg-[#F9FAFB] transition-colors shadow-sm">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          Documentation
        </button>

        <div className="max-w-[540px] relative">
          <div className="absolute -top-16 -left-12 text-[#F3F4F6]">
             <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
               <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H16.017C14.9124 7 14.017 7.89543 14.017 9V11C14.017 12.1046 13.1216 13 12.017 13H11.017V21H14.017ZM5.01701 21L5.01701 18C5.01701 16.8954 5.91245 16 7.01701 16H10.017C11.1216 16 12.017 15.1046 12.017 14V9C12.017 7.89543 11.1216 7 10.017 7H7.01701C5.91245 7 5.01701 7.89543 5.01701 9V11C5.01701 12.1046 4.12157 13 3.01701 13H2.01701V21H5.01701Z" />
             </svg>
          </div>

          <div
            key={testimonialIndex}
            className="relative z-10 animate-in fade-in duration-700 ease-out"
          >
            <p className="text-[#111827] text-[28px] lg:text-[36px] font-medium leading-[1.3] tracking-tight mb-12 min-h-[160px]">
              {testimonials[testimonialIndex].text}
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E5E7EB] bg-white">
                <img 
                  src={testimonials[testimonialIndex].avatar}
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-black font-semibold text-[15px]">{testimonials[testimonialIndex].author}</span>
                <span className="text-[#6B7280] text-[13px]">{testimonials[testimonialIndex].role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
