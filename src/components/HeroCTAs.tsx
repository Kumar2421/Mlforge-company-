import { Link } from 'react-router-dom';

const HeroCTAs = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Link
        to="/download"
        className="h-11 px-8 rounded-[12px] bg-white text-[#0F0F0F] text-[16px] font-inter font-semibold flex items-center justify-center transition-all hover:bg-[#F2F2F2] hover:scale-105 active:scale-95"
      >
        Download
      </Link>
      <Link
        to="/docs"
        className="h-11 px-8 rounded-[12px] border border-white/10 text-white text-[16px] font-inter font-semibold flex items-center justify-center transition-all hover:bg-white/5 active:scale-95"
      >
        Documentation
      </Link>
    </div>
  );
};


export default HeroCTAs;
