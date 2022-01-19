import styled, { keyframes } from "styled-components";

export const borderBlink = keyframes`
    0%,
    20%,
    22%,
    25%,
    28%,
    55%,
    57%,
    63%,
    100% {
        color: ${({ theme }) => theme.orange};
        box-shadow: 0 0 .5rem #fff,
            inset 0 0 .5rem #fff,
            0 0 2rem ${({ theme }) => theme.orange},
            inset 0 0 2rem ${({ theme }) => theme.orange},
            0 0 4rem ${({ theme }) => theme.orange},
            inset 0 0 4rem ${({ theme }) => theme.orange};
        border-color: ${({ theme }) => theme.orange};
    }

    21%,
    24%,
    56% {
        box-shadow: none;
    }
`

export const textBlink = keyframes`
    0%,
    20%,
    22%,
    25%,
    28%,
    55%,
    80%,
    100% {
        text-shadow: 0 0 2px ${({ theme }) => theme.orange},
            0 0 10px  ${({ theme }) => theme.orange},
            0 0 5px  ${({ theme }) => theme.orange},
            0 0 25px  ${({ theme }) => theme.orange};
        opacity: 1;
        color:  ${({ theme }) => theme.orange};
    }

    21%,
    24%,
    56% {
        opacity: 0.2;
        text-shadow: none;
    }
`
export const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    
    @media screen and (max-width: 1124px) {
        flex-direction: column;
    }
`

export const Heading = styled.h1`

    font-family: 'Lacquer', sans-serif;
    text-align: center;
    font-size: 4.5rem;
    color: ${({ theme }) => theme.orange};
    user-select: none;
    padding: 40px;
    margin: 0rem auto;
   
    text-shadow: 0 0 1.5px ${({ theme }) => theme.orange},
        0 0 10px ${({ theme }) => theme.orange},
        0 0 5px ${({ theme }) => theme.orange},
        0 0 25px ${({ theme }) => theme.orange};
    animation: 1.5s ${ textBlink } infinite alternate;

    @media screen and (min-width: 650px) {
        font-size: 5.5rem;
    }

    @media screen and (min-width: 1000px) {
        font-size: 6.5rem;
    }

    @media screen and (max-width: 505px) {
        font-size: 4.5rem;
    }

    @media screen and (max-width: 430px) {
        font-size: 3.8rem;
    }
`

export const HeaderImg = styled.img`
    filter: invert(83%) sepia(19%) saturate(6854%) hue-rotate(352deg) brightness(104%) contrast(104%);
    width: 350px;   
    height: 350px;

    @media screen and (max-width: 1358px) {
        width: 300px;
        height: 300px;
    }

    @media screen and (max-width: 1124px) {
        display: none;
    }
`

export const HeaderImgMobile = styled.img`

    filter: invert(83%) sepia(19%) saturate(6854%) hue-rotate(352deg) brightness(104%) contrast(104%);
    display: none;

    @media screen and (max-width: 775px) {
        display: block;
        width: 200px;
        height: 200px;
    }

    @media screen and (max-width: 1124px) {
        width: 300px;
        height: 300px;
        display: block;
    }
`



export const AnimatedCharacter = styled.span`
    animation: 0.5s ${ borderBlink } 1.5s infinite alternate;
`

export const AnimatedCharacter2 = styled.span`
    animation: 1s  ${ borderBlink } 1.5s infinite alternate;
`

