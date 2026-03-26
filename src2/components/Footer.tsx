import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FFFFFF] pt-6 md:pt-10">
      <div className="w-full max-w-[1240px] mx-auto px-6 md:px-12 lg:px-40 flex flex-col gap-4">
        
        {/* Top CTA Cards - 1:1 Probe Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8">
          
          {/* CTA Card 1 - Vibrant Blue with Dots */}
          <div className="w-full h-auto min-h-[340px] md:h-[360px] bg-[#0052FF] rounded-[2px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group">
            {/* Dot Pattern Overlay */}
            <div className="absolute inset-0 opacity-40 pointer-events-none" 
              style={{ 
                backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
              }}
            ></div>
            
            <div className="relative z-10 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#FFFFFF] rounded-[1px]"></div>
                <span className="text-[11px] text-[#FFFFFF] font-bold uppercase tracking-[0.2em] leading-none">Empower your team</span>
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-5 mt-auto">
              <div className="flex flex-col gap-2">
                 {/* L-Shape Logo Mark */}
                 <div className="flex flex-col w-7 h-7 gap-1 mb-2">
                    <div className="flex gap-1 h-3">
                        <div className="w-3 h-3 bg-transparent"></div>
                        <div className="w-3 h-3 bg-white"></div>
                    </div>
                    <div className="flex gap-1 h-3">
                        <div className="w-3 h-3 bg-white"></div>
                        <div className="w-3 h-3 bg-white"></div>
                    </div>
                 </div>
                 <h4 className="text-[26px] md:text-[30px] font-bold text-[#FFFFFF] leading-[1.1] tracking-[-0.015em]">
                   Build smarter.<br />Start today.
                 </h4>
              </div>
              <div className="flex">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-between gap-8 bg-[#121212] text-white px-5 py-3 rounded-[2px] font-bold text-[12px] hover:bg-black transition-colors duration-200 uppercase"
                >
                  <span>Get started</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* CTA Card 2 - Navy with Image */}
          <div className="w-full h-auto min-h-[340px] md:h-[360px] bg-[#002878] rounded-[2px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center border-[1px] border-white/10" 
                 style={{ 
                   backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80')",
                   mixBlendMode: 'overlay',
                   opacity: 0.5
                 }}>
            </div>
            
            <div className="relative z-10 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#FFFFFF] rounded-[1px]"></div>
                <span className="text-[11px] text-[#FFFFFF] font-bold uppercase tracking-[0.2em] leading-none">Contact us</span>
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-5 mt-auto">
              <div className="flex flex-col gap-2">
                 {/* L-Shape Logo Mark */}
                 <div className="flex flex-col w-7 h-7 gap-1 mb-2">
                    <div className="flex gap-1 h-3">
                        <div className="w-3 h-3 bg-transparent"></div>
                        <div className="w-3 h-3 bg-white"></div>
                    </div>
                    <div className="flex gap-1 h-3">
                        <div className="w-3 h-3 bg-white"></div>
                        <div className="w-3 h-3 bg-white"></div>
                    </div>
                 </div>
                 <h4 className="text-[26px] md:text-[30px] font-bold text-[#FFFFFF] leading-[1.1] tracking-[-0.015em]">
                   Got questions?<br />Contact us.
                 </h4>
              </div>
              <div className="flex">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-between gap-8 bg-white text-[#0052FF] px-5 py-3 rounded-[2px] font-bold text-[12px] hover:bg-gray-100 transition-colors duration-200 uppercase"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Bottom Footer */}
      <div className="w-full bg-[#10296E] px-6 md:px-12 lg:px-40 py-10 md:py-12">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col gap-10 text-[#FFFFFF]">
          <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-32 items-start">
            
            {/* Branding Column */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                 {/* White L-Shape Logo */}
                 <div className="flex flex-col w-5 h-5 gap-1">
                    <div className="flex gap-1 h-2">
                        <div className="w-2.5 h-2.5 bg-transparent"></div>
                        <div className="w-2.5 h-2.5 bg-white"></div>
                    </div>
                    <div className="flex gap-1 h-2">
                        <div className="w-2.5 h-2.5 bg-white"></div>
                        <div className="w-2.5 h-2.5 bg-white"></div>
                    </div>
                 </div>
                 <span className="font-bold text-[18px] tracking-tight">ML Forge Studio.</span>
              </div>
              
            </div>

            {/* Links Columns */}
            <div className="flex items-start gap-12 md:gap-20 pr-4">
              
              <div className="flex flex-col gap-3">
                <h6 className="text-[14px] font-bold text-white tracking-tight uppercase opacity-50">Navigation</h6>
                <div className="flex flex-col gap-2.5 text-[13.5px] text-white/80 font-medium">
                  <a href="#features" className="hover:text-white transition-colors">Features</a>
                  <a href="#how" className="hover:text-white transition-colors">How it works</a>
                  <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                  <a href="#faq" className="hover:text-white transition-colors">F.A.Q</a>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h6 className="text-[14px] font-bold text-white tracking-tight uppercase opacity-50">Social</h6>
                <div className="flex flex-col gap-2.5 text-[13.5px] text-white/80 font-medium">
                  <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-white transition-colors">X/Twitter</a>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom strip */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-[1px] bg-white/5"></div>
            <p className="text-[11px] text-white/30 font-medium font-sans text-center md:text-left">
              &copy; 2026 ML Forge Studio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
