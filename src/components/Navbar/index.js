import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import {animateScroll as scroll} from 'react-scroll'
import Logo from '../../images/mainLogo.png'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    Navlogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = (props) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        
        if (window.scrollY >= 720) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}><Navlogo src={Logo} /></NavLogo>
                    <MobileIcon scrollNav={scrollNav} onClick={props.toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} to="home" smooth={true} duration={500} spy={true} exact='true' offset={-150}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} to="about" smooth={true} duration={500} spy={true} exact='true' offset={-150}>About Us</NavLinks>
                        </NavItem>
                        
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} to="services" smooth={true} duration={500} spy={true} exact='true' offset={-150}>Services</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink scrollNav={scrollNav} to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-150}>Contact</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
