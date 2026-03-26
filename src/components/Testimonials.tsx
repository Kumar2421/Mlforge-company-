import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Exact cut my development time in half. The AI actually understands what I'm building and suggests exactly what I need. No more wading through irrelevant completions.",
    author: "Sarah Chen",
    role: "Senior Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    quote: "Zero setup, instant productivity. I switched from Cursor and never looked back. Exact just works, and it's noticeably faster. The refactoring feature alone is worth it.",
    author: "James Miller",
    role: "Full-stack Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
  },
  {
    quote: "Finally, an AI editor that doesn't feel like it's guessing. Context-aware suggestions that actually make sense. It's like pair programming with someone who knows your codebase.",
    author: "Emma Larsson",
    role: "Product Lead",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
  },
  {
    quote: "Best AI autocomplete I've ever used. It's like Exact reads my mind—one suggestion, always the right one. And the privacy-first approach gives me peace of mind.",
    author: "Ethan R",
    role: "DevOps Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ethan"
  },
  {
    quote: "The precision is unmatched—it gets my code style, understands dependencies, and never breaks my builds. Game changer.",
    author: "Marcus Aurelius",
    role: "Software Architect",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  },
  {
    quote: "Exact eliminated the back-and-forth I had with other AI assistants. Ask once, get the exact answer with line numbers and context.",
    author: "Sofia Rodriguez",
    role: "Frontend Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia"
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="p-8 rounded-[12px] bg-[#0A0908] border border-white/5 flex flex-col justify-between gap-8 h-full group hover:border-white/10 transition-colors"
    >
      <p className="text-[#bfbdb6] font-inter font-normal text-[16px] leading-relaxed italic">
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
          <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-inter font-medium text-[14px]">{testimonial.author}</span>
          <span className="text-[#858585] font-inter font-normal text-[12px]">{testimonial.role}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-black py-[96px] px-6 md:px-20 relative">
      <div className="max-w-[1133px] mx-auto relative flex flex-col items-start text-left">

        {/* Header (Matching 1-658) */}
        <div className="flex flex-col items-start gap-4 mb-16 ml-2">
          <div className="flex items-center gap-[4px] px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-[#858585] text-[14px] font-inter font-normal">//</span>
            <span className="text-[#858585] text-[14px] font-inter font-normal tracking-wide">Testimonials</span>
          </div>

          <h2
            className="text-white font-inter font-normal"
            style={{
              fontSize: '32.3px',
              lineHeight: '1.2em',
              letterSpacing: '-0.033em'
            }}
          >
            Loved by developers.<br />
            <span className="text-[#858585]">Built for productivity.</span>
          </h2>
        </div>

        {/* Testimonials Grid (Masonry-like) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
