import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import { Link as LinkS } from 'react-scroll'

export const ContactContainer = styled.div`
background: #21242e;
display: block;
justify-content: center;
align-items: center;
text-align: center;
min-height: 900px;

`
export const ContactImg = styled.img`

`

export const ContactImgWrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
padding: 10px 0;
`

export const ContactH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
padding: 100px;
text-transform: uppercase;
`

export const ContactH2 = styled.h2`
color: #fff;
font-size: 2rem;
margin-bottom: 20px;
`

export const FormBtn = styled(LinkS)`
border-radius: 50px;
background: #68bd45;
padding: 14px 20px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
width: 200px;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s all ease-in-out;
    background: #fff;
    color: #010606;
}
`

export const FormBtnWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const ContactFormH2 = styled.h2`
color: #fff;
font-size: 2rem;
margin-bottom: 20px;
margin-left: 10px;
`

export const ContactP = styled.p`
color: #fff;
font-size: 1rem;
font-weight: 400;
text-align: left;
margin-left: 20px;
`

export const Contactwrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
justify-items: center;


@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`

export const ContactForm = styled.div`

width: 40vw;
height: 600px;


@media screen and (max-width: 768px) {
    margin: 50px 0;
    width: 80vw;
    text-align: left;
}
`

export const FormInput = styled.input`
width: 90%;
padding: 15px;
margin: 10px 0;
outline: none;
border-radius: 10px;
border:none

`

export const FormTextArea = styled.textarea`
width: 90%;
height: 150px;
padding: 10px;
margin: 20px 0;
margin-bottom: 50px;
outline: none;
border-radius: 10px;
border:none
`

export const ContactInfo = styled.div`
display: block;
width: 40vw;
height: 600px;


@media screen and (max-width: 768px) {
    margin-top: 50px;
    width: 80vw;
}
`

export const MapContainer = styled.div`
display: flex;
height: 350px;

#Map{
    border: 0;
    height: 100%;
    width: 100%;
}

`

export const ContactInfoContainer = styled.div`
width: 100%;
height: 250px;
text-align: left;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`


