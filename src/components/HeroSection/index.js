import React from 'react'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { SliderData } from './SliderData'
import Hero from './Hero'
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP,
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight
} from './HeroElements'


const HeroSection = () => {

    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
 

    return (
        <HeroContainer id='home'>
            {/* <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>This is a test Website</HeroH1>
                <HeroP>Vijay Kumar</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true' >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent> */}

            <Hero slides={SliderData}/>
        </HeroContainer>
    )
}

export default HeroSection
