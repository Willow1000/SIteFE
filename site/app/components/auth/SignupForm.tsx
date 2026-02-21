'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    sourceOfCapital: '',
    investmentAmount: '',
    referralSource: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Registration successful! Our institutional team will contact you shortly.');
    window.location.href = '/';
  };

  const progress = (step / 3) * 100;

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12 relative h-1 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-[#4a9d7e] transition-all duration-700 ease-out shadow-[0_0_10px_rgba(74,157,126,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="bg-[#252836]/30 backdrop-blur-xl border border-gray-800 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">
        {/* Background Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#4a9d7e]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#4a9d7e]/10 transition-all duration-700" />

        <form onSubmit={handleSubmit} className="relative z-10">
          {/* Step 1: Personal Details */}
          {step === 1 && (
            <div className="animate-fade-in space-y-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-3">Create Account</h2>
                <p className="text-gray-400">Step 1: Your Personal Identity</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">First Name</label>
                  <input
                    required
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    placeholder="John"
                    className="w-full bg-[#1a1d29]/50 border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#4a9d7e]/50 focus:ring-1 focus:ring-[#4a9d7e]/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">Last Name</label>
                  <input
                    required
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    placeholder="Doe"
                    className="w-full bg-[#1a1d29]/50 border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#4a9d7e]/50 focus:ring-1 focus:ring-[#4a9d7e]/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com"
                  className="w-full bg-[#1a1d29]/50 border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#4a9d7e]/50 focus:ring-1 focus:ring-[#4a9d7e]/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">Phone Number</label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#1a1d29]/50 border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#4a9d7e]/50 focus:ring-1 focus:ring-[#4a9d7e]/50 transition-all"
                />
              </div>

              <button
                type="button"
                onClick={nextStep}
                className="w-full bg-[#4a9d7e] hover:bg-[#3d8567] text-white font-bold py-5 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(74,157,126,0.3)] hover:shadow-[0_0_30px_rgba(74,157,126,0.5)] uppercase tracking-widest text-sm"
              >
                Continue to Investment Profile
              </button>
            </div>
          )}

          {/* Step 2: Investment Profile */}
          {step === 2 && (
            <div className="animate-fade-in space-y-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-3">Investment Profile</h2>
                <p className="text-gray-400">Step 2: Capital Allocation</p>
              </div>

              <div className="space-y-2">
                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">Source of Capital</label>
                <select
                  required
                  value={formData.sourceOfCapital}
                  onChange={(e) => setFormData({...formData, sourceOfCapital: e.target.value})}
                  className="w-full bg-[#1a1d29]/50 border border-gray-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#4a9d7e]/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#1a1d29]">Select Source</option>
                  <option value="Savings" className="bg-[#1a1d29]">Personal Savings</option>
                  <option value="Business" className="bg-[#1a1d29]">Business Revenue</option>
                  <option value="Inheritance" className="bg-[#1a1d29]">Inheritance</option>
                  <option value="Other" className="bg-[#1a1d29]">Other Assets</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">Amount Willing to Invest (USD)</label>
                <select
                  required
                  value={formData.investmentAmount}
                  onChange={(e) => setFormData({...formData, investmentAmount: e.target.value})}
                  className="w-full bg-[#1a1d29]/50 border border-gray-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#4a9d7e]/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#1a1d29]">Select Range</option>
                  <option value="10k-50k" className="bg-[#1a1d29]">$10,000 - $50,000</option>
                  <option value="50k-250k" className="bg-[#1a1d29]">$50,000 - $250,000</option>
                  <option value="250k-1M" className="bg-[#1a1d29]">$250,000 - $1,000,000</option>
                  <option value="1M+" className="bg-[#1a1d29]">$1,000,000+</option>
                </select>
              </div>

              <div className="flex flex-col space-y-4">
                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full bg-[#4a9d7e] hover:bg-[#3d8567] text-white font-bold py-5 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(74,157,126,0.3)] hover:shadow-[0_0_30px_rgba(74,157,126,0.5)] uppercase tracking-widest text-sm"
                >
                  Continue to Final Step
                </button>
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-full text-gray-500 hover:text-white font-bold py-2 transition-all duration-300 uppercase tracking-widest text-xs"
                >
                  Go Back
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Referral Source */}
          {step === 3 && (
            <div className="animate-fade-in space-y-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-3">Final Details</h2>
                <p className="text-gray-400">Step 3: Insights & Review</p>
              </div>

              <div className="space-y-2">
                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">How did you hear about us?</label>
                <select
                  required
                  value={formData.referralSource}
                  onChange={(e) => setFormData({...formData, referralSource: e.target.value})}
                  className="w-full bg-[#1a1d29]/50 border border-gray-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#4a9d7e]/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#1a1d29]">Select Source</option>
                  <option value="Social" className="bg-[#1a1d29]">Social Media</option>
                  <option value="News" className="bg-[#1a1d29]">Financial News</option>
                  <option value="Referral" className="bg-[#1a1d29]">Referral</option>
                  <option value="Other" className="bg-[#1a1d29]">Other</option>
                </select>
              </div>

              <div className="p-6 bg-[#1a1d29]/50 border border-gray-800 rounded-2xl">
                <p className="text-gray-500 text-xs leading-relaxed text-center">
                  By clicking "Finalize Registration", you agree to SmartInvest's Institutional Terms of Service 
                  and Privacy Policy. Our team will verify your credentials within 24 hours.
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <button
                  type="submit"
                  className="w-full bg-[#4a9d7e] hover:bg-[#3d8567] text-white font-bold py-5 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(74,157,126,0.3)] hover:shadow-[0_0_30px_rgba(74,157,126,0.5)] uppercase tracking-widest text-sm"
                >
                  Finalize Registration
                </button>
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-full text-gray-500 hover:text-white font-bold py-2 transition-all duration-300 uppercase tracking-widest text-xs"
                >
                  Go Back
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-gray-500 hover:text-[#4a9d7e] transition-colors text-sm font-bold uppercase tracking-widest">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
