import styled from 'styled-components'

export const ServicesContainer = styled.div`
height: fit-content;
min-height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background: #f7f7f7;
padding-bottom: 100px;


@media screen and (max-width: 768px) {
    height: fit-content;
}

@media screen and (max-width: 480px) {
    height: fit-content;
}
`

export const ServicesWrapper = styled.div`
max-width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
justify-content: center;
grid-gap: 20px;
padding: 0 50px;

@media screen and (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}

@media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;

}
`

export const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20px;
height: 400px;
width: 400px;
padding: 50px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
}

@media screen and (max-width: 480px) {
    width: fit-content;
}
`

export const ServicesIcon = styled.img`
height: 150px;
width: 150px;
margin-bottom: 30px;
`

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: black;
padding: 100px;
text-transform: uppercase;
`

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`