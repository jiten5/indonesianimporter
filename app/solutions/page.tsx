// app/solutions/page.tsx

import React from 'react';

const solutions = [
    {
        title: 'Find Suppliers',
        description: 'Connect with verified suppliers to expand your product offerings.',
        benefits: ['Access to a wide database', 'Verified reviews', 'Quick inquiries'],
        icon: '🛒', // Replace with actual icon
    },
    {
        title: 'Find Buyers',
        description: 'Identify potential buyers and grow your customer base.',
        benefits: ['Targeted marketing', 'Direct communication', 'Market insights'],
        icon: '👥', // Replace with actual icon
    },
    {
        title: 'Competitor Analysis',
        description: 'Understand market competitors and refine your strategies.',
        benefits: ['In-depth competitor profiles', 'Market share analysis', 'SWOT analysis'],
        icon: '📊', // Replace with actual icon
    },
    {
        title: 'Market Research',
        description: 'Get insights into market trends and consumer behaviors.',
        benefits: ['Latest market reports', 'Consumer insights', 'Survey data'],
        icon: '🔍', // Replace with actual icon
    },
    {
        title: 'Supply Chain',
        description: 'Optimize your supply chain for efficiency and effectiveness.',
        benefits: ['Streamlined processes', 'Cost savings', 'Supplier management'],
        icon: '🚚', // Replace with actual icon
    },
    {
        title: 'Compliance',
        description: 'Stay compliant with regulations and standards.',
        benefits: ['Regulatory updates', 'Compliance checklists', 'Risk management'],
        icon: '⚖️', // Replace with actual icon
    },
    {
        title: 'Product Sourcing',
        description: 'Find reliable sources for your products across regions.',
        benefits: ['Global sourcing options', 'Cost comparisons', 'Quality assurance'],
        icon: '🏷️', // Replace with actual icon
    },
    {
        title: 'Market Entry',
        description: 'Strategize your entry into new markets effectively.',
        benefits: ['Market analysis', 'Entry strategies', 'Localization consultations'],
        icon: '🌍', // Replace with actual icon
    },
];

const industries = [
    { title: 'Manufacturing', description: 'Streamline your production processes.', icon: '🏭' },
    { title: 'Retail', description: 'Enhance your retail operations for better customer experience.', icon: '🛍️' },
    { title: 'Agriculture', description: 'Optimize your agricultural practices and supply chains.', icon: '🌾' },
    { title: 'Automotive', description: 'Stay competitive in the automotive market.', icon: '🚗' },
    { title: 'Electronics', description: 'Navigate the electronics supply chain effectively.', icon: '📱' },
    { title: 'Textiles', description: 'Discover opportunities in the textile industry.', icon: '👗' },
    { title: 'Pharmaceuticals', description: 'Ensure compliance and quality in pharma.', icon: '💊' },
    { title: 'Energy', description: 'Explore innovations in the energy sector.', icon: '⚡' },
    { title: 'Consumer Goods', description: 'Meet consumer demands with reliable sourcing.', icon: '🛒' },
    { title: 'Logistics', description: 'Enhance your logistics operations.', icon: '🚢' },
];

const SolutionsPage = () => {
    return (
        <div className="container mx-auto p-5">
            {/* Metadata */}
            <head>
                <title>Solutions - Indonesia Trade Intelligence Platform</title>
                <meta name="description" content="Explore our trade intelligence solutions for various industries." />
            </head>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-10 text-center">
                <h1 className="text-3xl font-bold">Solutions for Every Trade Challenge</h1>
            </section>

            {/* Solutions Grid */}
            <section className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {solutions.map((solution, index) => (
                    <div key={index} className="border rounded-lg p-5 text-center">
                        <div className="text-5xl">{solution.icon}</div>
                        <h2 className="font-bold">{solution.title}</h2>
                        <p>{solution.description}</p>
                        <ul className="list-disc list-inside">
                            {solution.benefits.map((benefit, idx) => (
                                <li key={idx}>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Industries Section */}
            <section className="py-10">
                <h2 className="text-center text-2xl font-bold">Industries We Serve</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                    {industries.map((industry, index) => (
                        <div key={index} className="border rounded-lg p-5 text-center">
                            <div className="text-5xl">{industry.icon}</div>
                            <h3 className="font-bold">{industry.title}</h3>
                            <p>{industry.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-10">
                <h2 className="text-center text-2xl font-bold">Use Cases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Replace with real-world examples */}
                    {[1, 2, 3, 4].map((caseNum) => (
                        <div key={caseNum} className="border rounded-lg p-5 text-center">
                            <h3 className="font-bold">Use Case #{caseNum}</h3>
                            <p>Results and insights from the use case...</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-10 text-center">
                <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
                <div>
                    <a href="/pricing" className="text-blue-500 underline mx-2">View Pricing</a>
                    <span>|</span>
                    <a href="/contact" className="text-blue-500 underline mx-2">Contact Us</a>
                </div>
            </section>
        </div>
    );
};

export default SolutionsPage;