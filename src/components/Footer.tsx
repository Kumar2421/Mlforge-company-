const Footer = () => {
  return (
    <footer className="bg-black py-[128px] border-t border-white/5">
      <div className="max-w-[1143px] mx-auto px-6 lg:px-24 flex flex-col lg:flex-row justify-between items-start gap-12">
        
        {/* Left Side: Brand and Tagline */}
        <div className="flex flex-col items-start gap-12 max-w-[400px]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-bold text-black text-[18px]">
               &gt;_
            </div>
            <span className="text-white font-inter font-medium text-[20px] tracking-tight">Exact</span>
          </div>
          
          <div className="flex flex-col gap-8">
            <p className="text-[#858585] font-inter text-[15px] leading-relaxed">
              The AI code editor built for precision. <br />
              Write less, build more, ship faster.
            </p>
            
            <div className="flex items-center gap-2 text-[#858585] text-[13px] font-inter">
              <span>Created by MLForge in Framer</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span>&copy; 2024 MLForge. All rights reserved.</span>
            </div>
          </div>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-inter font-medium text-[15px]">Navigation</h4>
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-[#858585] text-[14px] font-inter hover:text-white transition-colors">Features</a>
              <a href="#usecases" className="text-[#858585] text-[14px] font-inter hover:text-white transition-colors">Use cases</a>
              <a href="#testimonials" className="text-[#858585] text-[14px] font-inter hover:text-white transition-colors">Testimonials</a>
              <a href="#pricing" className="text-[#858585] text-[14px] font-inter hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="text-[#858585] text-[14px] font-inter hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
             <h4 className="text-white font-inter font-medium text-[15px]">Social</h4>
             <div className="flex flex-col gap-4">
                <a href="#" className="text-[#858585] text-[14px] font-inter hover:text-white transition-colors">Twitter (X)</a>
                <a href="#" className="text-[#858585] text-[14px] font-inter hover:text-white transition-colors">GitHub</a>
                <a href="#" className="text-[#858585] text-[14px] font-inter hover:text-white transition-colors">Discord</a>
             </div>
          </div>

          <div className="flex flex-col gap-6">
             <h4 className="text-white font-inter font-medium text-[15px]">Legal</h4>
             <div className="flex flex-col gap-4">
                <a href="#" className="text-[#858585] text-[14px] font-inter hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-[#858585] text-[14px] font-inter hover:text-white transition-colors">Terms of Service</a>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
