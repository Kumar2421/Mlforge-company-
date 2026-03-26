import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const platforms = [
  {
    name: "macOS",
    version: "v1.2.4 (Universal)",
    description: "Supports Apple Silicon (M1/M2/M3) and Intel (x64). Requires macOS 11.0 or later.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M17.05 20.28C14.15 22.07 10.15 22.07 7.25 20.28..." stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    backdrop: "https://images.unsplash.com/photo-1611095773163-57598fd44963?auto=format&fit=crop&q=80&w=1000",
    mockup: (
      <div className="w-[85%] aspect-[16/10] bg-[#111] rounded-[8px] border border-white/10 shadow-2xl p-4 flex flex-col gap-2 relative overflow-hidden">
        <div className="flex gap-1.5 mb-2 relative z-10">
           <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
           <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
           <div className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex flex-col gap-2 relative z-10 opacity-80">
          <div className="w-full h-2 bg-white/10 rounded" />
          <div className="w-5/6 h-2 bg-white/5 rounded" />
          <div className="w-3/4 h-2 bg-white/5 rounded" />
        </div>
        {/* Subtle Brand Logo */}
        <div className="absolute right-4 bottom-4 opacity-10">
           <div className="text-white font-inter font-bold text-[32px] italic">E</div>
        </div>
      </div>
    )
  },
  {
    name: "Windows",
    version: "v1.2.4 (x64/ARM64)",
    description: "Full precision for Windows 10/11. Optimized for WSL2 development.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect x="3" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/>
         <rect x="13" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/>
         <rect x="3" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/>
         <rect x="13" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    backdrop: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=1000",
    mockup: (
      <div className="w-[85%] aspect-[16/10] bg-[#141414] rounded-[8px] border border-white/10 shadow-2xl overflow-hidden flex flex-col">
         <div className="h-5 bg-[#1A1918] border-b border-white/10 flex items-center px-2">
            <div className="w-16 h-1.5 bg-white/5 rounded" />
         </div>
         <div className="flex-1 p-4 flex flex-col gap-3">
            <div className="w-full h-full bg-[#4ade80]/5 border border-[#4ade80]/10 rounded flex items-center justify-center">
               <div className="text-[#4ade80]/40 font-jetbrains-mono text-[9px]">Exact Project v.1.2</div>
            </div>
         </div>
      </div>
    )
  },
  {
    name: "Linux",
    version: "v1.2.4 (x64/ARM64)",
    description: "Portable AppImage, .deb, and .rpm for all major distributions.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M12 3L4 12V21H20V12L12 3Z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    backdrop: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    mockup: (
      <div className="w-[85%] aspect-[16/10] bg-[#0A0908] rounded-[8px] border border-white/10 shadow-2xl p-5 font-jetbrains-mono text-[10px] text-white/40 overflow-hidden">
        <div className="mb-2 text-[#858585]">$ exact -v</div>
        <div className="text-[#4ade80]">exact version 1.2.4 stable</div>
        <div className="mt-4 text-[#858585]">$ sudo snap install exact-editor</div>
        <div className="mt-1">Installing... [██████████] 100%</div>
      </div>
    )
  }
];

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter selection:bg-white selection:text-black">
      <Navbar />
      
      <main className="pt-[160px] pb-[128px]">
        {/* Hero Section */}
        <section className="px-6 md:px-20 mb-24">
          <div className="max-w-[1143px] mx-auto text-center flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[14px] font-inter text-[#858585]"
            >
              Latest Stable: <span className="text-white font-medium">v1.2.4</span>
              <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[52px] md:text-[72px] font-normal tracking-tight leading-[1.05] text-white"
            >
              Download <span className="text-[#858585]">Exact</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#858585] text-[18px] max-w-[600px] leading-relaxed"
            >
              The AI code editor built from the ground up for deep multi-file precision.
              Free for local use, forever.
            </motion.p>
          </div>
        </section>

        {/* Platforms Grid (Matching 1-1033 but Bigger) */}
        <section className="px-6 md:px-20 mb-32">
          <div className="max-w-[1143px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.6 }}
                className="flex flex-col group cursor-pointer"
              >
                {/* Visual Top (Bigger) */}
                <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden mb-8 border border-white/5 bg-[#090909]">
                   <img 
                     src={p.backdrop} 
                     alt="" 
                     className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 flex items-center justify-center p-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                      {p.mockup}
                   </div>
                   <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Bottom */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-[24px] font-medium tracking-tight">{p.name}</h3>
                    <span className="text-[#858585] text-[12px] font-jetbrains-mono">{p.version}</span>
                  </div>
                  <p className="text-[#858585] text-[15px] leading-relaxed min-h-[44px]">
                    {p.description}
                  </p>
                  <button className="w-full flex items-center justify-center gap-3 py-4 rounded-[12px] bg-white text-black font-medium text-[15px] hover:bg-[#F2F2F2] transition-all group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] active:scale-[0.98]">
                    Download .dmg
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 3V13M10 13L6 9M10 13L14 9M4 17H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Secondary Download Grid (CLI/Extensions) */}
        <section className="px-6 md:px-20 mb-32 border-t border-white/5 pt-24">
           <div className="max-w-[1143px] mx-auto text-center mb-16">
              <h2 className="text-[32px] font-normal tracking-tight text-white mb-4">Other ways to install</h2>
              <p className="text-[#858585] text-[16px]">Prefer the command line? We've got you covered.</p>
           </div>
           
           <div className="max-w-[1143px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0A0908] border border-white/5 rounded-[16px] p-10 flex items-center justify-between group hover:border-white/10 transition-colors">
                 <div className="flex flex-col gap-2">
                    <h3 className="text-white text-[18px] font-medium">Command Line Tool</h3>
                    <p className="text-[#858585] text-[14px]">Update and manage Exact from your terminal.</p>
                 </div>
                 <div className="px-6 py-3 rounded-[8px] bg-white/5 border border-white/5 font-jetbrains-mono text-[13px] text-white/60 group-hover:text-white group-hover:border-white/20 transition-all cursor-pointer">
                    curl -fsSL exact.sh | sh
                 </div>
              </div>
              
              <div className="bg-[#0A0908] border border-white/5 rounded-[16px] p-10 flex items-center justify-between group hover:border-white/10 transition-colors">
                 <div className="flex flex-col gap-2">
                    <h3 className="text-white text-[18px] font-medium">Nightly Builds</h3>
                    <p className="text-[#858585] text-[14px]">Get the absolute latest features before everyone else.</p>
                 </div>
                 <button className="px-6 py-3 rounded-[8px] bg-white/5 border border-white/5 text-[13px] font-medium text-white/60 group-hover:text-white group-hover:border-white/20 transition-all">
                    View Builds
                 </button>
              </div>
           </div>
        </section>

        {/* System Requirements */}
        <section className="px-6 md:px-20">
           <div className="max-w-[800px] mx-auto bg-[#0A0908] rounded-[20px] p-12 border border-white/5">
              <h3 className="text-white text-[20px] font-medium mb-8">System Requirements</h3>
              <div className="space-y-6">
                 <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-[#858585] text-[14px]">Operating System</span>
                    <span className="text-white text-[14px]">macOS 11+, Windows 10+, Ubuntu 20.04+</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-[#858585] text-[14px]">Memory (RAM)</span>
                    <span className="text-white text-[14px]">8GB minimum (16GB recommended)</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-[#858585] text-[14px]">Processor</span>
                    <span className="text-white text-[14px]">Universal (Apple Silicon or Intel/AMD)</span>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DownloadPage;
