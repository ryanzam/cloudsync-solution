import React from 'react'
import InfiniteScroll from './RB/InfiniteScroll/InfiniteScroll'

const Pricing = () => {

    const plans = [
        { name: "Basic", price: "$9/mo", features: ["1 User", "10GB Storage", "Basic Support"] },
        { name: "Pro", price: "$29/mo", features: ["5 Users", "50GB Storage", "Priority Support"] },
        { name: "Enterprise", price: "Contact Us", features: ["Unlimited Users", "Unlimited Storage", "24/7 Support"] },
    ];

    const items = plans.map((plan, index) => {
        return {
            content:
                <div key={index}>
                    <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                    <p className="text-3xl font-bold mb-4">{plan.price}</p>
                    <ul className="mb-6 flex ">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="text-gray-600 mb-2">✓ {feature}</li>
                        ))}
                    </ul>
                    <button className="px-4 py-2 rounded-md border-2 text-black">
                        Choose Plan
                    </button>
                </div>
        } as never
    })

    return (
        <section style={{height: '700px', position: 'relative'}} id="pricing" className="py-20 max-w-7xl mx-auto">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="pb-10 flex items-center before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600 text-4xl font-bold text-center mb-12">Pricing Plans</h2>

                <InfiniteScroll
                    items={items}
                    isTilted={true}
                    tiltDirection='left'
                    autoplay={true}
                    autoplaySpeed={0.1}
                    autoplayDirection="down"
                    pauseOnHover={true}
                />

                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                </div> */}
            </div>
        </section>
    )
}

export default Pricing