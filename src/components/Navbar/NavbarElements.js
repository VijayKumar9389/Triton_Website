import styled from 'styled-components'
// import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
background: ${({ scrollNav }) => (scrollNav ? '#1f365c' : '#fff')};
height: 150px;
margin-top: -150px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 100;
transition: 0.8s all ease;
overflow-x: hidden;
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1000;
width: 100%;
padding: 0 24px;


`

export const NavLogo = styled(LinkS)`
    color: blue;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    margin-left: 0;
`
export const Navlogo = styled.img`
width: auto;
height: 140px;
z-index: 110;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 150%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ scrollNav }) => (scrollNav ? '#fff' : 'black')};
    -webkit-tap-highlight-color: transparent;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkS)`
color: ${({ scrollNav }) => (scrollNav ? '#fff' : 'black')};
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size: 1.2rem;

&.active {
    border-bottom: 3px solid #68bd45;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(LinkS)`
border-radius: 50px;
background: #68bd45;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s all ease-in-out;
    background: ${({ scrollNav }) => (scrollNav ? '#fff' : '#1f365c')};
    color: ${({ scrollNav }) => (scrollNav ? '#010606' : '#fff')};
}
`


