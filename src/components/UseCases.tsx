import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import useCase1 from '../assets/features/chat-ui.png'; // Placeholders for now, will refine
import useCase2 from '../assets/features/autocomplete-ui.png';
import useCase3 from '../assets/features/terminal-ui.png';
import useCase4 from '../assets/hero-bg.png';

const useCases = [
  {
    id: "full-stack",
    tab: "Full-stack",
    title: "Full-stack development",
    description: "Build frontend and backend seamlessly. Exact understands your entire stack—from React components to database queries—and helps you ship faster with context-aware suggestions.",
    image: useCase1,
    buttonText: "Start building"
  },
  {
    id: "debug",
    tab: "Debug & refactor",
    title: "Debug & refactor",
    description: "Identify performance bottlenecks and refactor complex logic with ease. Our AI helps you understand legacy code and provides safe, high-quality modernization paths.",
    image: useCase2,
    buttonText: "Start debugging"
  },
  {
    id: "api",
    tab: "API integration",
    title: "API integration",
    description: "Connect to any service in seconds. Exact automatically generates type-safe clients and handles boilerplate for Stripe, Supabase, and custom internal APIs.",
    image: useCase3,
    buttonText: "Connect APIs"
  },
  {
    id: "testing",
    tab: "Testing & CI/CD",
    title: "Testing & CI/CD",
    description: "Automate your quality assurance. Generate unit tests, integration tests, and CI/CD configurations that actually work, ensuring zero regressions.",
    image: useCase4,
    buttonText: "Automate now"
  }
];

const UseCases = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="use-cases" className="bg-black pt-[48px] pb-[120px] px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-[1133px] mx-auto relative flex flex-col items-start text-left">
        
        {/* Header (Matching 1-448) */}
        <div className="flex flex-col items-start gap-4 mb-10 ml-2">
          <div className="flex items-center gap-[4px] px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-[#858585] text-[14px] font-inter font-normal">//</span>
            <span className="text-[#858585] text-[14px] font-inter font-normal tracking-wide">Use cases</span>
          </div>
          
          <h2 
            className="text-white font-inter font-normal"
            style={{ 
              fontSize: '32.8px', 
              lineHeight: '1.2em', 
              letterSpacing: '-0.033em' 
            }}
          >
            One tool.<br />
            <span className="text-[#858585]">Every use case.</span>
          </h2>
        </div>

        {/* Tabs Switcher (Matching 1-460) */}
        <div className="flex items-center p-1.5 bg-[#171615] rounded-[12px] mb-12 ml-2 self-start border border-white/5">
          {useCases.map((useCase, index) => (
            <button
              key={useCase.id}
              onClick={() => setActiveTab(index)}
              className={`
                relative px-6 py-2.5 rounded-[8px] text-[14px] font-inter font-medium transition-colors duration-200
                ${activeTab === index ? 'text-white' : 'text-[#858585] hover:text-white'}
              `}
            >
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#0A0908] rounded-[8px] shadow-lg border border-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{useCase.tab}</span>
            </button>
          ))}
        </div>

        {/* Content Card (Matching 1-481) */}
        <div className="w-full flex flex-col items-start gap-12 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col gap-10"
            >
              {/* Image Container */}
              <div className="w-full aspect-[2.1] relative rounded-[12px] overflow-hidden border border-white/5 bg-[#111111] shadow-2xl">
                <img 
                  src={useCases[activeTab].image} 
                  alt={useCases[activeTab].title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating Mockup Effect overlay */}
                <div className="absolute inset-[8%] rounded-[12px] shadow-[0_40px_80px_rgba(0,0,0,0.9)] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
                   <div className="p-8 text-[#bfbdb6] font-fragment-mono text-[14px] leading-relaxed">
                      {/* Generative lines placeholder to simulate code editor */}
                      <div className="space-y-2">
                        <div className="w-3/4 h-4 bg-white/5 rounded" />
                        <div className="w-1/2 h-4 bg-white/5 rounded" />
                        <div className="w-2/3 h-4 bg-white/10 rounded" />
                        <div className="pt-4 w-5/6 h-4 bg-white/5 rounded" />
                        <div className="w-1/3 h-4 bg-[#FF9040]/20 rounded" />
                      </div>
                   </div>
                </div>
              </div>

              {/* Text Bottom Content */}
              <div className="flex flex-col md:flex-row items-end justify-between gap-8 pb-10 border-b border-white/5 px-2">
                <div className="flex-1 max-w-[800px] space-y-4">
                  <h4 className="text-[#858585] font-inter text-[14px] uppercase tracking-wider">
                    {useCases[activeTab].title}
                  </h4>
                  <p 
                    className="text-white font-inter font-normal"
                    style={{ 
                      fontSize: '24px', 
                      lineHeight: '1.2em', 
                      letterSpacing: '-0.02em' 
                    }}
                  >
                    {useCases[activeTab].description}
                  </p>
                </div>
                
                <button 
                  className="h-12 px-10 rounded-[12px] bg-white text-black text-[16px] font-inter font-semibold hover:bg-[#F2F2F2] transition-colors whitespace-nowrap shadow-xl"
                >
                  {useCases[activeTab].buttonText}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
