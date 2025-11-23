import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Products - Indonesia Trade Intelligence Platform',
  description: 'Explore our suite of trade intelligence products: Data Platform, Trade Data API, and Data License solutions.',
  keywords: 'trade data platform, trade API, data license, import export data',
};

export default function ProductsPage() {
  const products = [
    {
      id: 'data-platform',
      name: 'Data Platform',
      tagline: 'All-in-One Trade Intelligence Dashboard',
      description: 'Access comprehensive trade data through our intuitive web platform. Search, analyze, and download shipment records with advanced filters.',
      icon: '🖥️',
      href: '/products/data-platform',
      features: [
        'Advanced search & filtering',
        'Real-time data updates',
        'Visual analytics & charts',
        'Download reports (Excel, CSV, PDF)',
        'Company profiles & contact info',
        'Market intelligence insights',
      ],
      pricing: 'Starting at $299/month',
      cta: 'Explore Platform',
    },
    {
      id: 'trade-api',
      name: 'Trade Data API',
      tagline: 'Integrate Trade Intelligence Into Your Systems',
      description: 'RESTful API with comprehensive endpoints for programmatic access to shipment data, company information, and trade statistics.',
      icon: '⚡',
      href: '/products/trade-data-api',
      features: [
        'RESTful API architecture',
        '99.9% uptime SLA',
        'Rate limits up to 10,000 req/min',
        'Webhook support',
        'SDKs for Python, Node.js, PHP',
        'Comprehensive documentation',
      ],
      pricing: 'Starting at $499/month',
      cta: 'View API Docs',
    },
    {
      id: 'data-license',
      name: 'Data License',
      tagline: 'Raw Data for Custom Analysis',
      description: 'Purchase complete datasets by country, product category, or custom requirements. Perfect for data scientists and analysts.',
      icon: '📊',
      href: '/products/data-license',
      features: [
        'Full historical data access',
        'Multiple export formats',
        'Country-wise or global datasets',
        'Custom data extraction',
        'One-time purchase model',
        'Commercial use rights',
      ],
      pricing: 'Custom pricing',
      cta: 'Request Quote',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
              Choose the Right Product for Your Needs
            </h1>
            <p className="text-xl text-blue-100">
              From intuitive dashboards to powerful APIs and custom datasets—we have the right solution for every business
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="p-8">
                  <div className="text-6xl mb-4">{product.icon}</div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900">{product.name}</h2>
                  <p className="text-primary font-semibold mb-4">{product.tagline}</p>
                  <p className="text-gray-600 mb-6">{product.description}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-sm text-gray-600 mb-4">{product.pricing}</p>
                    <Link
                      href={product.href}
                      className="block text-center px-6 py-3 bg-primary hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      {product.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Product Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="py-4 px-6 font-semibold text-gray-900">Feature</th>
                  <th className="py-4 px-6 font-semibold text-gray-900 text-center">Data Platform</th>
                  <th className="py-4 px-6 font-semibold text-gray-900 text-center">Trade API</th>
                  <th className="py-4 px-6 font-semibold text-gray-900 text-center">Data License</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Web-based access', platform: true, api: false, license: false },
                  { feature: 'Programmatic access', platform: false, api: true, license: false },
                  { feature: 'Raw data download', platform: true, api: true, license: true },
                  { feature: 'Real-time updates', platform: true, api: true, license: false },
                  { feature: 'Custom integrations', platform: false, api: true, license: true },
                  { feature: 'Historical data', platform: true, api: true, license: true },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {row.platform ? <span className="text-green-500 text-xl">✓</span> : <span className="text-gray-300 text-xl">—</span>}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.api ? <span className="text-green-500 text-xl">✓</span> : <span className="text-gray-300 text-xl">—</span>}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.license ? <span className="text-green-500 text-xl">✓</span> : <span className="text-gray-300 text-xl">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Sure Which Product to Choose?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our team will help you find the perfect solution for your business needs
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}