import styled, { css } from "styled-components"
import { textBlink, borderBlink } from "../Hero/Hero.styles"
import { CgMenuGridO, CgClose } from "react-icons/cg"
import { BrowserRouter as Router, Route, Switch, Link as LinkR } from "react-router-dom"
import { Link as LinkS } from "react-scroll"

export const NavContainer = styled.nav`
    height: 4rem;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 100;
    margin-top: -80px;
`
export const Nav = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;

`

export const Hamburger = styled(CgMenuGridO)`
    color: #FFBA08;
    cursor: pointer;
    font-size: 3rem;
    position: fixed;
    right: 1.5rem;
    top: 1rem;
    border-radius: 1.5rem;
    padding: 0.5rem;
    transition: all 0.3s;

    ${({ showNav }) => showNav
    ? css`
        display: none;`
    : css`
        display: block;`}  

    &:hover {
        box-shadow: 0 0 1.5px #FFBA08,
        0 0 10px #FFBA08,
        0 0 5px #FFBA08,
        0 0 25px #FFBA08;
    }
    
    @media screen and (min-width: 900px) {
        display: none;
    }
    
`

export const Close = styled(CgClose)`
    color: #FFBA08;
    position: fixed;
    right: 1.5rem;
    top: 1rem;
    font-size: 3rem;
    border-radius: 1.5rem;
    transition: all 0.3s;

    ${({ showNav }) => showNav
    ? css`
        display: none;`
    : css`
        display: block;`}

    &:hover {
        box-shadow: 0 0 1.5px #FFBA08,
        0 0 10px #FFBA08,
        0 0 5px #FFBA08,
        0 0 25px #FFBA08;
    }

    @media screen and (min-width: 900px) {
        display: none;
    }
`

export const NavMenu = styled.ul`
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,0.6); 
    z-index: 100;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${({ showNav }) => showNav
    ? css`
        display: flex;`
    : css`
        display: none;`} 

    @media screen and (min-width: 900px) {
    
        position: sticky;
        top: auto;
        left: auto;
        height: 80px;
        width: auto;
        position: relative;
        flex-direction: row;

        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }    
`

export const NavLink = styled(LinkS)`
    
    cursor: pointer;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    font-size: 2rem;
    height: 100%;
    margin: 2rem 0;
    font-family: "Lacquer";
    color: ${({ theme }) => theme.orange};
    transition:all 0.3s;

    &:hover {
        text-shadow: 0 0 1.5px ${({ theme }) => theme.orange},
        0 0 10px ${({ theme }) => theme.orange},
        0 0 5px ${({ theme }) => theme.orange},
        0 0 25px ${({ theme }) => theme.orange};
        animation: 5s ${ borderBlink } infinite alternate;
    }

    &.active {
        border-bottom: 3px solid ${({ theme }) => theme.orange};
    }
`
