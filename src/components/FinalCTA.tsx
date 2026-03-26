import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section id="footer-cta" className="bg-black py-[128px] px-6 md:px-20 relative">
      <div className="max-w-[1143px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#171615] rounded-[20px] border border-white/5 overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[460px]"
        >
          
          {/* Left Content Column (Matching 1-1241) */}
          <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center items-start gap-12 z-10">
            <div className="space-y-6">
              <h2 
                className="text-white font-inter font-normal"
                style={{ 
                  fontSize: '33.6px', 
                  lineHeight: '1.18em', 
                  letterSpacing: '-3.21%' 
                }}
              >
                Start coding with <br />
                precision today
              </h2>
              <div className="space-y-1">
                <p className="text-[#858585] font-inter text-[16px] leading-[1.3]">
                  Free forever. Install in seconds.
                </p>
                <p className="text-[#858585] font-inter text-[16px] leading-[1.3]">
                  Start building immediately.
                </p>
              </div>
            </div>
            
            <Link 
              to="/download"
              className="px-8 py-3.5 rounded-[8px] bg-white text-black font-inter font-medium text-[16px] hover:bg-[#F2F2F2] transition-colors flex items-center justify-center min-w-[200px]"
            >
              Download for macOS
            </Link>
          </div>

          {/* Right Image/Mockup Column (Matching 1-1256) */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-0 bg-[#0A0908] overflow-hidden border-l border-white/5">
             {/* Nature Backdrop Layer */}
             <img 
               src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000" 
               alt="" 
               className="absolute inset-x-0 bottom-0 w-full h-[120%] object-cover opacity-60 grayscale-[20%] transition-transform duration-700 hover:scale-105"
             />
             
             {/* Gradient Transitions for depth */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#171615] via-transparent to-transparent z-[2]" />
             
             {/* IDE Mockup Layer (Floating 1:1260) */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="absolute inset-0 flex items-center justify-center p-8 z-[5]"
             >
                <div className="w-[95%] aspect-[14/9] bg-[#0F0F0E] rounded-[8px] border border-white/10 shadow-[0_45px_100px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col">
                   {/* Mockup UI Inner Header */}
                   <div className="h-7 bg-[#1A1918] border-b border-white/5 flex items-center justify-between px-3">
                      <div className="flex gap-1.5">
                         <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                         <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                         <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                      </div>
                      <div className="text-[10px] text-white/30 font-jetbrains-mono">Exact</div>
                   </div>
                   {/* Mockup UI Inner Content */}
                   <div className="flex-1 flex overflow-hidden">
                      <div className="w-24 border-r border-white/5 bg-[#111] p-3 flex flex-col gap-2">
                         <div className="w-full h-1 bg-white/10 rounded" />
                         <div className="w-2/3 h-1 bg-white/5 rounded" />
                         <div className="w-full h-1 bg-white/5 rounded" />
                      </div>
                      <div className="flex-1 bg-[#0A0908] p-4 text-[11px] font-jetbrains-mono leading-relaxed space-y-1">
                         <div className="flex gap-2">
                            <span className="text-[#c678dd]">import</span>
                            <span className="text-white">{"{ useState } from 'react'"}</span>
                         </div>
                         <div className="flex gap-2">
                            <span className="text-[#c678dd]">import</span>
                            <span className="text-white">{"{ supabase } from '@lib/supabase'"}</span>
                         </div>
                         <div className="text-white/20 mt-4 leading-normal">
                            // AI suggestion: Add password validation <br/>
                            const handleSignUp = async () =&gt; {"{"} <br/>
                            &nbsp;&nbsp;// Ghost text (gray): <br/>
                            &nbsp;&nbsp;if (password.length &lt; 8) {"{"}
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
