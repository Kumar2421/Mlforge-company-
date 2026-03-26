import { motion } from 'framer-motion';

const ways = [
  {
    title: "Command line",
    description: "Install via npm and start coding instantly from your terminal.",
    type: "code",
    value: "npm install -g exact",
    backdrop: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000",
    mockup: (
      <div className="w-[85%] aspect-[16/10] bg-[#111] rounded-[6px] border border-white/10 shadow-2xl p-4 flex flex-col gap-2 font-jetbrains-mono text-[11px] overflow-hidden">
        <div className="flex gap-1 mb-2">
           <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
           <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
           <div className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex flex-col gap-1.5 opacity-80">
          <div className="flex gap-2">
            <span className="text-[#858585]">*</span>
            <span className="text-white">Welcome to</span>
            <span className="text-[#4ade80]">Exact</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#858585]">$</span>
            <span className="text-white">npm install -g exact</span>
          </div>
          <div className="text-[#4ade80] mt-1">✓ exact@1.2.4 installed successfully</div>
          <div className="text-white opacity-60">Run 'exact --help' for commands</div>
        </div>
      </div>
    )
  },
  {
    title: "Desktop app",
    description: "Native macOS, Windows, and Linux app with full offline support.",
    type: "button",
    value: "Download for macOS",
    backdrop: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1000",
    mockup: (
      <div className="w-[85%] aspect-[16/10] bg-[#111] rounded-[6px] border border-white/10 shadow-2xl overflow-hidden flex">
         <div className="w-1/4 h-full border-r border-white/10 p-2 flex flex-col gap-2">
            <div className="w-full h-1 bg-white/10 rounded" />
            <div className="w-3/4 h-1 bg-white/5 rounded" />
            <div className="w-1/2 h-1 bg-white/5 rounded" />
         </div>
         <div className="flex-1 h-full p-4 flex flex-col gap-3">
             <div className="w-full h-2 bg-white/10 rounded" />
             <div className="w-full h-2 bg-white/5 rounded" />
             <div className="w-5/6 h-2 bg-white/5 rounded" />
             <div className="w-4/6 h-2 bg-white/5 rounded" />
             <div className="mt-4 flex gap-2">
                <div className="w-10 h-4 rounded bg-[#4ade80]/20 border border-[#4ade80]/40" />
                <div className="w-10 h-4 rounded bg-white/10" />
             </div>
         </div>
      </div>
    )
  },
  {
    title: "Browser",
    description: "Try Exact instantly in your browser. No installation required.",
    type: "button",
    value: "Open in browser",
    backdrop: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000",
    mockup: (
      <div className="w-[85%] aspect-[16/10] bg-[#111] rounded-[6px] border border-white/10 shadow-2xl overflow-hidden flex flex-col">
         <div className="h-4 w-full bg-[#1A1918] border-b border-white/10 px-2 flex items-center gap-1">
            <div className="w-8 h-2 bg-white/10 rounded" />
         </div>
         <div className="flex-1 p-4 bg-[#0A0908] flex gap-2">
            <div className="w-4 h-full bg-white/5 rounded" />
            <div className="flex-1 flex flex-col gap-2">
               <div className="w-full h-1.5 bg-[#4ade80]/20 rounded" />
               <div className="w-full h-1.5 bg-white/5 rounded" />
               <div className="w-full h-1.5 bg-white/5 rounded" />
               <div className="w-full h-1.5 bg-white/5 rounded" />
               <div className="w-1/2 h-1.5 bg-white/5 rounded" />
            </div>
         </div>
      </div>
    )
  }
];

const Implementation = () => {
  return (
    <section id="implementation" className="bg-black py-[128px] px-6 md:px-20 relative">
      <div className="max-w-[1143px] mx-auto flex flex-col items-start">
        
        {/* Header (Matching User Request) */}
        <div className="flex flex-col items-start gap-4 mb-16">
          <div className="flex items-center gap-2">
             <span className="text-[#858585] text-[15px] font-inter font-normal">// Three ways to code</span>
          </div>
          <h2 className="text-white font-inter font-normal text-[36px] tracking-tight leading-[1.2]">
            Start coding your way. <span className="text-[#858585]">Choose what works best.</span>
          </h2>
        </div>

        {/* Pricing Grids (Dual Layer) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-16 w-full">
           {ways.map((way, i) => (
             <motion.div
               key={way.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15, duration: 0.6 }}
               className="flex flex-col group"
             >
                {/* IDE WINDOW TOP SECTION */}
                <div className="relative aspect-square rounded-[8px] overflow-hidden mb-8 border border-white/5 bg-[#0A0908]">
                   {/* Background Image Layer */}
                   <img 
                     src={way.backdrop} 
                     alt="" 
                     className="absolute inset-x-0 bottom-0 w-full h-[100%] object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                   />
                   
                   {/* Foreground IDE Mockup Layer */}
                   <div className="absolute inset-0 flex items-center justify-center p-6 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                      {way.mockup}
                   </div>

                   {/* Subtle Vignette Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                </div>

                {/* TEXT & ACTION SECTION */}
                <div className="flex flex-col items-start gap-2 pr-4">
                  <h3 className="text-white text-[20px] font-medium font-inter tracking-tight">
                    {way.title}
                  </h3>
                  <p className="text-[#858585] text-[15px] leading-[1.4] font-inter mb-4">
                    {way.description}
                  </p>
                  
                  {/* Action UI */}
                  <div className="w-full">
                    {way.type === 'code' ? (
                      <div className="px-4 py-2.5 rounded-[8px] bg-[#171615] border border-white/5 flex items-center justify-between group/code cursor-pointer active:scale-[0.98] transition-all">
                        <code className="text-white font-jetbrains-mono text-[13px] opacity-80 group-hover/code:opacity-100 transition-opacity">
                          {way.value}
                        </code>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white/40 group-hover/code:text-white transition-colors">
                          <rect x="2" y="5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                          <path d="M5 2H11C11.5523 2 12 2.44772 12 3V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    ) : (
                      <button className="px-5 py-2.5 rounded-[8px] bg-white text-black font-inter font-medium text-[13px] hover:bg-[#F2F2F2] transition-colors flex items-center justify-center gap-2 group/btn">
                        {way.value}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover/btn:translate-x-0.5">
                          <path d="M4.66 3.5L9.33 8.16L4.66 12.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Implementation;
