import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import { SliderData } from '../components/HeroSection/SliderData'
import Services from '../components/Services'
import Footer from '../components/Footer'
import ServiceContainer from '../components/InfoSection/ServiceContainer'
import Hero from '../components/HeroSection/Hero'
import Contact from '../components/Contact'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero slides={SliderData}/>
            <Services />
            <ServiceContainer />
            <Contact />


            <Footer />
        </div>
    )
}

export default Home
