import React from 'react'

const Footer = () => {
    return (
        <footer id="contact" className="py-28 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="py-10 flex items-center before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600 text-4xl font-bold text-center mb-12">Contact</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">CloudSync</h3>
                        <p>Your all-in-one SaaS solution for modern teams.</p>
                        <p className='mt-3'>South Street 43, M6N 4A4</p>
                        <p>Ontario, Canada</p>
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
                        <p>Email: info@cloudsync.com</p>
                        <p>Phone: (+1) 514 9463 487</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer