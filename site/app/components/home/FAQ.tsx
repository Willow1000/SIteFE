'use client';

import { useState, useEffect, useRef } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick, index, isVisible }: any) => {
  return (
    <div 
      className={`border-b border-gray-800 py-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-[#4a9d7e]' : 'text-white group-hover:text-[#4a9d7e]'}`}>
          {question}
        </span>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#4a9d7e] text-white rotate-180' : 'bg-[#252836] text-gray-400 group-hover:bg-gray-700'}`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const faqs = [
    {
      question: "How do the AI trading signals work?",
      answer: "Our AI engine analyzes millions of data points across multiple markets in real-time. It uses deep learning algorithms to identify high-probability trading setups based on historical patterns, sentiment analysis, and volatility indicators.",
    },
    {
      question: "What is the minimum deposit to get started?",
      answer: "We offer different account tiers to accommodate various investment levels. Our standard account starts with a minimum deposit of $1,000, while institutional-grade features are available for higher-tier accounts.",
    },
    {
      question: "Is my capital safe with SmartInvest?",
      answer: "Security is our top priority. We use institutional-grade encryption, cold storage for crypto assets, and segregated accounts for fiat funds. We are also fully compliant with global financial regulations and undergo regular audits.",
    },
    {
      question: "Can I use my own trading strategy?",
      answer: "Yes, our platform supports custom strategy implementation. You can integrate your own algorithms via our robust API or use our visual strategy builder to automate your trading logic.",
    },
    {
      question: "What markets can I trade on the platform?",
      answer: "SmartInvest provides access to over 200+ markets, including major/minor Forex pairs, Cryptocurrencies, Global Stocks (NYSE, NASDAQ), Commodities (Gold, Oil), and Market Indices.",
    },
  ];

  return (
    <section id="faq" ref={sectionRef} className="bg-[#1a1d29] py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-[#4a9d7e] text-sm font-bold tracking-[0.2em] uppercase mb-4">Support Center</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Common Questions</h3>
          <p className="text-gray-400 text-lg">
            Everything you need to know about the SmartInvest platform and our 
            investment ecosystem.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              isVisible={isVisible}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
