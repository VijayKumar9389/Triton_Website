import React from 'react'
import { useState } from 'react'
import iconOne from '../../images/iconSix.svg'
import iconTwo from '../../images/iconSeven.svg'
import iconThree from '../../images/iconEight.svg'
import { Button } from '../ButtonElement'
import { FaArrowRight } from 'react-icons/fa'
import {
    ContactContainer,
    Contactwrapper,
    ContactForm,
    ContactInfo,
    MapContainer,
    ContactInfoContainer,
    ContactH1,
    ContactImg,
    ContactImgWrapper,
    ContactH2,
    ContactP,
    ContactFormH2,
    FormInput,
    FormTextArea,
    ArrowForward,
    ArrowRight,
    FormBtn,
    FormBtnWrapper

} from './ContactElements'

const Contact = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }



    return (
        <ContactContainer id='contact'>
            <div id='H2Wrapper' ><ContactH1>Contact</ContactH1></div>
            
            <Contactwrapper>
                <ContactInfo>
                    <ContactInfoContainer>
                            <ContactH2>Contact Info</ContactH2>
                        <ContactImgWrapper>
                            <ContactImg src={iconOne} />
                            <ContactP>211-3030 Lincoln Avenue Coquitlam BC V3B 6B4</ContactP>
                        </ContactImgWrapper>
                        <ContactImgWrapper>
                            <ContactImg src={iconTwo} />
                            <ContactP>778-846-2702</ContactP>
                        </ContactImgWrapper>
                        <ContactImgWrapper>
                            <ContactImg src={iconThree} />
                            <ContactP>info@tritonpublicawareness.com</ContactP>
                        </ContactImgWrapper>
                    </ContactInfoContainer>
                    <MapContainer>
                        <iframe id='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.8852793764227!2d-122.7941275843106!3d49.27857097933079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867f3437f475ab%3A0x41860b56507ca79b!2s3030%20Lincoln%20Ave%20%23%20211%2C%20Coquitlam%2C%20BC%20V3B%206B4!5e0!3m2!1sen!2sca!4v1634880952124!5m2!1sen!2sca" allowfullscreen=""></iframe>
                    </MapContainer>
                </ContactInfo>
                <ContactForm>
                    <ContactFormH2>Message Us</ContactFormH2>
                    <FormInput placeholder='Name' />
                    <FormInput placeholder='Company' />
                    <FormInput placeholder='Phone' />
                    <FormInput placeholder='Email' />
                    <FormTextArea placeholder='Message' />
                    <FormBtnWrapper>
                        <FormBtn onMouseEnter={onHover} onMouseLeave={onHover}>Submit {hover ? <ArrowForward /> : <ArrowRight />}</FormBtn>
                    </FormBtnWrapper>
                </ContactForm>
            </Contactwrapper>
        </ContactContainer>
    )
}

export default Contact
