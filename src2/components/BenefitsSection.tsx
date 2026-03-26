import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Custom Pixel Art Grid Icons
const ReliableSupportIcon = () => (
    <div className="grid grid-cols-3 w-6 h-6 gap-0.5">
        <div className="bg-white"></div><div className="bg-transparent"></div><div className="bg-white"></div>
        <div className="bg-transparent"></div><div className="bg-white"></div><div className="bg-transparent"></div>
        <div className="bg-white"></div><div className="bg-transparent"></div><div className="bg-white"></div>
    </div>
);

const SeamlessExperienceIcon = () => (
    <div className="grid grid-cols-4 w-6 h-6 gap-0.5">
        <div className="bg-white"></div><div className="bg-transparent"></div><div className="bg-transparent"></div><div className="bg-transparent"></div>
        <div className="bg-transparent"></div><div className="bg-white"></div><div className="bg-transparent"></div><div className="bg-transparent"></div>
        <div className="bg-transparent"></div><div className="bg-transparent"></div><div className="bg-white"></div><div className="bg-transparent"></div>
        <div className="bg-transparent"></div><div className="bg-transparent"></div><div className="bg-transparent"></div><div className="bg-white"></div>
    </div>
);

const ScalableFoundationIcon = () => (
    <div className="grid grid-cols-3 w-6 h-6 gap-1">
        {Array(9).fill(0).map((_, i) => (
            <div key={i} className="bg-white w-full h-full"></div>
        ))}
    </div>
);

const TrustedByTeamsIcon = () => (
    <div className="grid grid-cols-3 w-6 h-6 gap-1">
        <div className="bg-transparent"></div><div className="bg-white"></div><div className="bg-transparent"></div>
        <div className="bg-white"></div><div className="bg-white"></div><div className="bg-white"></div>
        <div className="bg-transparent"></div><div className="bg-white"></div><div className="bg-transparent"></div>
    </div>
);

export const BenefitsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFFFF] px-0 py-4 flex justify-center overflow-hidden">
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="w-full max-w-[1400px] bg-[#002878] px-8 md:px-24 py-20 md:py-28 flex flex-col items-center justify-center gap-16 md:gap-20 sm:rounded-[2px]"
      >
        
        {/* Header Section */}
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center text-center gap-6 w-full max-w-[800px]">
          <h2 className="text-[#FFFFFF] font-medium leading-[1.05] tracking-[-0.03em] text-[42px] md:text-[52px]">
            Why choose ML Forge Studio?
          </h2>
          <p className="text-[#FFFFFF] opacity-80 font-medium leading-[1.5] tracking-[-0.01em] text-[16px] md:text-[18px] max-w-[700px]">
            ML Forge Studio is built around the fundamentals that make products reliable in real-world use. Clear structure and thoughtful decisions across every layer ensure teams can work with confidence and scale over time.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 items-start w-full">
          
          {/* Column 1 */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6 text-left">
            <div className="flex text-[#FFFFFF] items-center">
              <ReliableSupportIcon />
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="font-medium text-[#FFFFFF] text-[22px] md:text-[24px] tracking-[-0.02em]">Reliable support</h5>
              <p className="font-medium text-[#FFFFFF] opacity-70 text-[15px] leading-[1.5] tracking-[-0.01em] pr-4">
                Clear answers from real people who understand your team, your context, and your priorities.
              </p>
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6 text-left">
            <div className="flex text-[#FFFFFF] items-center">
              <SeamlessExperienceIcon />
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="font-medium text-[#FFFFFF] text-[22px] md:text-[24px] tracking-[-0.02em]">Seamless experience</h5>
              <p className="font-medium text-[#FFFFFF] opacity-70 text-[15px] leading-[1.5] tracking-[-0.01em] pr-4">
                A consistent experience built to reduce friction and support everyday work across teams.
              </p>
            </div>
          </motion.div>

          {/* Column 3 */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6 text-left">
            <div className="flex text-[#FFFFFF] items-center">
              <ScalableFoundationIcon />
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="font-medium text-[#FFFFFF] text-[22px] md:text-[24px] tracking-[-0.02em]">Scalable foundation</h5>
              <p className="font-medium text-[#FFFFFF] opacity-70 text-[15px] leading-[1.5] tracking-[-0.01em] pr-4">
                Built to handle growth without adding complexity, even as teams and workflows evolve over time.
              </p>
            </div>
          </motion.div>

          {/* Column 4 */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6 text-left">
            <div className="flex text-[#FFFFFF] items-center">
              <TrustedByTeamsIcon />
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="font-medium text-[#FFFFFF] text-[22px] md:text-[24px] tracking-[-0.02em]">Trusted by teams</h5>
              <p className="font-medium text-[#FFFFFF] opacity-70 text-[15px] leading-[1.5] tracking-[-0.01em] pr-4">
                Used daily by teams who need stable systems they can rely on without second-guessing their tools.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>

    </section>
  );
};


