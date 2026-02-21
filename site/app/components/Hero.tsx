'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#1a1d29] pt-24 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#4a9d7e]/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#4a9d7e]/5 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className={`relative max-w-7xl mx-auto text-center transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#4a9d7e]/10 border border-[#4a9d7e]/20 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-[#4a9d7e] animate-ping" />
          <span className="text-[#4a9d7e] text-xs font-bold tracking-wider uppercase">AI Trading Engine v4.0 Live</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
          Institutional-Grade <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a9d7e] to-[#6bc99e]">
            Asset Management
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300">
          Experience professional-grade algorithms and sophisticated trading tools 
          designed for the modern investor. Precision, performance, and transparency.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500">
          <Link
            href="#"
            className="group relative inline-flex items-center justify-center bg-[#4a9d7e] hover:bg-[#3d8567] text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(74,157,126,0.3)] hover:shadow-[0_0_30px_rgba(74,157,126,0.5)] overflow-hidden"
          >
            <span className="relative z-10">Open Account</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
          </Link>
          
          <Link
            href="#"
            className="group inline-flex items-center justify-center text-gray-300 hover:text-white font-semibold py-4 px-10 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300"
          >
            View Demo
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Floating Stat Bubbles */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 delay-700">
          {[
            { label: 'AUM', value: '$2.4B+' },
            { label: 'Uptime', value: '99.9%' },
            { label: 'Execution', value: '12ms' },
            { label: 'Traders', value: '50k+' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
              <span className="text-white text-2xl font-bold">{stat.value}</span>
              <span className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
