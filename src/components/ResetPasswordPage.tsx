import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from './auth/AuthLayout';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login');
    }, 1500);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col">
        <h1 className="text-[#111827] text-[32px] font-bold tracking-tight mb-2">Create new password</h1>
        <p className="text-[#6B7280] text-[15px] mb-12 font-medium">Protect your account with a secure, strong password.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[#374151] text-[13px] font-medium">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 px-4 bg-white border border-[#E5E7EB] rounded-lg text-[#111827] text-[14px] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3ECF8E]/10 focus:border-[#3ECF8E] transition-all shadow-sm"
                placeholder="••••••••"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#374151] p-1 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[#374151] text-[13px] font-medium">Confirm Password</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-11 px-4 bg-white border border-[#E5E7EB] rounded-lg text-[#111827] text-[14px] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3ECF8E]/10 focus:border-[#3ECF8E] transition-all shadow-sm"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || password !== confirmPassword || !password}
            className="w-full h-11 mt-4 bg-[#3ECF8E] hover:bg-[#34b27b] text-white font-bold text-[14px] rounded-lg shadow-sm active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center tracking-tight"
          >
            {isLoading ? 'Resetting...' : 'Reset password'}
          </button>
        </form>

        <Link to="/login" className="mt-12 text-center text-black font-bold hover:underline underline-offset-4 decoration-[#3ECF8E] hover:text-[#3ECF8E] transition-colors text-[14px]">
           Back to sign in
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
