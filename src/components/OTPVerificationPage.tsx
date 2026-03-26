import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from './auth/AuthLayout';

const OTPVerificationPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[value.length - 1];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

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
        <h1 className="text-[#111827] text-[32px] font-bold tracking-tight mb-2">Check your email</h1>
        <p className="text-[#6B7280] text-[15px] mb-12">We've sent a 6-digit verification code to your inbox.</p>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="flex justify-between gap-2 lg:gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-full h-14 bg-white border border-[#E5E7EB] rounded-lg text-[#111827] text-center text-[20px] font-bold focus:outline-none focus:ring-2 focus:ring-[#3ECF8E]/10 focus:border-[#3ECF8E] transition-all shadow-sm"
              />
            ))}
          </div>

          <div className="space-y-5">
            <button
              type="submit"
              disabled={isLoading || otp.some(d => !d)}
              className="w-full h-11 bg-[#3ECF8E] hover:bg-[#34b27b] text-white font-bold text-[14px] rounded-lg shadow-sm active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center tracking-tight"
            >
              {isLoading ? 'Verifying...' : 'Verify account'}
            </button>

            <div className="text-center">
              <button type="button" className="text-[#6B7280] text-[13px] font-medium hover:text-[#3ECF8E] transition-colors underline-offset-4 hover:underline">
                Didn't receive a code? Resend
              </button>
            </div>
          </div>
        </form>

        <Link to="/login" className="mt-12 text-center text-black font-bold hover:underline underline-offset-4 decoration-[#3ECF8E] hover:text-[#3ECF8E] transition-colors text-[14px]">
           Back to sign in
        </Link>
      </div>
    </AuthLayout>
  );
};

export default OTPVerificationPage;
