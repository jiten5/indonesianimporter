import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing - Indonesia Trade Intelligence Platform',
  description: 'Choose the right plan for your business. Flexible pricing for startups to enterprises with 7-day free trial.',
  keywords: 'trade data pricing, subscription plans, trade intelligence cost',
};

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 299,
      period: 'month',
      description: 'Perfect for small businesses starting their trade journey',
      features: [
        '10 countries coverage',
        '100 searches per month',
        '50 download points',
        '10 contact info reveals',
        '1 user account',
        '1 year historical data',
        'Email support',
        'Basic analytics',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Essential',
      price: 599,
      period: 'month',
      description: 'Most popular for growing businesses',
      features: [
        '50 countries coverage',
        '500 searches per month',
        '200 download points',
        '50 contact info reveals',
        '3 user accounts',
        '3 years historical data',
        'Priority email support',
        'Advanced analytics',
        'API access (limited)',
        'Export to Excel/CSV',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Expert',
      price: 1299,
      period: 'month',
      description: 'For established enterprises and traders',
      features: [
        '100+ countries coverage',
        'Unlimited searches',
        '1000 download points',
        '200 contact info reveals',
        '10 user accounts',
        '5 years historical data',
        'Dedicated account manager',
        'Premium analytics & reports',
        'Full API access',
        'Custom integrations',
        'White-label reports',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Customized',
      price: null,
      period: 'custom',
      description: 'Tailored solutions for large organizations',
      features: [
        'Global coverage',
        'Unlimited everything',
        'Custom data points',
        'Unlimited users',
        '10+ years historical data',
        '24/7 phone support',
        'Custom analytics',
        'Dedicated API',
        'On-premise deployment option',
        'Custom SLA',
        'Training & onboarding',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'What is included in the 7-day free trial?',
      answer: 'Full access to all features of your selected plan with no credit card required. You can cancel anytime during the trial period.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    },
    {
      question: 'What are download points?',
      answer: 'Download points are used to export detailed shipment records. Each detailed record costs 1 point. Summary data is free.',
    },
    {
      question: 'Do you offer annual discounts?',
      answer: 'Yes! Save 20% when you pay annually. Contact our sales team for enterprise annual contracts.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and wire transfers for enterprise plans.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any plan. You only pay the monthly or annual subscription fee.',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">Simple, Transparent Pricing</h1>
          <p className="text-xl text-blue-100 mb-8">Choose the perfect plan for your business needs</p>
          <div className="inline-block bg-white text-primary px-6 py-3 rounded-full font-semibold">
            🎉 7-Day Free Trial • No Credit Card Required
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-xl shadow-lg border-2 ${
                  plan.popular ? 'border-primary' : 'border-gray-200'
                } overflow-hidden relative`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h2>
                  <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>
                  <div className="mb-6">
                    {plan.price ? (
                      <>
                        <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                        <span className="text-gray-600">/{plan.period}</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold text-gray-900">Custom</span>
                    )}
                  </div>
                  <Link
                    href={plan.price ? '/contact?plan=' + plan.name : '/contact'}
                    className={`block text-center px-6 py-3 rounded-lg font-semibold transition-colors mb-6 ${
                      plan.popular
                        ? 'bg-primary text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Essential</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Expert</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Custom</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Countries', values: ['10', '50', '100+', 'All'] },
                  { name: 'Searches/month', values: ['100', '500', 'Unlimited', 'Unlimited'] },
                  { name: 'Users', values: ['1', '3', '10', 'Unlimited'] },
                  { name: 'API Access', values: ['✗', 'Limited', 'Full', 'Dedicated'] },
                  { name: 'Support', values: ['Email', 'Priority', 'Manager', '24/7'] },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700 font-medium">{row.name}</td>
                    {row.values.map((val, i) => (
                      <td key={i} className="py-4 px-6 text-center text-gray-700">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-blue-100">Our team is here to help you choose the right plan</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </main>
  );
}