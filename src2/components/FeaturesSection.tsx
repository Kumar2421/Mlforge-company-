import React from 'react';
import { Button } from './Button';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const FeaturesSection: React.FC = () => {

  const cardVariants: any = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="features" className="w-full bg-white px-6 md:px-12 py-16 md:py-[80px]">
      <div className="w-full max-w-[1000px] mx-auto flex flex-col items-center gap-14">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-4"
        >
           <h2 className="text-[#0B0C10] text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.015em]">
            Engineering Excellence.
          </h2>
          <p className="text-[#667085] text-[18px] max-w-[500px] leading-[1.6] font-medium">
            We forge digital ecosystems that prioritize speed, security, and enterprise-grade logic. Every line of code is an investment in your scale.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="w-full flex flex-col gap-4">
          
          {/* Top Massive Block - Strategic Software */}
          <motion.div 
             variants={cardVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-50px" }}
             className="w-full h-auto min-h-[400px] md:h-[450px] relative rounded-[2px] overflow-hidden flex flex-col items-center justify-center p-10 text-center"
          >
             <ParallaxBackground imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" />
             <div className="absolute inset-0 bg-[#0052FF]/70 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-[#002878]/40 to-[#0B0C10]/60"></div>
             
             <div className="relative z-10 flex flex-col items-center gap-3">
                <h3 className="text-[#f8f8f8] font-bold text-[36px] md:text-[44px] tracking-[-0.02em]">Scalable ERP Systems</h3>
                <p className="text-[#e2e2e2] max-w-[480px] text-[16px] font-medium mb-4 leading-relaxed">
                   Consolidate your entire enterprise operations into a single, high-performance dashboard. Custom databases, automated resource planning, and seamless department synchronization.
                </p>
                <div 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#FFFFFF] px-6 py-3 flex items-center gap-6 text-[#002878] hover:scale-[1.03] transition-all cursor-pointer rounded-[2px] shadow-xl"
                >
                   <span className="font-bold text-[13px] uppercase tracking-wider">Explore Enterprise ERP</span>
                   <ArrowUpRight className="w-4 h-4" />
                </div>
             </div>
          </motion.div>

          {/* Middle 2-Column Row */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[420px]">
            
             {/* Left - Web & Mobile Architecture */}
             <motion.div 
               variants={cardVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               className="w-full h-full bg-[#002878] rounded-[2px] p-10 flex flex-col relative overflow-hidden group"
             >
                <ParallaxBackground imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" opacity="0.1" mixBlend="overlay" />
                <div className="relative z-10 flex flex-col gap-3 max-w-[320px]">
                   <h4 className="text-[#FFFFFF] text-[26px] font-bold tracking-[-0.015em]">Premium Web & Mobile</h4>
                   <p className="text-[#e2e2e2] text-[14.5px] font-medium leading-relaxed opacity-80">
                      Engineering elite digital experiences across platforms. Native mobile apps and reactive web ecosystems built with modern tech stacks for zero friction.
                   </p>
                </div>
                <div className="relative mt-12 z-10 flex-1 overflow-hidden">
                   <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80" 
                    alt="Mobile App UI" 
                    className="absolute top-0 left-0 w-[110%] max-w-none rounded-[2px] shadow-2xl transition-transform duration-700 group-hover:scale-105" 
                   />
                </div>
             </motion.div>

             {/* Right - AI & Automation */}
             <motion.div 
               variants={cardVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               className="w-full h-full bg-[#0052FF] rounded-[2px] p-10 relative overflow-hidden group"
             >
                <ParallaxBackground imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" opacity="0.4" mixBlend="multiply" />
                <div className="relative z-10 flex flex-col gap-3 max-w-[320px]">
                   <h4 className="text-[#FFFFFF] text-[26px] font-bold tracking-[-0.015em]">AI Agent Automation</h4>
                   <p className="text-[#e2e2e2] text-[14.5px] font-medium leading-relaxed opacity-80">
                      Deploy autonomous agents to revolutionize your data processing and customer interactions. Intelligent logic that learns and adapts to your core business goals.
                   </p>
                </div>
                {/* Floating Abstract UI for AI */}
                <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
                <div className="absolute right-10 bottom-10 z-10">
                   <div className="w-32 h-32 border border-white/20 rounded-full flex items-center justify-center p-4">
                      <div className="w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
                   </div>
                </div>
             </motion.div>

          </div>

          {/* Bottom Block - Biometrics */}
          <motion.div 
             variants={cardVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-50px" }}
             className="w-full bg-[#0B0C10] rounded-[2px] p-10 md:p-14 flex flex-col md:flex-row items-center overflow-hidden relative h-auto md:h-[400px]"
          >
             <div className="w-full md:w-[45%] flex flex-col gap-6 relative z-10">
                <div className="inline-flex w-fit bg-white/10 border border-white/10 rounded-full px-3 py-1">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Hardware / Software Integration</span>
                </div>
                <h4 className="text-[#FFFFFF] text-[32px] md:text-[38px] font-bold tracking-[-0.015em] leading-tight">Elite Biometric Security</h4>
                <p className="text-[#e2e2e2] text-[16px] leading-[1.6] max-w-[360px] font-medium opacity-80">
                  Custom hardware ecosystems integrated with cloud-first attendance systems. Secure your physical and digital assets with engineered precision.
                </p>
                <div 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-2 bg-[#0052FF] px-6 py-3 flex items-center gap-6 text-[#FFFFFF] w-fit hover:brightness-110 transition-all cursor-pointer rounded-[2px] shadow-lg"
                >
                   <span className="font-bold text-[12px] uppercase tracking-wider">View Integrations</span>
                   <ArrowUpRight className="w-4 h-4" />
                </div>
             </div>
             
             {/* High-tech security image */}
             <div className="w-full md:w-[55%] mt-10 md:mt-0 relative h-full flex items-center justify-end">
                <img 
                   src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80" 
                   alt="Security Hardware" 
                   className="md:absolute md:-right-[-60px] lg:-right-[-120px] w-[110%] max-w-[700px] h-auto object-cover rounded shadow-2xl border border-white/5 opacity-90" 
                />
             </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

const ParallaxBackground = ({ imageUrl, opacity = "1", mixBlend = "normal" }: { imageUrl: string, opacity?: string, mixBlend?: string }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
       <motion.div 
         className={`absolute inset-[-25%] w-[150%] h-[150%] bg-cover bg-center ${mixBlend}`}
         style={{ backgroundImage: `url('${imageUrl}')`, y, opacity }}
       />
    </div>
  );
};
