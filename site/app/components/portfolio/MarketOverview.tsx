'use client';

import { useState, useEffect } from 'react';
import { fetchMarketData, SEED_MARKET_DATA } from '@/app/components/portfolio/marketData';

type Instrument = {
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
};

type MarketData = {
  stocks: Instrument[];
  forex: Instrument[];
  metals: Instrument[];
  crypto: Instrument[];
};

export default function MarketOverview() {
  const [activeTab, setActiveTab] = useState('stocks');
  const [marketData, setMarketData] = useState<MarketData>(SEED_MARKET_DATA);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchMarketData()
      .then((data) => {
        setMarketData(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  // Live Price Simulation (updates every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData((prevData) => {
        const newData = { ...prevData };
        const categories = ['stocks', 'forex', 'metals', 'crypto'] as const;

        categories.forEach((cat) => {
          newData[cat] = newData[cat].map((item) => {
            const volatility = cat === 'crypto' ? 0.001 : 0.0002;
            const change = item.price * (Math.random() * volatility * 2 - volatility);
            const newPrice = item.price + change;
            const newChange = item.change + change;
            const newChangePercent = (newChange / (newPrice - newChange)) * 100;

            return {
              ...item,
              price: newPrice,
              change: newChange,
              changePercent: newChangePercent,
            };
          });
        });

        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const tabs = [
    {
      key: 'stocks',
      label: 'Stocks',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      key: 'forex',
      label: 'Forex',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      key: 'metals',
      label: 'Metals',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      key: 'crypto',
      label: 'Crypto',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const currentData = marketData[activeTab as keyof MarketData];

  return (
    <div className="bg-[#252836]/30 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-4 sm:p-6 md:p-8 hover:border-[#4a9d7e]/20 transition-all duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">Market Overview</h3>
          <p className="text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold mt-1">
            {isLoading ? 'Loading Live Data...' : 'Real-time Institutional Data'}
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-gray-800/30 px-3 py-1.5 rounded-full border border-gray-800/50 self-start sm:self-auto">
          <div className={`w-1.5 h-1.5 rounded-full ${isLoading ? 'bg-yellow-500' : 'bg-[#4a9d7e]'} animate-pulse`} />
          <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {isLoading ? 'Syncing' : 'Live Feed'}
          </span>
        </div>
      </div>

      {/* Tabs - Horizontally scrollable on mobile */}
      <div className="flex space-x-1 sm:space-x-2 mb-6 sm:mb-8 bg-[#1a1d29]/50 p-1 sm:p-1.5 rounded-2xl border border-gray-800/50 overflow-x-auto custom-scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 min-w-[90px] sm:min-w-[100px] flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 sm:py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] sm:text-[11px] transition-all duration-300 ${
              activeTab === tab.key
                ? 'bg-[#4a9d7e] text-white shadow-lg shadow-[#4a9d7e]/20'
                : 'text-gray-500 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.icon}
            <span className="hidden xs:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Market Data Table */}
      <div className="space-y-2 sm:space-y-3">
        {currentData.map((instrument, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 sm:p-4 md:p-5 bg-[#1a1d29]/40 border border-gray-800/50 rounded-xl sm:rounded-2xl hover:border-[#4a9d7e]/40 hover:bg-[#1a1d29]/60 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 min-w-0">
              <div className="w-7 h-7 sm:w-8 md:w-10 bg-gray-800/50 rounded-lg sm:rounded-xl flex items-center justify-center border border-gray-700/50 group-hover:border-[#4a9d7e]/30 transition-all duration-300 flex-shrink-0">
                <span className="text-white font-bold text-[8px] sm:text-[10px] md:text-xs">{instrument.symbol.slice(0, 2)}</span>
              </div>
              <div className="min-w-0">
                <p className="text-white font-bold text-xs sm:text-sm tracking-tight group-hover:text-[#4a9d7e] transition-colors truncate">
                  {instrument.name}
                </p>
                <p className="text-gray-500 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold">{instrument.symbol}</p>
              </div>
            </div>

            <div className="text-right flex items-center space-x-2 sm:space-x-4 md:space-x-8 flex-shrink-0">
              <div>
                <p className="text-white font-bold text-xs sm:text-sm md:text-base tracking-tight tabular-nums">
                  {instrument.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <div className="flex items-center justify-end space-x-1 sm:space-x-2">
                  <span
                    className={`text-[8px] sm:text-[10px] md:text-[11px] font-bold tabular-nums ${
                      instrument.change >= 0 ? 'text-[#4a9d7e]' : 'text-red-500'
                    }`}
                  >
                    {instrument.change >= 0 ? '+' : ''}{instrument.change.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  <span
                    className={`text-[7px] sm:text-[9px] md:text-[10px] font-bold px-1 sm:px-1.5 py-0.5 rounded-md ${
                      instrument.change >= 0 ? 'bg-[#4a9d7e]/10 text-[#4a9d7e]' : 'bg-red-500/10 text-red-500'
                    }`}
                  >
                    {instrument.changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>

              {/* Mini Chart Indicator - Hidden on smallest mobile */}
              <div className="hidden xs:block w-10 sm:w-12 md:w-16 h-5 sm:h-6 md:h-8">
                <svg viewBox="0 0 60 20" className="w-full h-full overflow-visible">
                  <polyline
                    points="0,15 10,12 20,14 30,8 40,10 50,5 60,7"
                    fill="none"
                    stroke={instrument.change >= 0 ? '#4a9d7e' : '#ef4444'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-draw"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
          <span className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">FIX 4.4</span>
          <div className="w-1 h-1 rounded-full bg-gray-700" />
          <span className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">12ms Latency</span>
        </div>
        <button className="text-[#4a9d7e] hover:text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center space-x-1">
          <span>Full Terminal</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
