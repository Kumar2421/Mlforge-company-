import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="w-full bg-white px-6 md:px-12 lg:px-40 py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-[1240px] mx-auto flex flex-col gap-8 md:gap-14">

        <ScrollReveal>
          <div className="flex flex-col gap-4 max-w-[644px]">
            <h2 className="text-[#0B0C10] text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.02em]">
              Services & Plans.
            </h2>
            <p className="text-[18px] text-[#667085] leading-[1.6] max-w-[540px]">
              Engineered solutions tailored to your scale. From foundational web presence to autonomous enterprise ecosystems.
            </p>
          </div>
        </ScrollReveal>

        {/* Horizontal Stack Layout with Parallax Sticky Scrolling */}
        <div className="flex flex-col w-full gap-[40vh] md:gap-[50vh] pb-[10vh] lg:pb-0">

          {/* Row 1: Web & Mobile */}
          <div className="sticky top-[120px] lg:top-[160px] z-[10] w-full">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col lg:flex-row w-full bg-[#FFFFFF] items-start lg:items-center justify-between p-8 md:p-12 gap-8 lg:gap-16 transition-colors rounded-[2px] shadow-sm border border-gray-100">
                {/* Left Column */}
                <div className="flex flex-col gap-6 w-full lg:w-[32%]">
                  <div className="flex items-end gap-1.5 h-[14px]">
                    <div className="w-2.5 h-3.5 bg-[#0052FF] rounded-t-[1px]"></div>
                    <div className="w-2.5 h-2.5 bg-[#0052FF] rounded-t-[1px]"></div>
                    <div className="w-2.5 h-2.5 bg-[#0052FF] rounded-t-[1px]"></div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h6 className="text-[14px] font-bold text-[#667085] uppercase tracking-widest leading-tight">Foundational</h6>
                    <h4 className="text-[28px] font-bold text-[#0B0C10] leading-[1.2] tracking-[-0.015em] mt-1">Web & Mobile Development</h4>
                  </div>
                  <p className="text-[15px] leading-[1.6] text-[#667085]">
                    Build your core digital presence with high-performance web platforms and native mobile applications engineered for elite UX and speed.
                  </p>
                </div>

                {/* Center Column - Features */}
                <div className="flex flex-col gap-4 w-full lg:w-[40%]">
                  <span className="text-[12px] uppercase tracking-widest text-[#0B0C10] font-bold">Standard Features</span>
                  <ul className="flex flex-col gap-3">
                    {["React & Next.js Ecosystems", "Native iOS & Android Development", "High-Performance Cloud Hosting", "SEO & Core Web Vitals Optimization", "Strategic UI/UX Design"].map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 flex items-center justify-center bg-[#0052FF] rounded-full text-white shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-[14.5px] text-[#202020] font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column - CTA */}
                <div className="w-full lg:w-[25%] flex lg:justify-end">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full lg:w-auto flex items-center justify-between gap-6 bg-[#121212] text-[#FFFFFF] px-6 py-4 rounded-[2px] font-bold text-[13px] uppercase hover:bg-black transition-all"
                  >
                    <span>Start Building</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2: Software / ERP */}
          <div className="sticky top-[140px] lg:top-[180px] z-[20] w-full mt-[-38vh] md:mt-[-47.5vh]">
            <ScrollReveal delay={0.2} direction="none">
              <div className="flex flex-col lg:flex-row w-full bg-[#002878] items-start lg:items-center justify-between p-8 md:p-12 gap-8 lg:gap-16 transition-colors rounded-[2px] shadow-2xl border border-white/5">
                {/* Left Column */}
                <div className="flex flex-col gap-6 w-full lg:w-[32%]">
                  <div className="flex items-end gap-1.5 h-[14px]">
                    <div className="w-2.5 h-2.5 bg-[#FFFFFF] rounded-t-[1px]"></div>
                    <div className="w-2.5 h-3.5 bg-[#FFFFFF] rounded-t-[1px]"></div>
                    <div className="w-2.5 h-2.5 bg-[#FFFFFF] rounded-t-[1px]"></div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h6 className="text-[14px] font-bold text-[#FFFFFF]/70 uppercase tracking-widest leading-tight">Advanced</h6>
                    <h4 className="text-[28px] font-bold text-[#FFFFFF] leading-[1.2] tracking-[-0.015em] mt-1">Custom Software & ERP Systems</h4>
                  </div>
                  <p className="text-[15px] leading-[1.6] text-[#FFFFFF]/80">
                    Bespoke enterprise software and ERP solutions that centralize your data, automate operations, and integrate with biometric hardware.
                  </p>
                </div>

                {/* Center Column - Features */}
                <div className="flex flex-col gap-4 w-full lg:w-[40%]">
                  <span className="text-[12px] uppercase tracking-wider text-[#FFFFFF]/70 font-bold">Industrial Features</span>
                  <ul className="flex flex-col gap-3">
                    {["Custom ERP & Database Architecture", "Biometric Access Control Integration", "Inventory & Resource Planning", "Secure Multi-User Permissions", "Real-time Operational Analytics"].map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 flex items-center justify-center bg-[#FFFFFF] rounded-full text-[#002878] shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-[14.5px] text-[#FFFFFF] font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column - CTA */}
                <div className="w-full lg:w-[25%] flex lg:justify-end">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full lg:w-auto flex items-center justify-between gap-6 bg-[#FFFFFF] text-[#002878] px-6 py-4 rounded-[2px] font-bold text-[13px] uppercase hover:bg-gray-100 transition-all"
                  >
                    <span>Deploy Solution</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 3: AI / SaaS */}
          <div className="sticky top-[160px] lg:top-[200px] z-[30] w-full mt-[-38vh] md:mt-[-47.5vh]">
            <ScrollReveal delay={0.3} direction="none">
              <div className="flex flex-col lg:flex-row w-full bg-[#0052FF] items-start lg:items-center justify-between p-8 md:p-12 gap-8 lg:gap-16 transition-colors rounded-[2px] shadow-2xl border border-white/10">
                {/* Left Column */}
                <div className="flex flex-col gap-6 w-full lg:w-[32%]">
                  <div className="flex items-end gap-1.5 h-[14px]">
                    <div className="w-2.5 h-2.5 bg-[#FFFFFF] rounded-t-[1px]"></div>
                    <div className="w-2.5 h-2.5 bg-[#FFFFFF] rounded-t-[1px]"></div>
                    <div className="w-2.5 h-3.5 bg-[#FFFFFF] rounded-t-[1px]"></div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h6 className="text-[14px] font-bold text-[#FFFFFF]/70 uppercase tracking-widest leading-tight">Elite</h6>
                    <h4 className="text-[28px] font-bold text-[#FFFFFF] leading-[1.2] tracking-[-0.015em] mt-1">AI Agents & SaaS Applications</h4>
                  </div>
                  <p className="text-[15px] leading-[1.6] text-[#FFFFFF]/80">
                    Intelligent automation via custom AI agents and full-scale SaaS platforms designed for global distribution and exponential scale.
                  </p>
                </div>

                {/* Center Column - Features */}
                <div className="flex flex-col gap-4 w-full lg:w-[40%]">
                  <span className="text-[12px] uppercase tracking-wider text-[#FFFFFF]/70 font-bold">Autonomous Features</span>
                  <ul className="flex flex-col gap-3">
                    {["Custom AI Agents & Workflow Automation", "Multi-Tenant SaaS Infrastructure", "Scalable Microservices Architecture", "Advanced Natural Language Processing", "Dedicated Engineering Retainer"].map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 flex items-center justify-center bg-[#FFFFFF] rounded-full text-[#0052FF] shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-[14.5px] text-[#FFFFFF] font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column - CTA */}
                <div className="w-full lg:w-[25%] flex lg:justify-end">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full lg:w-auto flex items-center justify-between gap-6 bg-[#002878] text-[#FFFFFF] px-6 py-4 rounded-[2px] font-bold text-[13px] uppercase hover:brightness-110 transition-all"
                  >
                    <span>Forge Ecosystem</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};

