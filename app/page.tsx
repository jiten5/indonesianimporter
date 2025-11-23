import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Indonesia Trade Intelligence Platform - Import Export Data & Market Insights',
  description: 'Access comprehensive Indonesia import-export shipment data, market insights, buyers-suppliers network, and trade intelligence. Get real-time trade data API and country-wise datasets.',
  keywords: 'Indonesia trade data, import export data, shipment data, market intelligence, trade API, Indonesia imports, Indonesia exports',
  openGraph: {
    title: 'Indonesia Trade Intelligence Platform',
    description: 'Comprehensive trade intelligence and market insights for Indonesia',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-manrope">
              Unlock Global Trade Intelligence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Access shipment-level data, discover buyers & suppliers, track competitors, and analyze market trends across 100+ countries
            </p>

            {/* Search Bar with Dual Dropdown */}
            <div className="bg-white rounded-lg shadow-2xl p-4 md:p-6 max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-3">
                <select className="px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Imports</option>
                  <option>Exports</option>
                </select>
                
                <select className="px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Product</option>
                  <option>HS Code</option>
                  <option>Company</option>
                </select>
                
                <input
                  type="text"
                  placeholder="Search products, companies, or HS codes..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                  aria-label="Search query"
                />
                
                <Link
                  href="/search"
                  className="px-8 py-3 bg-primary hover:bg-blue-700 text-white font-semibold rounded-md transition-colors whitespace-nowrap"
                >
                  Search
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-blue-100">
              <span>✓ 100M+ Shipment Records</span>
              <span>✓ 100+ Countries Coverage</span>
              <span>✓ Real-time Updates</span>
              <span>✓ 99.9% Data Accuracy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-gray-600 mb-8 font-semibold">Trusted by 10,000+ businesses worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-32 h-12 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Coverage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-manrope text-gray-900">
              Global Trade Data Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access the most comprehensive trade intelligence platform with unparalleled data coverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Countries Covered', icon: '🌍' },
              { number: '100M+', label: 'Shipment Records', icon: '📦' },
              { number: '50M+', label: 'Companies Profiled', icon: '🏢' },
              { number: '10K+', label: 'HS Codes Tracked', icon: '📊' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of sections... */}
    </main>
  );
}
