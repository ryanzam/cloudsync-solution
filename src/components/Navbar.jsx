import React from 'react'
import CardNav from '../components/RB/CardNav/CardNav'

const logo = './cloudsync.PNG'
const items = [
    {
        label: "About",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
            { label: "Company", ariaLabel: "About Company" },
            { label: "Get Started", ariaLabel: "Get Started" },
        ]
    },
    {
        label: "Features",
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
            { label: "Collaboration", ariaLabel: "Collaboration" },
            { label: "Automation", ariaLabel: "Automation" },
            { label: "Analytics", ariaLabel: "Analytics" }
        ]
    },
    {
        label: "Pricing",
        bgColor: "#170A00",
        textColor: "#fff",
        links: [
            { label: "Basic", ariaLabel: "Basic" },
            { label: "Pro", ariaLabel: "Professional" },
            { label: "Enterprise", ariaLabel: "Enterprise" }
        ]
    },
    {
        label: "Contact",
        bgColor: "#170C00",
        textColor: "#fff",
        links: [
            { label: "Links", ariaLabel: "Link" },
            { label: "Contact Us", ariaLabel: "contact us" },
        ]
    }
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