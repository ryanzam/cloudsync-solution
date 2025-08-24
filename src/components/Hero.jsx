import React from 'react'
import ScrambledText from './RB/ScrambledText/ScrambledText';
import Prism from './RB/Prism/Prism';

const Hero = () => {
    return (

        <section className="min-w-screen min-h-screen flex flex-col justify-center items-center bg-black">
            <ScrambledText
                className="pt-20 mb-10 text-center z-10"
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars={':.'}
            >
                Streamline Your Workflow with CloudSync
            </ScrambledText >

            <ScrambledText
                className="mt-0 text-center z-10"
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars={':.'}
            >
                Boost productivity with our all-in-one SaaS platform designed for modern teams.
            </ScrambledText >

            <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 z-10">
                Try for Free
            </button>

            <div className='mix-blend-lighten' style={{ width: '100%', height: '600px', position: 'absolute' }}>
                <Prism
                    animationType="rotate"
                    timeScale={0.5}
                    height={3.5}
                    baseWidth={5.5}
                    scale={3.6}
                    hueShift={0}
                    colorFrequency={1}
                    noise={0.5}
                    glow={1}
                />
            </div>
        </section>
    )
}

export default Hero