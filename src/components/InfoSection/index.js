import React from 'react'
import { useState } from 'react'
import { MdDescription } from 'react-icons/md'
import { Button } from '../ButtonElement'
import { 
    InfoContainer, 
    InfoWrapper,
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLineWrapper,
    TopLine, 
    Heading, 
    Subtitle, 
    ImgWrap, 
    Img
} from './InfoElements'

import aos from 'aos';
import "aos/dist/aos.css"


const InfoSection = (props) => {

    aos.init()

    return (
        <>
            <InfoContainer lightBg={props.lightBg} id={props.id}>          
                <InfoWrapper>
                    <InfoRow imgStart={props.imgStart}>
                        <Column1 data-aos="fade-right" >
                            <TextWrapper>
                                <Heading lightText={props.lightText}>{props.headline}</Heading>
                                <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2 data-aos="fade-left">
                            <ImgWrap>
                            <Img src={props.img} alt={props.alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
