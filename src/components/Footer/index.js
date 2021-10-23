import React from 'react'
import { 
    FooterContainer, 
    FooterWrap, 
    CompanyName,
    WebsiteRights

   } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <CompanyName>TRITON PUBLIC AWARENESS ©</CompanyName>
                <WebsiteRights>{new Date().getFullYear()} All rights reserved</WebsiteRights>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
