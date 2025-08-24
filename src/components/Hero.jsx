import React from 'react'

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold mb-4 animate-fade-in">
                    Streamline Your Workflow with CloudSync
                </h1>
                <p className="text-xl mb-6">
                    Boost productivity with our all-in-one SaaS platform designed for modern teams.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
                    Try for Free
                </button>
            </div>
        </section>
    )
}

export default Hero