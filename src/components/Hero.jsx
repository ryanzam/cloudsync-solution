import React from 'react'
import ScrambledText from './RB/ScrambledText/ScrambledText';

const Hero = () => {
    return (

        <section className="min-w-screen min-h-screen flex flex-col justify-center items-center bg-black">
            <ScrambledText
                className="pt-20 mb-10 text-center"
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars={':.'}
            >
                Streamline Your Workflow with CloudSync
            </ScrambledText >

            <ScrambledText
                className="mt-0 text-center"
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars={':.'}
            >
                Boost productivity with our all-in-one SaaS platform designed for modern teams.
            </ScrambledText >

            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
                Try for Free
            </button>
        </section>
        /*  <section className="min-h-screen flex items-center text-white">
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
         </section> */
    )
}

export default Hero