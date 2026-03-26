import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from './auth/AuthLayout';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/reset-password');
    }, 1500);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col">
        <h1 className="text-[#111827] text-[36px] font-bold tracking-tight mb-2">Reset password</h1>
        <p className="text-[#6B7280] text-[14px] mb-8 font-medium">Enter your email and we'll send a code to reset it.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[#374151] text-[13px] font-medium">Email address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 px-4 bg-white border border-[#E5E7EB] rounded-lg text-[#111827] text-[14px] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3ECF8E]/10 focus:border-[#3ECF8E] transition-all shadow-sm"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !email}
            className="w-full h-11 bg-[#3ECF8E] hover:bg-[#34b27b] text-white font-bold text-[14px] rounded-lg shadow-sm active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center tracking-tight"
          >
            {isLoading ? 'Sending code...' : 'Send reset code'}
          </button>
        </form>

        <Link to="/login" className="mt-12 text-center text-black font-bold hover:underline underline-offset-4 decoration-[#3ECF8E] hover:text-[#3ECF8E] transition-colors text-[14px]">
           Back to sign in
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
