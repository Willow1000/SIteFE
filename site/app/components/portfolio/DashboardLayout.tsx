'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navItems = [
    { 
      name: 'Overview', 
      href: '/dashboard', 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    { 
      name: 'Portfolio', 
      href: '/dashboard/portfolio', 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      name: 'Market Insights', 
      href: '/dashboard/market-insights', 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    { 
      name: 'Settings', 
      href: '/dashboard/settings', 
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
  ];

  const isActive = (href: string) => {
    if (href === '/dashboard') return pathname === '/dashboard';
    return pathname.startsWith(href);
  };

  return (
    <div className="flex h-screen bg-[#1a1d29] text-white overflow-hidden font-sans">
      {/* Sidebar */}
      <div 
        className={`fixed md:relative z-40 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'w-72' : 'w-0'
        } bg-[#1a1d29] border-r border-gray-800/50 overflow-hidden flex flex-col`}
      >
        <div className="p-8 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-[#4a9d7e] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(74,157,126,0.3)] group-hover:shadow-[0_0_20px_rgba(74,157,126,0.5)] transition-all duration-300">
              <span className="text-white font-bold text-2xl tracking-tighter">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-xl font-extrabold tracking-tight leading-none">SmartInvest</span>
              <span className="text-[#4a9d7e] text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Terminal</span>
            </div>
          </Link>
        </div>

        <div className="flex-1 px-4 py-6 space-y-1">
          <p className="px-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Main Menu</p>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                isActive(item.href)
                  ? 'bg-[#4a9d7e]/10 text-[#4a9d7e] border border-[#4a9d7e]/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className={`transition-colors duration-300 ${isActive(item.href) ? 'text-[#4a9d7e]' : 'text-gray-500 group-hover:text-white'}`}>
                {item.icon}
              </span>
              <span className="font-bold uppercase tracking-widest text-[11px]">{item.name}</span>
              {isActive(item.href) && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#4a9d7e] shadow-[0_0_10px_rgba(74,157,126,0.8)]" />
              )}
            </Link>
          ))}
        </div>

        <div className="p-6 border-t border-gray-800/50">
          <div className="bg-[#252836]/50 border border-gray-800 rounded-2xl p-4 mb-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#4a9d7e] animate-pulse" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Network Status</span>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Connected to Institutional Node <span className="text-white">#0482</span>
            </p>
          </div>
          <button className="w-full flex items-center justify-center space-x-2 bg-gray-800/50 hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/20 border border-transparent text-gray-400 px-4 py-3.5 rounded-xl font-bold uppercase tracking-widest text-[11px] transition-all duration-300">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#1a1d29]">
        {/* Top Bar */}
        <header className="bg-[#1a1d29] border-b border-gray-800/50 px-8 py-5 flex items-center justify-between z-30">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="h-6 w-px bg-gray-800" />
            <div className="hidden sm:flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#4a9d7e]" />
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Market Open</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex flex-col text-right">
              <p className="text-white font-bold text-sm">James Wilson</p>
              <p className="text-[#4a9d7e] text-[10px] font-bold uppercase tracking-widest">Premium Tier</p>
            </div>
            <div className="relative group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-[#4a9d7e] to-[#2d5d4b] rounded-xl flex items-center justify-center font-bold text-white shadow-lg group-hover:shadow-[#4a9d7e]/20 transition-all duration-300">
                JW
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#1a1d29] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#4a9d7e] rounded-full" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
