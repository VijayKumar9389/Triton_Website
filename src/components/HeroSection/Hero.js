import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

const HeroSection = styled.section`
margin-top: 80px;
height: 680px;
max-height: 1100px;
position: relative;
overflow: hidden;
background-color: black;
z-index: 15;
`;

const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
z-index: 5;
background-color: #1f365c;
`;

const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
`;

const HeroSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
text-align: center;
align-items: center;
justify-content: space-between;



&::before{
    content: '';
    position: absolute;
    z-index: 10;
    width: calc(var(--width, 0) * 1%);
    height: 10px;
    top: 70px;
    left: 0;
    overflow: hidden;
    opacity: 1;
    background: #68bd45;
    animation: progress-animation 15s infinite
}


@keyframes progress-animation {
0% {width: 0%;}
100% {width: 100%;}
}

@media screen and (max-width: 800px) {
 justify-content: center;
}

`;



const HeroImage = styled.img`
position: absolute;
bottom: 0;
right: 0;
width: 55%;
height: 100vh;
clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
object-fit: cover;
animation: fadeIn 3s;

@media screen and (max-width: 800px) {
 width: 100%;
 height: 100%;
 clip-path: none; 
}

`;



const HeroContent = styled.div`
position: relative;
margin-left: 4rem;
z-index: 10px;
display: flex;
max-width: 1600px;
width: calc(40% - 60px);
color: #fff;

@media screen and (max-width: 800px) {
    margin-left: 0%;
    width: 80%;
    text-align: center;
    
}

#ContentCover{

    @media screen and (max-width: 800px) {

    z-index: 5;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 10px;
}
    
  
}   

h1{
    font-size: clamp(1rem, 6vh, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: center;
    margin-bottom: 0.8rem;
    animation: liftfadeIn 2s;
    z-index: 12;
    
}

@keyFrames dropfadeIn {
    from {transform: translateY(-30px); opacity: 0;}
  to { transform: translateY(0); opacity: 1;} 
}

@keyFrames liftfadeIn {
    from {transform: translateY(30px); opacity: 0;}
  to { transform: translateY(0); opacity: 1;} 
}

@keyFrames fadeIn {
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
}

p {
    padding-top: 20px;
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    animation: dropfadeIn 2s;
}

`;

const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
position: absolute;
bottom: 50px;
left: 19%;
display: flex;
z-index: 10;

@media screen and (max-width: 800px) {
    left: auto;
}
`

const arrowButtons = css`
width: 50px;
height: 50px;
color: #fff;
cursor: pointer;
background: #000d1a;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover {
    background: #68bd45;
    transform: scale(1.05);
}
`

const PrevArrow = styled(IoArrowBack)`
${arrowButtons}
`

const NextArrow = styled(IoArrowForward)`
${arrowButtons}
`

const Hero = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length - 1
    const timeout = useRef(null)

    useEffect(() => {

        timeout.current = setTimeout(nextSlide, 15000)

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        }

    }, [current, length])


    const nextSlide = () => {
        setCurrent(current === length ? 0 : current + 1)
        document.getElementById('test').style.opacity = 1;

    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length : current - 1)
    };

    return (
        <HeroSection id='home'>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                    <HeroImage src={slide.image} alt={slide.alt} />

                                    <HeroContent>
                                        <div id='ContentCover'>
                                            <h1 id="test">{slide.title}</h1>
                                            <p>{slide.price}</p>
                                        </div>
                                    </HeroContent>

                                </HeroSlider>
                            )};
                        </HeroSlide>
                    );
                })};
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero