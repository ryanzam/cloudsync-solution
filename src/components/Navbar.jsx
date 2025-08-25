import React from 'react'
import CardNav from '../components/RB/CardNav/CardNav'

const logo = './cloudsync.PNG'
const items = [
    {
        label: "About",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
            { label: "Company", ariaLabel: "About Company", href: "#about" },
            { label: "Get Started", ariaLabel: "Get Started", href: "#contact" },
        ]
    },
    {
        label: "Features",
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
            { label: "Collaboration", ariaLabel: "Collaboration", href: "#features" },
            { label: "Automation", ariaLabel: "Automation", href: "#features" },
            { label: "Analytics", ariaLabel: "Analytics", href: "#features" }
        ]
    },
    {
        label: "Pricing",
        bgColor: "#170A00",
        textColor: "#fff",
        links: [
            { label: "Basic", ariaLabel: "Basic", href: "#pricing" },
            { label: "Pro", ariaLabel: "Professional", href: "#pricing" },
            { label: "Enterprise", ariaLabel: "Enterprise", href: "#pricing" }
        ]
    },
]

const Navbar = () => {

    return (
        <CardNav
            logo={logo}
            logoAlt="Company Logo"
            items={items}
            baseColor="#fff"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
        />
    )
}

export default Navbar