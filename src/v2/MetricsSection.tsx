import React from 'react';
import * as import_framer_motion from 'framer-motion';

export const MetricsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFFFF] px-6 md:px-12 lg:px-40 py-16 md:py-[120px]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-14">
        
        {/* Top Header */}
        <div className="max-w-[550px] flex flex-col gap-4">
          <h2 className="text-[#0B0C10] text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.02em]">
            Numbers that speak <br /> for themselves.
          </h2>
          <p className="text-[18px] leading-[1.6] text-[#667085]">
            Every number tells a story of teams moving faster, of flows that never stall, and of trust that isn't promised, but proven.
          </p>
        </div>

        {/* Images Parallax Windows */}
        <div className="flex flex-col md:flex-row gap-4 lg:gap-6 h-[400px] md:h-[520px] w-full mt-8 md:mt-16">
          
          {/* Parallax Block 1 - Enterprise Blueprint */}
          <ParallaxImageBlock 
            imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            className="w-full md:w-[35%] h-full rounded-[2px]"
          />

          {/* Parallax Block 2 - Technical Infrastructure */}
          <ParallaxImageBlock 
             imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
             className="w-full md:w-[65%] h-full rounded-[2px]"
             overlay={
               <div className="absolute inset-0 bg-[#0052FF]/60 mix-blend-multiply flex items-center justify-center">
                 <div className="w-[120px] h-[120px] bg-white/10 backdrop-blur-xl rounded-full flex flex-col items-center justify-center border border-white/20">
                    <div className="text-white text-[12px] font-bold tracking-widest uppercase text-center px-4">Forge v2.0 Platform</div>
                 </div>
               </div>
             }
          />
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-16 mt-8 md:mt-16 lg:w-[90%]">
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
               <span className="text-[44px] text-[#0052FF] font-bold leading-[1] tracking-tighter">4.8k+</span>
               <h6 className="text-[18px] text-[#0B0C10] font-bold leading-tight tracking-[-0.015em]">Enterprise Nodes Deployed</h6>
               <p className="text-[15px] md:text-[16px] text-[#667085] leading-[1.6] mt-2 font-medium">
                 Global infrastructure units providing secure biometric access and real-time operational processing for elite facilities.
               </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
               <span className="text-[44px] text-[#0052FF] font-bold leading-[1] tracking-tighter">12M+</span>
               <h6 className="text-[18px] text-[#0B0C10] font-bold leading-tight tracking-[-0.015em]">AI Agent Task Cycles</h6>
               <p className="text-[15px] md:text-[16px] text-[#667085] leading-[1.6] mt-2 font-medium">
                 Autonomous decisions managed by custom-forged AI agents, reducing operational latency and accelerating enterprise throughput.
               </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
               <span className="text-[44px] text-[#0052FF] font-bold leading-[1] tracking-tighter">99.9%</span>
               <h6 className="text-[18px] text-[#0B0C10] font-bold leading-tight tracking-[-0.015em]">Ecosystem Uptime</h6>
               <p className="text-[15px] md:text-[16px] text-[#667085] leading-[1.6] mt-2 font-medium">
                 Engineered precision ensuring your custom ERP and SaaS applications remain uninterrupted under heavy global demand.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Reusable Parallax Internal Component
const ParallaxImageBlock = ({ imageUrl, className, overlay }: { imageUrl: string, className: string, overlay?: React.ReactNode }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = import_framer_motion.useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = import_framer_motion.useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <import_framer_motion.motion.div 
        className="absolute inset-[-25%] w-[150%] h-[150%] bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})`, y }}
      />
      {overlay}
    </div>
  );
};


