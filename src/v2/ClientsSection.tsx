import React from 'react';
import { LayoutGrid, Star } from 'lucide-react';

const testimonials = [
    { text: "ML Forge Studio helped us move faster without sacrificing architectural quality. The custom solutions feel truly production-ready.", name: "Cristofer Levin", role: "Frontend engineer", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" },
    { text: "The attention to detail in their ERP systems is impressive. Saved me hours of repetitive work and manual entry. Highly recommended.", name: "Rohan Mehta", role: "Startup founder", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" },
    { text: "We were able to ship our mobile app faster using ML Forge's core modules. The consistency across platforms is exceptional.", name: "Jason Kim", role: "Product designer", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60" },
    { text: "ML Forge Studio feels like it was built by people who actually ship enterprise products. Their AI agents are clean and easy to integrate.", name: "Alex Turner", role: "Full stack developer", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60" },
    { text: "They helped us maintain database consistency across multiple biometric hardware integrations. It's now our core infrastructure.", name: "Sofia Martinez", role: "UX designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop" },
    { text: "Our team productivity improved noticeably after adopting their automated workflow tools. It reduced the friction of scale.", name: "Daniel Wong", role: "UI designer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200" }
];

const rows = [
    { start: 0, end: 3, className: "animate-scroll" },
    { start: 3, end: 6, className: "animate-scroll-reverse" }
];

export const ClientsSection: React.FC = () => {
  const renderCard = (testimonial: any, index: number) => (
    <div key={index} className="bg-white border border-slate-200 hover:border-slate-300 rounded-[12px] p-6 shrink-0 w-[350px] transition-all duration-300 hover:shadow-xl">
        <div className="flex mb-4 gap-0.5">
            {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-transparent fill-[#0052FF]" />
            ))}
        </div>
        <p className="text-[#0B0C10] text-[15px] font-medium leading-[1.6] mb-6 line-clamp-3">"{testimonial.text}"</p>
        <div className="flex items-center gap-3 mt-auto">
            <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover border border-gray-100 shadow-sm"/>
            <div>
                <p className="font-bold text-[#0B0C10] text-sm leading-tight">{testimonial.name}</p>
                <p className="text-[#667085] text-[13px] font-medium tracking-tight uppercase">{testimonial.role}</p>
            </div>
        </div>
    </div>
  );

  return (
    <>
        <style>
            {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scrollReverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll-reverse {
                    animation: scrollReverse 30s linear infinite;
                }
                /* Pause animation on hover for better UX */
                .animate-scroll:hover, .animate-scroll-reverse:hover {
                    animation-play-state: paused;
                }
            `}
        </style>

        <section className="w-full bg-[#FFFFFF] py-16 md:py-[80px] overflow-hidden border-t border-gray-50">
            <div className="w-full max-w-[1240px] mx-auto px-6 md:px-12 lg:px-40 flex flex-col gap-12">
                
                {/* Logos Part (From original ClientsSection) */}
                <div className="flex flex-col gap-6">
                    <h6 className="text-[#667085] font-bold text-[12px] tracking-[0.1em] uppercase text-center md:text-left opacity-80">
                        Trusted by industry leaders.
                    </h6>
                    <div className="flex flex-wrap items-center justify-between gap-8 opacity-20 grayscale hover:opacity-40 transition-opacity duration-300">
                        <div className="flex items-center gap-2 font-bold text-xl text-[#0B0C10]"><LayoutGrid className="w-5 h-5" /> Acme Corp</div>
                        <div className="flex items-center gap-2 font-bold text-xl text-[#0B0C10]"><LayoutGrid className="w-5 h-5" /> Globex</div>
                        <div className="flex items-center gap-2 font-bold text-xl text-[#0B0C10]"><LayoutGrid className="w-5 h-5" /> Initech</div>
                        <div className="flex items-center gap-2 font-bold text-xl text-[#0B0C10]"><LayoutGrid className="w-5 h-5" /> Soylent</div>
                        <div className="flex items-center gap-2 font-bold text-xl text-[#0B0C10]"><LayoutGrid className="w-5 h-5" /> Umbrella</div>
                    </div>
                </div>

                {/* Combined Content (Header + Quotes) */}
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex flex-col gap-3 max-w-xl">
                            <div className="inline-flex w-fit bg-[#F8F9FB] border border-[#EEEEEE] rounded-full px-3 py-1">
                                <span className="text-[11px] font-bold text-[#667085] uppercase tracking-wider">Loved by clients</span>
                            </div>
                            <h2 className="text-[28px] md:text-[36px] font-bold text-[#0B0C10] leading-[1.1] tracking-[-0.02em]">
                                What people are saying.
                            </h2>
                        </div>
                        <p className="text-[#667085] text-[15px] max-w-[360px] leading-relaxed font-medium">
                            Real feedback from teams building enterprise products with ML Forge Studio.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {rows.map((row, rowIndex) => (
                            <div key={rowIndex} className="relative overflow-hidden w-full">
                                {/* Gradient Fades */}
                                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

                                <div className={`flex gap-6 ${row.className}`}>
                                    {[...testimonials.slice(row.start, row.end), ...testimonials.slice(row.start, row.end), ...testimonials.slice(row.start, row.end)].map((testimonial, index) =>
                                        renderCard(testimonial, index)
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    </>
  );
};


