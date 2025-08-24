import React from 'react'
import BubbleMenu from './BubbleMenu'

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-gray-800">CloudSync</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
                        <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
                        <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar