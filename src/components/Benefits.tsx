import { motion } from 'framer-motion';

const benefits = [
  {
    title: "Full codebase understanding",
    description: "AI that understands your entire project, not just the current file.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Works out of the box",
    description: "Install once, start coding. Zero configuration required.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="2"/>
        <path d="M8 21H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 17V21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Your code stays yours",
    description: "100% private by default. Your code never leaves your machine.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="white" strokeWidth="2"/>
        <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="white" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: "Instant responses",
    description: "Sub-50ms autocomplete and real-time AI. No lag, ever.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Every language you use",
    description: "50+ languages supported with the same precision.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" stroke="white" strokeWidth="2"/>
        <path d="M7 7L11 12L7 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 17H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Refactor with confidence",
    description: "Change once, update everywhere. Zero broken imports.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2 22L7 20.6622C8.47089 21.513 10.1786 22 12 22Z" stroke="white" strokeWidth="2"/>
        <path d="M8 12L12 16L16 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="p-8 pb-10 rounded-[12px] bg-[#0A0908] border border-white/5 hover:border-white/10 transition-colors group flex flex-col gap-6"
    >
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
        {benefit.icon}
      </div>
      <div className="space-y-3">
        <h3 className="text-white font-inter font-medium text-[16px]">
          {benefit.title}
        </h3>
        <p className="text-[#858585] font-inter font-normal text-[14px] leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
};

const Benefits = () => {
  return (
    <section id="benefits" className="bg-black py-[96px] px-6 md:px-20 relative">
      <div className="max-w-[1133px] mx-auto relative flex flex-col items-start text-left">
        
        {/* Header (Matching 1-535) */}
        <div className="flex flex-col items-start gap-4 mb-12 ml-2">
          <div className="flex items-center gap-[4px] px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-[#858585] text-[14px] font-inter font-normal">//</span>
            <span className="text-[#858585] text-[14px] font-inter font-normal tracking-wide">Benefits</span>
          </div>
          
          <h2 
            className="text-white font-inter font-normal"
            style={{ 
              fontSize: '32.3px', 
              lineHeight: '1.2em', 
              letterSpacing: '-0.033em' 
            }}
          >
            Ship faster.<br />
            <span className="text-[#858585]">Code better.</span>
          </h2>
        </div>

        {/* Benefits Grid (Matching 1-546) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {benefits.map((benefit, i) => (
            <BenefitCard key={i} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
