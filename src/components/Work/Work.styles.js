import styled from "styled-components"
import {textBlink} from "../Hero/Hero.styles"

export const WorkContainer = styled.div`
   
`

export const WorkIcon = styled.img`
    filter: invert(83%) sepia(19%) saturate(6854%) hue-rotate(352deg) brightness(104%) contrast(104%);
    position: relative;
    left: 50%;
    top: -25px;
    transform: translateX(-50%);
    height: 325px;
    width: 325px;
`

export const ProjectsGridContainer = styled.div`
    /* max-width: 1000px; */
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 13px;
    row-gap: 2rem;
    padding: 0 50px;
    margin-top: 1rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const WorkHeading = styled.h2`
    font-family: "Jost", sans-serif;
    font-style: italic;
    color: #FFBA08;
    font-weight: 700;
    text-align: center;
    position: relative;
    transform: translateY(-100%);
    background-color: rgba(0, 0, 0, 0.5); 
`

 export const HoverOverlay = styled.div`

    display: none;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    overflow: hidden;
    width: 100%;
    height:100%;
    transition: .5s ease-in-out;
    background-color: rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 801px) {
        display: flex;
    }
    
 `

export const WorkCard = styled.div`
    
    border-radius: 3px solid #FFBA08;
    height: 300px;
    border-radius: 1rem;
    overflow: hidden;
    transition: all ease-in-out .4s;
    z-index: 1;
    background-size: 120%;
    background-position: center; 

    &:hover {
        box-shadow: 0 0 1.5px #FFBA08,
            0 0 10px #FFBA08,
            0 0 5px #FFBA08,
            0 0 25px #FFBA08;
    }

    @media screen and (min-width: 801px) {
        &:hover {
        ${HoverOverlay} {
            display:flex;
        }
    }
    }
    

`

export const ImgWrap = styled.figure`
    position: relative;
    overflow: hidden;  
    width: 100%;
    height: 100%;
    background-size: contain;
`

export const ProjectImg = styled.img`
    height: 100%;

`

export const ProjectTitle = styled.h3`
    color: #FFBA08;
    font-family: 'Lacquer', sans-serif;
    text-align: center;
    font-size: 2rem;
    
    text-shadow: 0 0 1.5px ${({ theme }) => theme.orange},
        0 0 10px ${({ theme }) => theme.orange},
        0 0 5px ${({ theme }) => theme.orange},
        0 0 25px ${({ theme }) => theme.orange};

    @media screen and (min-width: 801px) {
        animation: 2.5s ${ textBlink } infinite alternate;    
    }
`

export const ProjectLinks = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    width: 100%;
    margin-top: 1.8rem;
`

export const LinkBtn = styled.a`
    background: #FFBA08; 
    color: black;
    width: 7rem;
    height: 2rem;
    border-radius: 1rem;
    font-family: "jost", sans-serif;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all ease-in-out .3s;
    z-index: 10;

    &:hover {
        background-color: white;
    }

    &.gitBtn {
        margin-top: 3rem;
    }
`