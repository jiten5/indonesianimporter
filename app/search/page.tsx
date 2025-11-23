'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export default function SearchPage() {
  const [activeTab, setActiveTab] = useState<'shipments' | 'importers' | 'suppliers' | 'visualize'>('shipments');
  const [searchType, setSearchType] = useState<'imports' | 'exports'>('imports');
  const [searchBy, setSearchBy] = useState<'product' | 'hsCode' | 'company'>('product');
  const [query, setQuery] = useState('');

  // Mock data
  const mockShipments = [
    {
      id: '1',
      date: '2024-01-15',
      hsCode: '8703.23',
      productDescription: 'Motor vehicles with spark-ignition engine',
      originCountry: 'Japan',
      quantity: 50,
      netWeightKG: 75000,
      totalValueUSD: 1250000,
      importerName: 'PT Indo ****',
      supplierName: 'Toyota ****',
    },
    // Add more mock data as needed
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Advanced Search</h1>
          <p className="text-gray-600">Search through 100M+ shipment records with advanced filters</p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-3">
            <select 
              className="px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value as 'imports' | 'exports')}
            >
              <option value="imports">Imports</option>
              <option value="exports">Exports</option>
            </select>
            
            <select 
              className="px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value as 'product' | 'hsCode' | 'company')}
            >
              <option value="product">Product</option>
              <option value="hsCode">HS Code</option>
              <option value="company">Company</option>
            </select>
            
            <input
              type="text"
              placeholder="Search products, companies, or HS codes..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search query"
            />
            
            <button className="px-8 py-3 bg-primary hover:bg-blue-700 text-white font-semibold rounded-md transition-colors whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-4">
              <h2 className="text-lg font-bold mb-4 text-gray-900">Filters</h2>
              
              {/* Date Range */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date Range</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2" />
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>

              {/* HS Code */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">HS Code</label>
                <input type="text" placeholder="Enter HS Code" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>

              {/* Origin Country */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Origin Country</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option value="">All Countries</option>
                  <option value="CN">China</option>
                  <option value="JP">Japan</option>
                  <option value="KR">South Korea</option>
                  <option value="US">United States</option>
                </select>
              </div>

              {/* Port of Unloading */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Port of Unloading</label>
                <input type="text" placeholder="Enter port name" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>

              {/* Port of Shipment */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Port of Shipment</label>
                <input type="text" placeholder="Enter port name" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>

              <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">
                Apply Filters
              </button>
              <button className="w-full px-4 py-2 mt-2 border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-50 transition-colors">
                Reset
              </button>
            </div>
          </aside>

          {/* Results Section */}
          <div className="lg:col-span-3">
            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-sm text-gray-600 mb-1">Total Shipments</div>
                <div className="text-3xl font-bold text-gray-900">12,458</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-sm text-gray-600 mb-1">Total Value (USD)</div>
                <div className="text-3xl font-bold text-gray-900">$458.2M</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  {(['shipments', 'importers', 'suppliers', 'visualize'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors capitalize $
                        ${activeTab === tab
                          ? 'border-primary text-primary'
                          : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'}
                      `}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Table Content */}
              <div className="p-6">
                {activeTab === 'shipments' && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">HS Code</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Product</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Origin</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Quantity</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Value (USD)</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Importer</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockShipments.slice(0, 10).map((shipment) => (
                          <tr key={shipment.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 text-gray-700">{shipment.date}</td>
                            <td className="py-3 px-4 text-gray-700">{shipment.hsCode}</td>
                            <td className="py-3 px-4 text-gray-700">{shipment.productDescription.substring(0, 30)}...</td>
                            <td className="py-3 px-4 text-gray-700">{shipment.originCountry}</td>
                            <td className="py-3 px-4 text-gray-700">{shipment.quantity}</td>
                            <td className="py-3 px-4 text-gray-700">${shipment.totalValueUSD.toLocaleString()}</td>
                            <td className="py-3 px-4 text-gray-700">
                              <span className="blur-sm">{shipment.importerName}</span>
                              <button className="ml-2 text-primary text-xs font-semibold hover:underline">Unlock</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Signup Overlay for Pagination */}
                    <div className="mt-6 text-center">
                      <p className="text-gray-600 mb-4">Showing 10 of 12,458 results</p>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <p className="text-gray-700 mb-4 font-semibold">Sign up to view all results and unlock full data</p>
                        <div className="flex gap-3 justify-center">
                          <Link href="/pricing" className="px-6 py-2 bg-primary text-white font-semibold rounded-md hover:bg-blue-700">
                            Try Free
                          </Link>
                          <Link href="/contact" className="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-50">
                            Schedule Demo
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'importers' && (
                  <div className="text-center py-12 text-gray-600">
                    Sign up to view importers list
                  </div>
                )}

                {activeTab === 'suppliers' && (
                  <div className="text-center py-12 text-gray-600">
                    Sign up to view suppliers list
                  </div>
                )}

                {activeTab === 'visualize' && (
                  <div className="text-center py-12 text-gray-600">
                    Sign up to view data visualizations
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}