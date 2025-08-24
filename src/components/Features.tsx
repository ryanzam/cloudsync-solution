import React from 'react'

const Features = () => {
    const features = [
        { title: "Collaboration", desc: "Real-time collaboration tools for seamless teamwork.", icon: "👥" },
        { title: "Automation", desc: "Automate repetitive tasks to save time.", icon: "⚙️" },
        { title: "Analytics", desc: "Gain insights with powerful analytics dashboards.", icon: "📊" },
    ];

    return (
        <section id="features" className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12">Why Choose CloudSync?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features