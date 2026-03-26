import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from './auth/AuthLayout';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/otp-verification');
    }, 1500);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col h-full justify-center">
        <h1 className="text-[#111827] text-[36px] font-bold tracking-tight mb-1">Get started</h1>
        <p className="text-[#6B7280] text-[14px] mb-6 font-medium">Create a new account</p>

        {/* Social Buttons */}
        <div className="space-y-3 mb-6">
          <button className="w-full h-11 flex items-center justify-center gap-3 px-4 bg-white border border-[#E5E7EB] rounded-lg text-[#111827] font-medium text-[13px] hover:bg-gray-50 transition-all shadow-sm relative">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            Continue with GitHub
            <span className="absolute -top-2.5 -right-2 bg-[#3ECF8E] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm">LAST USED</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-6 text-center">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#E5E7EB]" />
          <span className="relative z-10 px-4 bg-white text-[#9CA3AF] text-[11px] uppercase tracking-wider font-semibold">or</span>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-3.5">
          <div className="space-y-1">
            <label className="text-[#374151] text-[12px] font-semibold">Email address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 px-3.5 bg-white border border-[#E5E7EB] rounded-lg text-[#111827] text-[13px] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3ECF8E]/10 focus:border-[#3ECF8E] transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#374151] text-[12px] font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 px-3.5 bg-white border border-[#E5E7EB] rounded-lg text-[#111827] text-[13px] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3ECF8E]/10 focus:border-[#3ECF8E] transition-all"
                placeholder="••••••••"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#374151] p-1">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[#374151] text-[12px] font-semibold">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-10 px-3.5 bg-white border border-[#E5E7EB] rounded-lg text-[#111827] text-[13px] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3ECF8E]/10 focus:border-[#3ECF8E] transition-all"
                placeholder="••••••••"
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#374151] p-1">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2.5 pt-1">
            <input 
              type="checkbox" 
              id="terms" 
              required
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-0.5 w-3.5 h-3.5 accent-[#3ECF8E] border-[#E5E7EB] rounded cursor-pointer"
            />
            <label htmlFor="terms" className="text-[11px] text-[#6B7280] leading-[1.4] cursor-pointer selection:bg-transparent">
              Accept <Link to="/" className="underline text-black font-medium">Terms of Service</Link> & <Link to="/" className="underline text-black font-medium">Privacy Policy</Link>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading || !agree}
            className="w-full h-11 mt-4 bg-[#3ECF8E] hover:bg-[#34b27b] text-white font-bold text-[14px] rounded-lg shadow-sm active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center tracking-tight"
          >
            {isLoading ? 'Creating account...' : 'Sign up'}
          </button>
        </form>

        <p className="mt-6 text-center text-[#6B7280] text-[13px]">
           Already have an account? <Link to="/login" className="text-black font-bold hover:underline underline-offset-4 decoration-[#3ECF8E]">Sign in</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;
