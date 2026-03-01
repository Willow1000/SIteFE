import DashboardLayout from '../components/portfolio/DashboardLayout';
import PortfolioOverview from '../components/portfolio/PortfolioOverview';
import MarketOverview from '../components/portfolio/MarketOverview';
import MarketInsightsFeed from '../components/portfolio/MarketInsightsFeed';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-8">
        {/* Portfolio Overview */}
        <PortfolioOverview />

        {/* Market Overview & Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <MarketOverview />
          </div>
          <div>
            <MarketInsightsFeed />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
