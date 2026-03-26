import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BackgroundBeams } from './BackgroundBeams';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#fcfcfc] px-6 md:px-12 xl:px-[200px] flex flex-col items-center justify-between h-[100dvh] pt-[120px] pb-10 overflow-hidden">
      
      {/* Background Beams replacement restricted to container bounds */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full">
         <BackgroundBeams className="top-[30px] opacity-80" />
         {/* Soft Bottom Mask to blend smoothly with below sections */}
         <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-[#fcfcfc] via-[#fcfcfc]/90 to-transparent z-0 pointer-events-none" />
      </div>

      {/* Container carefully fitting the viewport horizontally and vertically without overflowing gap limits */}
      <div className="w-full max-w-[1200px] flex-1 z-10 flex flex-col justify-between relative h-full max-h-[900px]">
        
        {/* Top Header */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10 mt-4 md:mt-10">
          <div className="flex-1">
            <h1 className="font-bold text-[#0B0C10] leading-[1.05] tracking-[-0.03em] text-[52px] md:text-[68px] lg:text-[84px] max-w-[900px]">
              Forging the digital future of enterprise.
            </h1>
          </div>

          <div className="flex-1 flex lg:justify-end pt-6">
            <p className="font-medium text-[#667085] max-w-[440px] leading-[1.6] tracking-tight text-[18px] lg:text-[20px]">
              ML Forge Studio engineers bespoke software, autonomous AI agents, and secure biometric ecosystems. We build the foundational infrastructure that powers global scale and operational excellence.
            </p>
          </div>
        </div>

        {/* Bottom Hero Spacer / Buttons anchored to layout limits */}
        <div className="w-full flex lg:justify-end mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[650px] lg:pr-10">
                {/* Getting Started Hover CTA */}
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex flex-col justify-between w-full h-[150px] md:h-[180px] bg-[#0052FF] text-[#FFFFFF] p-6 lg:p-8 hover:scale-[1.03] transition-transform duration-200 ease-in-out rounded-[12px] shadow-lg"
                >
                    <div className="w-full flex justify-between items-start">
                        <span className="font-medium text-[16px] md:text-[18px]">Get started</span>
                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                    </div>
                </button>
                
                {/* Contact Us Hover CTA */}
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex flex-col justify-between w-full h-[150px] md:h-[180px] bg-[#002878] text-[#FFFFFF] p-6 lg:p-8 hover:scale-[1.03] transition-transform duration-200 ease-in-out rounded-[12px] shadow-lg"
                >
                    <div className="w-full flex justify-between items-start">
                        <span className="font-medium text-[16px] md:text-[18px]">Contact us</span>
                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white/50" strokeWidth={2.5} />
                    </div>
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};
