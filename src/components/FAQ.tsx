import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: "Is Exact really free?",
    answer: "Yes, Exact is completely free for local projects. We only charge for cloud-based collaboration features and priority AI compute in our Pro and Team tiers."
  },
  {
    question: "How does Exact compare to Cursor or GitHub Copilot?",
    answer: "Exact is built from the ground up for deep context and multi-file editing. Unlike extensions, it's a standalone environment that understands your entire dependency graph and architectural patterns."
  },
  {
    question: "Is my code private?",
    answer: "Absolutely. Your code never leaves your machine unless you explicitly enable cloud sync. Our local-first architecture ensures that AI processing happens with maximum privacy."
  },
  {
    question: "What languages does Exact support?",
    answer: "We support 50+ languages out of the box, including TypeScript, Python, Go, Rust, and Java. Our specialized models are trained on the latest frameworks and libraries."
  },
  {
    question: "Can I use Exact offline?",
    answer: "Yes, the core editor and basic AI features work offline. Advanced multi-file reasoning may require a brief connection to our optimized inference servers."
  },
  {
    question: "How do I migrate from my current editor?",
    answer: "Transitioning is easy. You can import your VS Code keybindings and extensions directly into Exact, making you feel at home in seconds."
  }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-[16px] font-inter font-medium transition-colors ${isOpen ? 'text-white' : 'text-[#858585] group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#858585] text-[14px] leading-relaxed max-w-[90%]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="bg-black py-[128px] px-6 md:px-20 relative">
      <div className="max-w-[1143px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
        
        {/* Left Side: Header */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-[4px] px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-[#858585] text-[14px] font-inter font-normal">//</span>
            <span className="text-[#858585] text-[14px] font-inter font-normal tracking-wide">FAQ</span>
          </div>
          
          <h2 
            className="text-white font-inter font-normal"
            style={{ 
              fontSize: '32.6px', 
              lineHeight: '1.2em', 
              letterSpacing: '-0.033em' 
            }}
          >
            Questions? <br />
            <span className="text-[#858585]">We've got answers.</span>
          </h2>
        </div>

        {/* Right Side: Questions Accordion */}
        <div className="flex flex-col bg-[#0A0908] border border-white/5 rounded-[12px] p-6 md:p-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
