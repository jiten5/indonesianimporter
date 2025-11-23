// TypeScript Interfaces for Indonesia Trade Intelligence Platform

// 1. Shipment Interface
export interface Shipment {
  id: string;
  date: Date;
  hsCode: string;
  productDescription: string;
  originCountry: string;
  destinationCountry: string;
  quantity: number;
  netWeightKG: number;
  totalValueUSD: number;
  importerName: string;
  supplierName: string;
  portOfLoading: string;
  portOfUnloading: string;
  state?: string;
  city?: string;
  containerNumber?: string;
  invoiceNumber?: string;
}

// 2. Search Filters Interface
export interface SearchFilters {
  type: 'imports' | 'exports';
  searchBy: 'product' | 'hsCode' | 'company';
  query: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
  hsCode?: string;
  originCountry?: string;
  destinationCountry?: string;
  state?: string;
  city?: string;
  portOfLoading?: string;
  portOfUnloading?: string;
  importer?: string;
  supplier?: string;
}

// 3. Search Results Interface
export interface SearchResults {
  totalCount: number;
  totalValueUSD: number;
  shipments: Shipment[];
  importers: Company[];
  suppliers: Company[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
}

// 4. Company Interface
export interface Company {
  id: string;
  name: string;
  type: 'importer' | 'exporter' | 'both';
  country: string;
  state?: string;
  city?: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  totalShipments: number;
  totalValueUSD: number;
  topProducts: string[];
  topPartnerCountries: string[];
  establishedYear?: number;
  complianceScore?: number;
}

// 5. HS Code Interface
export interface HSCode {
  code: string;
  level: number;
  description: string;
  category: string;
  subCategory?: string;
  unit?: string;
  dutyRate?: number;
}

// 6. Product Interface
export interface Product {
  id: string;
  hsCode: string;
  name: string;
  description: string;
  category: string;
  subCategory?: string;
  totalShipments: number;
  totalValueUSD: number;
  topImporters: string[];
  topExporters: string[];
  averagePriceUSD?: number;
}

// 7. Country Interface
export interface Country {
  code: string;
  name: string;
  region: string;
  totalImports: number;
  totalExports: number;
  topImportProducts: string[];
  topExportProducts: string[];
  topTradePartners: string[];
  gdp?: number;
  population?: number;
}

// 8. Port Interface
export interface Port {
  id: string;
  code: string;
  name: string;
  country: string;
  city: string;
  type: 'seaport' | 'airport' | 'land';
  totalShipments: number;
  totalValueUSD: number;
}

// 9. User Interface
export interface User {
  id: string;
  email: string;
  name: string;
  company?: string;
  role: 'user' | 'admin' | 'analyst';
  subscriptionId?: string;
  createdAt: Date;
  lastLoginAt?: Date;
  preferences?: UserPreferences;
}

// 10. User Preferences Interface
export interface UserPreferences {
  language: string;
  currency: string;
  dateFormat: string;
  notifications: boolean;
  savedSearches?: SavedSearch[];
  favoriteCompanies?: string[];
}

// 11. Saved Search Interface
export interface SavedSearch {
  id: string;
  name: string;
  filters: SearchFilters;
  createdAt: Date;
  notifications: boolean;
}

// 12. Subscription Interface
export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  status: 'active' | 'cancelled' | 'expired' | 'trial';
  startDate: Date;
  endDate: Date;
  autoRenew: boolean;
  searchesUsed: number;
  downloadsUsed: number;
  contactInfoUsed: number;
}

// 13. Plan Interface
export interface Plan {
  id: string;
  name: 'starter' | 'essential' | 'expert' | 'customized';
  priceUSD: number;
  billingCycle: 'monthly' | 'yearly';
  countriesCovered: number;
  searchesPerMonth: number;
  downloadPoints: number;
  contactInfoPoints: number;
  maxUsers: number;
  dataAccessYears: number;
  supportLevel: 'email' | 'priority' | 'dedicated';
  features: string[];
}

// 14. Invoice Interface
export interface Invoice {
  id: string;
  subscriptionId: string;
  userId: string;
  amount: number;
  currency: string;
  status: 'paid' | 'pending' | 'failed';
  invoiceDate: Date;
  dueDate: Date;
  paidDate?: Date;
  paymentMethod?: string;
}

// 15. API Credentials Interface
export interface APICredentials {
  userId: string;
  apiKey: string;
  apiSecret: string;
  permissions: string[];
  rateLimit: number;
  createdAt: Date;
  expiresAt?: Date;
  isActive: boolean;
}

// 16. Data License Interface
export interface DataLicense {
  id: string;
  userId: string;
  licenseType: 'country' | 'product' | 'custom';
  countries: string[];
  format: 'csv' | 'sql' | 'json' | 'excel';
  dateRange: {
    start: Date;
    end: Date;
  };
  totalRecords: number;
  priceUSD: number;
  purchaseDate: Date;
  downloadUrl?: string;
  expiresAt: Date;
}

// 17. Trade Statistics Interface
export interface TradeStatistics {
  period: string;
  country: string;
  totalImports: number;
  totalExports: number;
  tradeBalance: number;
  topImportPartners: CountryTrade[];
  topExportPartners: CountryTrade[];
  topImportProducts: ProductTrade[];
  topExportProducts: ProductTrade[];
}

// 18. Country Trade Interface
export interface CountryTrade {
  country: string;
  valueUSD: number;
  percentageOfTotal: number;
  growth?: number;
}

// 19. Product Trade Interface
export interface ProductTrade {
  hsCode: string;
  product: string;
  valueUSD: number;
  percentageOfTotal: number;
  growth?: number;
}

// 20. Compliance Record Interface
export interface ComplianceRecord {
  id: string;
  companyId: string;
  recordType: 'sanction' | 'warning' | 'clearance';
  issuingAuthority: string;
  country: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  dateIssued: Date;
  dateExpired?: Date;
  status: 'active' | 'resolved' | 'expired';
}

// 21. Shipment Visualization Interface
export interface ShipmentVisualization {
  nodes: VisualizationNode[];
  edges: VisualizationEdge[];
  filters: SearchFilters;
  totalValueUSD: number;
}

// 22. Visualization Node Interface
export interface VisualizationNode {
  id: string;
  type: 'country' | 'company' | 'product' | 'port';
  name: string;
  value: number;
  metadata?: Record<string, any>;
}

// 23. Visualization Edge Interface
export interface VisualizationEdge {
  source: string;
  target: string;
  value: number;
  shipmentCount: number;
}

// Export all interfaces
export type {
  Shipment,
  SearchFilters,
  SearchResults,
  Company,
  HSCode,
  Product,
  Country,
  Port,
  User,
  UserPreferences,
  SavedSearch,
  Subscription,
  Plan,
  Invoice,
  APICredentials,
  DataLicense,
  TradeStatistics,
  CountryTrade,
  ProductTrade,
  ComplianceRecord,
  ShipmentVisualization,
  VisualizationNode,
  VisualizationEdge,
};