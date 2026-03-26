import { motion } from 'framer-motion';

const Social = () => {
  const row1 = [
    { name: 'SignFlow', fontFamily: 'Inter', fontWeight: 600, letterSpacing: '-0.03em' },
    { name: 'CloudFlow', fontFamily: 'Geist', fontWeight: 500, letterSpacing: '-0.02em' },
    { name: 'NotionFlow', fontFamily: 'Hanken Grotesk', fontWeight: 500, letterSpacing: '-0.02em' },
    { name: 'DataFlow', fontFamily: 'Instrument Sans', fontWeight: 500, letterSpacing: '-0.05em' },
  ];

  const row2 = [
    { name: 'NotionFlow', fontFamily: 'Hanken Grotesk', fontWeight: 500, letterSpacing: '-0.02em' },
    { name: 'DataFlow', fontFamily: 'Instrument Sans', fontWeight: 500, letterSpacing: '-0.05em' },
    { name: 'SignFlow', fontFamily: 'Inter', fontWeight: 600, letterSpacing: '-0.03em' },
    { name: 'CloudFlow', fontFamily: 'Geist', fontWeight: 500, letterSpacing: '-0.02em' },
  ];

  // Double the content for a seamless loop
  const marqueeContent = [...row1, ...row1, ...row1, ...row1];
  const marqueeContent2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="w-full bg-black py-24 overflow-hidden">
      <div className="mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-col items-center text-center max-w-[580px] gap-2 px-6">
          <p className="text-white text-xl font-medium tracking-tight opacity-90">
            Trusted by developers at leading companies
          </p>
          <p className="text-neutral-500 text-base font-normal">
            Powering mission-critical visual AI workflows worldwide.
          </p>
        </div>

        <div className="w-full flex flex-col gap-12 relative">
          {/* Row 1 - Right to Left */}
          <div className="flex overflow-hidden select-none">
            <motion.div 
              className="flex items-center gap-24 whitespace-nowrap min-w-full"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {marqueeContent.map((brand, i) => (
                <div key={`${brand.name}-r1-${i}`} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-transparent" />
                  <span
                    style={{
                      fontSize: '20px',
                      fontFamily: brand.fontFamily,
                      fontWeight: brand.fontWeight,
                      letterSpacing: brand.letterSpacing,
                      color: '#FFFFFF',
                    }}
                  >
                    {brand.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Right to Left (offset slightly for variety) */}
          <div className="flex overflow-hidden select-none">
            <motion.div 
              className="flex items-center gap-24 whitespace-nowrap min-w-full"
              animate={{ x: [-500, -1500] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {marqueeContent2.map((brand, i) => (
                <div key={`${brand.name}-r2-${i}`} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-transparent" />
                  <span
                    style={{
                      fontSize: '20px',
                      fontFamily: brand.fontFamily,
                      fontWeight: brand.fontWeight,
                      letterSpacing: brand.letterSpacing,
                      color: '#FFFFFF',
                    }}
                  >
                    {brand.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Faded edges for better premium feel */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        </div>
      </div>
    </section>


  );
};

export default Social;
