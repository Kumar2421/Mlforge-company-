import { motion } from 'framer-motion';

const Social = () => {
  const row1 = [
    { name: 'SignFlow', fontFamily: 'Inter', fontWeight: 600, letterSpacing: '-0.03em' },
    { name: 'CloudSync', fontFamily: 'Geist', fontWeight: 500, letterSpacing: '-0.02em' },
    { name: 'NotionKit', fontFamily: 'Hanken Grotesk', fontWeight: 500, letterSpacing: '-0.02em' },
    { name: 'DataStream', fontFamily: 'Instrument Sans', fontWeight: 500, letterSpacing: '-0.05em' },
  ];

  const row2 = [
    { name: 'NotionKit', fontFamily: 'Hanken Grotesk', fontWeight: 500, letterSpacing: '-0.02em' },
    { name: 'DataStream', fontFamily: 'Instrument Sans', fontWeight: 500, letterSpacing: '-0.05em' },
    { name: 'SignFlow', fontFamily: 'Inter', fontWeight: 600, letterSpacing: '-0.03em' },
    { name: 'CloudSync', fontFamily: 'Geist', fontWeight: 500, letterSpacing: '-0.02em' },
  ];

  return (
    <section className="w-full">
      <div
        className="mx-auto flex flex-col items-center"
        style={{
          width: '100%',
          maxWidth: '1133px',
          padding: '64px 80px',
          gap: '48px',
        }}
      >
        <div className="flex flex-col items-center text-center" style={{ width: '100%', maxWidth: '580px', gap: '8px' }}>
          <p
            className="font-inter font-normal"
            style={{
              fontSize: '20px',
              lineHeight: '1.2em',
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
            }}
          >
            Trusted by developers at leading companies
          </p>

          <p
            className="font-inter font-normal"
            style={{
              fontSize: '16px',
              lineHeight: '1.3em',
              color: 'var(--color-text-secondary)',
            }}
          >
            Used by developers at
          </p>
        </div>

        <div className="w-full" style={{ height: '98px', paddingLeft: 'clamp(0px, 12vw, 148px)' }}>
          <div className="flex flex-col" style={{ gap: '40px' }}>
            <div className="flex w-full items-center justify-between" style={{ height: '29px' }}>
              {row1.map((brand, i) => (
                <motion.div
                  key={`${brand.name}-${i}`}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center"
                  style={{ gap: '8px' }}
                >
                  <div style={{ width: '29px', height: '29px' }} />
                  <span
                    style={{
                      fontSize: '18px',
                      lineHeight: '1.2em',
                      fontFamily: brand.fontFamily,
                      fontWeight: brand.fontWeight,
                      letterSpacing: brand.letterSpacing,
                      color: '#FFFFFF',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {brand.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex w-full items-center justify-between" style={{ height: '29px' }}>
              {row2.map((brand, i) => (
                <motion.div
                  key={`${brand.name}-b-${i}`}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="flex items-center"
                  style={{ gap: '8px' }}
                >
                  <div style={{ width: '29px', height: '29px' }} />
                  <span
                    style={{
                      fontSize: '18px',
                      lineHeight: '1.2em',
                      fontFamily: brand.fontFamily,
                      fontWeight: brand.fontWeight,
                      letterSpacing: brand.letterSpacing,
                      color: '#FFFFFF',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {brand.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
