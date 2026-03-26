import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import chatUi from '../assets/features/chat-ui.png';
import autocompleteUi from '../assets/features/autocomplete-ui.png';
import terminalUi from '../assets/features/terminal-ui.png';
import mockupForeground from '../assets/hero-mockup.png';

const features = [
  {
    title: "Context-perfect AI chat",
    description: "Ask once, get exactly what you need. Our AI understands your entire codebase and gives you precise answers with exact line references.",
    buttonText: "Try AI chat",
    bgImage: chatUi,
    mockup: mockupForeground,
    imageLeft: true
  },
  {
    title: "Precision autocomplete",
    description: "Stop choosing between 10 suggestions. Exact gives you one perfect completion that matches your code style and intent.",
    buttonText: "See it in action",
    bgImage: autocompleteUi,
    mockup: mockupForeground,
    imageLeft: false
  },
  {
    title: "AI-powered terminal",
    description: "Debug smarter with instant error detection, suggested fixes, and command optimization. Let Exact handle the terminal heavy lifting.",
    buttonText: "Explore terminal",
    bgImage: terminalUi,
    mockup: mockupForeground,
    imageLeft: true
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Balanced parallax offset for the inner mockup
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div 
      ref={cardRef}
      className="sticky top-[100px] mb-[120px] w-full" 
      style={{ zIndex: 10 + index }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`
          flex flex-col md:flex-row items-center gap-[0px] p-[16px] rounded-[12px] bg-[#111111] overflow-hidden border border-white/5 shadow-2xl
          ${!feature.imageLeft ? 'md:flex-row-reverse' : ''}
        `}
      >
        {/* Large Image Section (62% width) */}
        <div className="md:basis-[62%] w-full aspect-[1.5] relative rounded-[10px] overflow-hidden bg-black/40 group">
          {/* Layer 1: Background Scenery/UI */}
          <img 
            src={feature.bgImage} 
            alt={feature.title} 
            className="absolute inset-0 w-full h-[110%] object-cover opacity-70 transition-transform duration-1000 group-hover:scale-[1.03]"
          />
          
          {/* Layer 2: Foreground IDE Mockup (Overlay) - High Fidelity Placement */}
          <motion.div
            style={{ y: mockupY }}
            className="absolute left-[8%] right-[8%] top-[10%] bottom-[10%] rounded-[8px] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden border border-white/10"
          >
            <img 
              src={feature.mockup} 
              alt="Exact Desktop Mockup" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Focused Text Section (38% width) */}
        <div className="md:basis-[38%] w-full h-full flex flex-col justify-center px-[40px] md:px-[60px] py-[40px] space-y-8">
          <div className="space-y-4">
            <h3 
              className="text-white font-inter font-normal"
              style={{ 
                fontSize: '32px', 
                lineHeight: '1.2em', 
                letterSpacing: '-0.03em' 
              }}
            >
              {feature.title}
            </h3>
            <p 
              className="font-inter font-normal"
              style={{ 
                fontSize: '18px', 
                lineHeight: '1.5em', 
                color: '#858585' 
              }}
            >
              {feature.description}
            </p>
          </div>

          <div className="pt-2">
            <button 
              className="h-11 px-8 rounded-[12px] bg-white text-[#0F0F0F] text-[15px] font-inter font-semibold hover:bg-[#F2F2F2] transition-all hover:scale-[1.03] active:scale-[0.97] shadow-xl"
            >
              {feature.buttonText}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="bg-black pt-[64px] pb-[48px] px-6 md:px-20 relative">
      <div className="max-w-[1133px] mx-auto relative flex flex-col items-start text-left">
        {/* Node 1-364: Features Section Header */}
        <div className="flex flex-col items-start gap-4 mb-20 ml-2">
          {/* Capsule Indicator */}
          <div className="flex items-center gap-[4px] px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-[#858585] text-[14px] font-inter font-normal">//</span>
            <span className="text-[#858585] text-[14px] font-inter font-normal tracking-wide">Core features</span>
          </div>
          
          {/* Main Title */}
          <h2 
            className="text-white font-inter font-normal"
            style={{ 
              fontSize: '32.8px', 
              lineHeight: '1.2em', 
              letterSpacing: '-0.033em' 
            }}
          >
            Code with precision.<br />
            Ship with confidence.
          </h2>
        </div>

        {/* Sticky Scroll Container */}
        <div className="w-full flex flex-col relative space-y-0">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
