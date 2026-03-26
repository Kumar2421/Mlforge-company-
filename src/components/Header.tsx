import { motion } from 'framer-motion';
import HeroCTAs from './HeroCTAs';
import heroBg from '../assets/hero-bg.png';
import heroMockup from '../assets/hero-mockup.png';

const Header = () => {
  const words = ["Code", "with", "exact", "precision."];
  const subtext = "The AI-native code editor that gets it really right.".split(" ");

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="mx-auto flex flex-col items-center"
        style={{
          width: '100%',
          maxWidth: '1920px',
          paddingTop: 'clamp(100px, 10vw, 140px)',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
          paddingBottom: 'clamp(48px, 4vw, 96px)',
          gap: 'clamp(48px, 5vw, 80px)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
          style={{ width: '100%', maxWidth: '800px', gap: '32px' }}
        >
          <h1
            className="font-inter font-normal text-white"
            style={{
              fontSize: '51.8px',
              lineHeight: '1.081081097em',
              letterSpacing: '-0.032432432em',
            }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="inline-block"
                style={{ marginRight: i === words.length - 1 ? 0 : '0.3em' }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <div className="flex flex-wrap justify-center" style={{ width: '100%', maxWidth: '800px' }}>
            {subtext.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.03, duration: 0.4 }}
                className="font-inter font-normal"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.3em',
                  color: 'var(--color-text-secondary)',
                  marginRight: '4px',
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <HeroCTAs />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8, ease: 'easeOut' }}
          className="w-full relative px-6 md:px-20"
        >
          <div className="mx-auto w-full max-w-[1280px] relative rounded-[12px] overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="relative w-full" style={{ aspectRatio: '1080 / 605.27' }}>
              {/* Main BG Image */}
              <img 
                src={heroBg} 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              
              {/* Inner Mockup Image */}
              <div
                className="absolute overflow-hidden"
                style={{
                  left: '13.157%',
                  top: '8%',
                  width: '73.684%',
                  height: '84%',
                  borderRadius: '8px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                }}
              >
                <img 
                  src={heroMockup} 
                  alt="Exact Desktop Mockup" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
