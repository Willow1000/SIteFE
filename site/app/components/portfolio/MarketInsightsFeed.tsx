'use client';

export default function MarketInsightsFeed() {
  const insights = [
    {
      id: 1,
      type: 'article',
      title: 'Tech Stocks Rally on AI Optimism',
      excerpt: 'Major tech companies surge as AI adoption accelerates across industries...',
      timestamp: '2 hours ago',
      category: 'Market Analysis',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 2,
      type: 'news',
      title: 'Federal Reserve Signals Rate Pause',
      excerpt: 'Fed officials hint at potential pause in interest rate hikes...',
      timestamp: '4 hours ago',
      category: 'Economic News',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2v4a2 2 0 002 2h4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h5M7 12h10M7 16h10" />
        </svg>
      ),
    },
    {
      id: 3,
      type: 'blog',
      title: 'Portfolio Diversification Strategy',
      excerpt: 'Expert guide to building a resilient investment portfolio...',
      timestamp: '1 day ago',
      category: 'Investment Tips',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      id: 4,
      type: 'article',
      title: 'Crypto Market Stabilizes Above $2T',
      excerpt: 'Digital assets show renewed strength amid regulatory clarity...',
      timestamp: '1 day ago',
      category: 'Crypto',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 5,
      type: 'news',
      title: 'Oil Prices Hit 6-Month High',
      excerpt: 'Energy sector gains momentum on supply concerns...',
      timestamp: '2 days ago',
      category: 'Commodities',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#252836]/30 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8 h-full flex flex-col hover:border-[#4a9d7e]/20 transition-all duration-500">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight">Market Insights</h3>
          <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mt-1">Intelligence Terminal</p>
        </div>
        <div className="p-2 rounded-xl bg-gray-800/50 text-gray-400 hover:text-[#4a9d7e] transition-colors cursor-pointer">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </div>
      </div>

      <div className="flex-1 space-y-4">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="p-5 bg-[#1a1d29]/40 border border-gray-800/50 rounded-2xl hover:border-[#4a9d7e]/40 hover:bg-[#1a1d29]/60 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gray-800/50 rounded-xl flex items-center justify-center border border-gray-700/50 group-hover:border-[#4a9d7e]/30 group-hover:text-[#4a9d7e] transition-all duration-300 text-gray-400">
                {insight.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#4a9d7e] text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 bg-[#4a9d7e]/10 rounded-md">
                    {insight.category}
                  </span>
                  <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">{insight.timestamp}</span>
                </div>
                <p className="text-white font-bold text-sm tracking-tight leading-snug group-hover:text-[#4a9d7e] transition-colors line-clamp-2">
                  {insight.title}
                </p>
                <p className="text-gray-500 text-[11px] mt-2 line-clamp-2 leading-relaxed">
                  {insight.excerpt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-8 group flex items-center justify-center space-x-2 bg-[#4a9d7e] hover:bg-[#3d8567] text-white px-4 py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] transition-all duration-300 shadow-lg shadow-[#4a9d7e]/10">
        <span>Access Intelligence Terminal</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
}
