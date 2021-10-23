import React from 'react'
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


const InfoSection = (props) => {
    return (
        <>
            <InfoContainer lightBg={props.lightBg} id={props.id}>          
                <InfoWrapper>
                    <InfoRow imgStart={props.imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={props.lightText}>{props.headline}</Heading>
                                <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
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
