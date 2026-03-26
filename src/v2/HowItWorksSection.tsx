import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const HowItWorksSection: React.FC = () => {

  // Pure data from Figma nodes 1:132, 1:133, 1:134
  // We apply the exact coordinate system 767x642 from design.
  const figmaPaths = [
    { targetY: 0.074, cX: 444.6, cY: 342.9, length: 855 },
    { targetY: 56.45, cX: 442.8, cY: 342.2, length: 800 },
    { targetY: 117.16, cX: 415.9, cY: 345.7, length: 801 },
    { targetY: 174.78, cX: 441.9, cY: 335.8, length: 770 },
    { targetY: 234.26, cX: 459.7, cY: 329.2, length: 770 },
    { targetY: 293.12, cX: 460.1, cY: 325.9, length: 760 },
    { targetY: 348.88, cX: 619.5, cY: 330.5, length: 750 },
    { targetY: 409.59, cX: 493.9, cY: 323.0, length: 774 },
    { targetY: 466.59, cX: 544.3, cY: 328.8, length: 800 },
    { targetY: 528.54, cX: 474.1, cY: 314.3, length: 810 },
    { targetY: 590.50, cX: 501.4, cY: 318.1, length: 832 },
    { targetY: 641.92, cX: 472.5, cY: 311.0, length: 855 }
  ];

  // We enforce M0 321 L 50 321 C 200 321 ... to guarantee the laser-straight start convergence
  const formattedPaths = figmaPaths.map(p => ({
    d: `M 0 321 L 50 321 C 250 321, ${p.cX} ${p.cY}, 767 ${p.targetY}`,
    length: p.length
  }));

  return (
    <section id="how-it-works" className="w-full bg-[#F8F9FB] py-16 lg:py-24 px-6 overflow-hidden relative">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full max-w-[1050px] mx-auto flex flex-col lg:flex-row items-start justify-between relative min-h-[500px]"
      >
        
        {/* Center SVG Animated Flow Map */}
        <div className="hidden lg:block absolute inset-y-0 left-0 right-[350px] z-[0] pointer-events-none overflow-hidden pb-10">
           {/* SVG perfectly bounds to the 767 width and 642 height origin coords */}
           <svg width="100%" height="100%" viewBox="0 0 767 642" fill="none" preserveAspectRatio="none" className="absolute top-0 left-0 w-[100%] h-[100%]">
             
             {/* Base Faint Lines */}
             <g opacity="0.1">
               {formattedPaths.map((p, idx) => (
                 <path key={`bg-${idx}`} d={p.d} stroke="#0052FF" strokeWidth="2" />
               ))}
             </g>

             {/* Moving Animated Comet Tracers */}
             <g>
               {formattedPaths.map((p, idx) => (
                 <motion.path
                    key={`active-${idx}`}
                    d={p.d}
                    stroke="#0052FF"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeDasharray="40 1000" 
                    initial={{ strokeDashoffset: 1000 }}
                    animate={{ strokeDashoffset: -40 }}
                    transition={{
                      duration: 2.2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 0.3
                    }}
                 />
               ))}
             </g>

           </svg>
        </div>

        {/* Left Title Grid - Top aligned exactly with the steps */}
        <motion.div variants={itemVariants} className="w-full lg:w-[320px] shrink-0 z-[10] relative">
          <h2 className="text-[#0B0C10] text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.02em]">
            Designed to turn<br/>complexity into clarity.
          </h2>
        </motion.div>

        {/* Right Info Grid - Scaled down gap and margins for smaller container */}
        <div className="w-full lg:w-[300px] shrink-0 flex flex-col gap-[50px] z-[10] mt-12 lg:mt-0 relative">
          
          <motion.div variants={itemVariants} className="flex flex-col relative group pt-[20px]">
            <h3 className="text-[#0052FF] font-bold text-[30px] md:text-[32px] leading-none mb-[12px]">.01</h3>
            <h4 className="text-[#0B0C10] font-bold text-[20px] md:text-[22px] tracking-[-0.015em]">Architectural Blueprint</h4>
            <p className="text-[#667085] text-[15px] leading-[1.6] tracking-[-0.01em] mt-2 max-w-[280px]">
              We perform precise operational modeling to architect your technical foundation, mapping every workflow to a custom-engineered blueprint.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col relative group pt-[10px]">
            <h3 className="text-[#0052FF] font-bold text-[30px] md:text-[32px] leading-none mb-[12px]">.02</h3>
            <h4 className="text-[#0B0C10] font-bold text-[20px] md:text-[22px] tracking-[-0.015em]">Forging & Integration</h4>
            <p className="text-[#667085] text-[15px] leading-[1.6] tracking-[-0.01em] mt-2 max-w-[280px]">
              Our engineers forge the custom software, ERPs, and biometric sensors into a unified ecosystem, ensuring absolute hardware-software synergy.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col relative group pt-[15px]">
            <h3 className="text-[#0052FF] font-bold text-[30px] md:text-[32px] leading-none mb-[12px]">.03</h3>
            <h4 className="text-[#0B0C10] font-bold text-[20px] md:text-[22px] tracking-[-0.015em]">Autonomous Scaling</h4>
            <p className="text-[#667085] text-[15px] leading-[1.6] tracking-[-0.01em] mt-2 max-w-[280px]">
              Unlock exponential growth with secure cloud deployments and AI agents that intelligently automate decisions and optimize output.
            </p>

            <motion.div variants={itemVariants} className="mt-8">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-between gap-6 bg-[#0052FF] text-[#FFFFFF] px-6 py-4 hover:brightness-110 transition-all rounded-[2px] w-[180px] font-bold text-[12px] uppercase"
              >
                <span>Start Engineering</span>
                <ArrowUpRight className="w-4 h-4" strokeWidth={3} />
              </button>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

