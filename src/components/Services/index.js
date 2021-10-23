import React from 'react'
import icon from '../../images/iconOne.svg'
import icon2 from '../../images/iconTwo.svg'
import icon3 from '../../images/iconThree.svg'
import icon4 from '../../images/iconFour.svg'

import { 
    ServicesContainer,
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id={'about'}>
            <ServicesH1>About Us</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon} />
                    <ServicesH2>10 YEARS OF EXPERIENCE</ServicesH2>
                    <ServicesP>solutions create public awareness plans and we execute on these in order to effect positive behavioral changes.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2} />
                    <ServicesH2>OUR SAFETY COMMITMENT</ServicesH2>
                    <ServicesP>We are committed to maintaining the highest standards of safety and enhancing public safety and environmental protection through increased public awareness and knowledge.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3} />
                    <ServicesH2>HOW TO IDENTFY A PIPELINE</ServicesH2>
                    <ServicesP>Since most pipelines are buried underground, markers are used to indicate the approximate location of pipelines at regular intervals along the pipeline right-of-way.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon4} />
                    <ServicesH2>Emergency Contact Numbers</ServicesH2>
                    <ServicesP>If there’s ever and emergency click here to see a list of numbers to contact.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
