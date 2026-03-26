import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: "Can you build custom integrations for our existing ERP?",
      a: "Absolutely. ML Forge Studio specializes in linking new cloud applications and hardware seamlessly with your legacy systems."
    },
    {
      q: "How secure is the biometric attendance system?",
      a: "Our biometric hardware features military-grade encryption and anti-spoofing technology, directly connecting to your secure cloud dashboards."
    },
    {
      q: "What can your AI agents automate?",
      a: "Our custom AI agents handle everything from 24/7 customer support routing to internal data entry and complex CRM management."
    },
    {
      q: "Do you offer full-stack development?",
      a: "Yes. From mobile applications (iOS/Android) to robust web platforms and backend SaaS architecture, we engineer the entire stack."
    },
    {
      q: "How does the consulting phase work?",
      a: "We begin with a strategic architecture phase to understand your core business problems. We then provide a scalable technical blueprint before any code is written."
    },
    {
      q: "Do you offer support for enterprise teams?",
      a: "Yes. Enterprise clients receive a dedicated engineering squad and priority around-the-clock support routing."
    },
    {
      q: "How does pricing work?",
      a: "Pricing depends on the scope of the project. We offer fixed pricing for MVPs and flexible retainers for ongoing Enterprise development."
    },
    {
      q: "Where is ML Forge Studio based?",
      a: "We have a globally distributed remote engineering team, providing agile development and 24/7 coverage for our international clients."
    }
  ];

  return (
    <section id="faq" className="w-full px-6 md:px-12 lg:px-40 py-16 md:py-[120px] bg-[#FFFFFF]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-14">
        
        {/* Header */}
        <div className="max-w-[725px] flex flex-col gap-3">
          <h2 className="text-[#0B0C10] text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.02em]">
            Frequently Asked Questions.
          </h2>
          <p className="text-[18px] leading-[1.6] text-[#667085] max-w-[420px]">
            Simple answers to what most teams ask before partnering with ML Forge Studio.
          </p>
        </div>

        {/* Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 items-start">
           
           <div className="flex flex-col gap-4">
             {faqs.slice(0, 4).map((faq, idx) => (
                <FAQItem key={idx} question={faq.q} answer={faq.a} />
             ))}
           </div>

           <div className="flex flex-col gap-4">
             {faqs.slice(4).map((faq, idx) => (
                <FAQItem key={idx} question={faq.q} answer={faq.a} />
             ))}
           </div>

        </div>

      </div>
    </section>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`w-full flex flex-col transition-all duration-300 border border-gray-100 rounded-[12px] overflow-hidden ${open ? 'bg-[#F8F9FB] shadow-md border-transparent' : 'bg-[#FFFFFF] hover:bg-[#F8F9FB]'}`}>
      <button 
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 outline-none text-left group"
      >
        <h6 className={`text-[17px] md:text-[19px] font-bold transition-colors duration-200 ${open ? 'text-[#0052FF]' : 'text-[#0B0C10]'}`}>{question}</h6>
        <div className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-[#0052FF]' : 'text-[#667085]'}`}>
          {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-1">
              <p className="text-[16px] text-[#667085] leading-[1.6]">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

