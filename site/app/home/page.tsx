import Navbar from '@/components/navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Performance from '../components/Performance';
import TradingAssets from '../components/TradingAssets';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-[#1a1d29] min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <TradingAssets />
      <Performance />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
