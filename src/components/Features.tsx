import React from 'react'
import TiltedCard from './RB/TiltedCard/TiltedCard';

const Features = () => {
    const features = [
        { title: "Collaboration", desc: "Real-time collaboration tools for seamless teamwork.", icon: "https://img.freepik.com/free-photo/team-unity-friends-meeting-partnership-concept_53876-23043.jpg" },
        { title: "Automation", desc: "Automate repetitive tasks to save time.", icon: "https://img.freepik.com/free-photo/smart-microchip-background-motherboard-closeup-technology-remix_53876-104233.jpg" },
        { title: "Analytics", desc: "Gain insights with powerful analytics dashboards.", icon: "https://img.freepik.com/free-photo/data-analytics-tablet_23-2151957101.jpg" },
    ];

    return (
        <section id="features" className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12">Why Choose CloudSync?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <TiltedCard

                            imageSrc={feature.icon}
                            altText={feature.title}
                            captionText={feature.title}
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true} 
                        />

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features