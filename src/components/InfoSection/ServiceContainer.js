import React from 'react'
import InfoSection from './index'
import { homeOBJOne, homeOBJTwo, homeOBJThree, homeOBJFour, homeOBJFive } from './Data'
import { TopLineWrapper, TopLine } from './InfoElements'


const ServiceContainer = () => {
    return (
        <>
            <div id='services'>

                <TopLineWrapper>
                    <TopLine>Services</TopLine>
                </TopLineWrapper>

                <InfoSection {...homeOBJOne} />
                <InfoSection {...homeOBJTwo} />
                <InfoSection {...homeOBJThree} />
                <InfoSection {...homeOBJFour} />
                <InfoSection {...homeOBJFive} />
                
            </div>
        </>
    )
}

export default ServiceContainer
