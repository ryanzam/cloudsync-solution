import React from 'react'

const Pricing = () => {
    const plans = [
        { name: "Basic", price: "$9/mo", features: ["1 User", "10GB Storage", "Basic Support"] },
        { name: "Pro", price: "$29/mo", features: ["5 Users", "50GB Storage", "Priority Support"] },
        { name: "Enterprise", price: "Contact Us", features: ["Unlimited Users", "Unlimited Storage", "24/7 Support"] },
    ];

    return (
        <section id="pricing" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                            <p className="text-3xl font-bold mb-4">{plan.price}</p>
                            <ul className="mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="text-gray-600 mb-2">✓ {feature}</li>
                                ))}
                            </ul>
                            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing