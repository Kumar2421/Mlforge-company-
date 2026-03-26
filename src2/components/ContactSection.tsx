import React from 'react';
import { Button } from './Button';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full px-6 md:px-12 lg:px-40 py-16 md:py-[104px] bg-white">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Text and Images */}
        <div className="flex-1 flex flex-col gap-10 max-w-[725px]">
          {/* Avatar images */}
          <div className="flex flex-wrap gap-4 md:gap-8">
            {[ '#0052FF', '#0B0C10', '#002878' ].map((color, i) => (
              <div key={i} className="relative w-20 h-20 md:w-24 md:h-24 bg-[#f4f4f4] rounded-full flex items-center justify-center p-2">
                <div className="w-full h-full bg-gray-300 rounded-full overflow-hidden">
                   <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt="avatar" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
                </div>
                <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white" style={{ backgroundColor: color }}></div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-4xl md:text-[45.4px] font-medium leading-[1.1] text-[#202020] tracking-tight">
              Talk to an ML Forge Studio expert.
            </h2>
            <p className="text-[15px] leading-relaxed text-[#5f5f5f] max-w-[420px]">
              No bots. No ticket numbers. Just real people who understand how you work and how to help you move faster and further.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 w-full max-w-[540px]">
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[15.6px] text-[#5f5f5f]">Name</label>
                <input type="text" placeholder="Jane Smith" className="w-full bg-[#f4f4f4] text-[#202020] px-4 py-3 rounded outline-none focus:ring-1 focus:ring-[#0a3eff] transition-shadow placeholder:text-[#878787]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[15.6px] text-[#5f5f5f]">Email</label>
                <input type="email" placeholder="jane@mail.com" className="w-full bg-[#f4f4f4] text-[#202020] px-4 py-3 rounded outline-none focus:ring-1 focus:ring-[#0a3eff] transition-shadow placeholder:text-[#878787]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[15.3px] text-[#5f5f5f]">Phone number</label>
                <input type="text" placeholder="+33 X XX XX XX XX" className="w-full bg-[#f4f4f4] text-[#202020] px-4 py-3 rounded outline-none focus:ring-1 focus:ring-[#0a3eff] transition-shadow placeholder:text-[#878787]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[15.3px] text-[#5f5f5f]">Location</label>
                <input type="text" placeholder="UE" className="w-full bg-[#f4f4f4] text-[#202020] px-4 py-3 rounded outline-none focus:ring-1 focus:ring-[#0a3eff] transition-shadow placeholder:text-[#878787]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[15.4px] text-[#5f5f5f]">Company name</label>
                <input type="text" placeholder="Framer" className="w-full bg-[#f4f4f4] text-[#202020] px-4 py-3 rounded outline-none focus:ring-1 focus:ring-[#0a3eff] transition-shadow placeholder:text-[#878787]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[15.1px] text-[#5f5f5f]">Company size</label>
                <select className="w-full bg-[#f4f4f4] text-[#878787] px-4 py-3 rounded outline-none focus:ring-1 focus:ring-[#0a3eff] transition-shadow appearance-none cursor-pointer">
                  <option value="">Select...</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label className="text-[15.6px] text-[#5f5f5f]">Message</label>
              <textarea placeholder="Message" rows={5} className="w-full bg-[#f4f4f4] text-[#202020] px-4 py-3 rounded outline-none focus:ring-1 focus:ring-[#0a3eff] transition-shadow resize-none placeholder:text-[#878787]"></textarea>
            </div>

            <div className="mt-4">
               <Button variant="primary" className="w-full justify-center">Send message</Button>
               <p className="text-[12.3px] text-[#5f5f5f] mt-4 text-center">Responses usually take 48 hours.</p>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
