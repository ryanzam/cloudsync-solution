import React from 'react'

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-800 text-white py-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">CloudSync</h3>
                        <p>Your all-in-one SaaS solution for modern teams.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Links</h3>
                        <ul>
                            <li><a href="#features" className="hover:text-blue-300">Features</a></li>
                            <li><a href="#pricing" className="hover:text-blue-300">Pricing</a></li>
                            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p>Email: support@cloudsync.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer