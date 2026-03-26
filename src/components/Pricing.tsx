import { motion } from 'framer-motion';
import { useState } from 'react';

const plans = [
  {
    name: "Free",
    price: "€0",
    description: "Perfect for trying Exact. All core features included.",
    buttonText: "Get started",
    popular: false,
    features: [
      "Unlimited local projects",
      "AI autocomplete (basic)",
      "Code chat assistant",
      "50+ languages support"
    ]
  },
  {
    name: "Pro",
    price: "€29",
    description: "For individual developers who need unlimited AI requests.",
    buttonText: "Start 14-day trial",
    popular: true,
    features: [
      "Everything in Free",
      "Unlimited AI requests",
      "Advanced context",
      "Priority responses"
    ]
  },
  {
    name: "Team",
    price: "€59",
    description: "Advanced safety and collaboration for small squads.",
    buttonText: "Join waitlist",
    popular: false,
    features: [
      "Everything in Pro",
      "Shared context",
      "SOC2 compliance",
      "Admin dashboard"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "White-glove support and deployment for large orgs.",
    buttonText: "Contact sales",
    popular: false,
    features: [
      "Everything in Team",
      "Self-hosted VPC",
      "Dedicated manager",
      "SLA guarantees"
    ]
  }
];

const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="bg-black py-[128px] px-6 md:px-20 relative">
      <div className="max-w-[1143px] mx-auto relative flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="flex items-center gap-[4px] px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-[#858585] text-[14px] font-inter font-normal">//</span>
            <span className="text-[#858585] text-[14px] font-inter font-normal tracking-wide">Pricing</span>
          </div>
          
          <h2 
            className="text-white font-inter font-normal"
            style={{ 
              fontSize: '32.6px', 
              lineHeight: '1.2em', 
              letterSpacing: '-0.033em' 
            }}
          >
            Start free. <span className="text-[#858585]">Scale as you grow.</span>
          </h2>
        </div>

        {/* Toggle Switcher */}
        <div className="flex items-center gap-4 mb-16">
           <div className="flex items-center p-1 bg-[#171615] rounded-[12px] border border-white/5 shadow-inner">
             <button
               onClick={() => setBilling('monthly')}
               className={`px-5 py-1.5 rounded-[8px] text-[13px] font-medium transition-all duration-300 ${billing === 'monthly' ? 'bg-[#0A0908] text-white border border-white/10 shadow-lg' : 'text-[#858585] hover:text-white'}`}
             >
               Monthly
             </button>
             <button
               onClick={() => setBilling('yearly')}
               className={`px-5 py-1.5 rounded-[8px] text-[13px] font-medium transition-all duration-300 ${billing === 'yearly' ? 'bg-[#0A0908] text-white border border-white/10 shadow-lg' : 'text-[#858585] hover:text-white'}`}
             >
               Yearly
             </button>
           </div>
           {billing === 'yearly' && (
             <span className="text-[#858585] text-[13px] font-inter">Save 20%</span>
           )}
        </div>

        {/* Pricing Cards Grid (LG: GRID-COLS-4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`
                relative p-8 rounded-[12px] flex flex-col bg-[#171615] border border-white/5 transition-all duration-300 group hover:border-white/10
              `}
            >
              <div className="flex flex-col h-full">
                {/* Card Header */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#858585] font-inter text-[12px] uppercase tracking-widest">{plan.name}</span>
                    {plan.popular && (
                      <div className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-white text-[10px] uppercase font-inter">
                        Popular
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-white font-jetbrains-mono text-[28px] font-normal tracking-tighter" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-[#858585] text-[12px] font-inter">/mo</span>
                    )}
                  </div>
                  
                  <p className="text-[#858585] text-[13px] leading-[1.5] font-inter min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                {/* Main CTA */}
                <div className="mb-6">
                  <button 
                    className={`
                      w-full py-2.5 rounded-[8px] text-[13px] font-medium transition-all duration-200
                      ${plan.popular 
                        ? 'bg-white text-black hover:bg-[#F2F2F2]' 
                        : 'bg-transparent text-white border border-white/10 hover:bg-white/5'
                      }
                    `}
                  >
                    {plan.buttonText}
                  </button>
                </div>

                {/* Features Divider */}
                <div className="relative mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/5"></div>
                  </div>
                  <span className="relative px-2 bg-[#171615] text-[#858585] text-[10px] font-inter tracking-wider uppercase">Features</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-2 flex-grow">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2.5 text-[12.5px] text-[#bfbdb6] font-inter leading-relaxed">
                      <div className="mt-1 flex-shrink-0 w-3.5 h-3.5 border border-white/10 flex items-center justify-center text-white/40">
                         <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 3L3 5L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>
                      </div>
                      <span className="opacity-70 group-hover:opacity-100 transition-opacity">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
