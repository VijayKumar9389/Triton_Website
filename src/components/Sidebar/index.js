import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute 
} from './SidebarElements'

const Sidebar = (props) => {
    return (
        <SidebarContainer  isOpen={props.isOpen} onClick={props.toggle}>
            <Icon onClick={props.toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={props.toggle} smooth={true} duration={500} spy={true} exact='true' offset={-150}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="about" onClick={props.toggle} smooth={true} duration={500} spy={true} exact='true' offset={-150}>
                        About Us
                    </SidebarLink>
                    <SidebarLink to="services" onClick={props.toggle} smooth={true} duration={500} spy={true} exact='true' offset={-150}>
                        Services
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="contact" onClick={props.toggle} smooth={true} duration={500} spy={true} exact='true' offset={-150}>Contact Us</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
