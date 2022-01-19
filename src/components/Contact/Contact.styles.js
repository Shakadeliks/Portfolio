import styled from "styled-components";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

export const ContactContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 2.5rem;
    background-color: rgba(255, 186, 8, 0.7);

`

export const ContactHeader = styled.h2`
    font-family: "Jost", sans-serif;
    font-style: italic;
    color: ${({ theme }) => theme.orange}; 
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.3);
`

export const ContactContent = styled.div`
    margin: 5.5rem 0 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    z-index: 1;

    @media screen and (max-width: 917px) {
        flex-direction: column;
        justify-content: space-between;
    }
`

export const EmailAddy = styled.a`
    color:  #FFBA08;
    font-family: "Jost", sans-serif;
    font-weight: 700;
    cursor: pointer;
    font-size: 2rem;
    text-transform: uppercase;
    transition: all ease-in-out .3s;
    text-decoration: none;
    z-index: 1;

    @media screen and (max-width: 917px) {
        margin: 2.5rem 0;
    }

    @media screen and (max-width: 605px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 400px) {
        font-size: 1.2rem;
    }

    &:hover {
        text-shadow: 0 0 1.5px ${({ theme }) => theme.orange},
        0 0 10px ${({ theme }) => theme.orange},
        0 0 5px ${({ theme }) => theme.orange},
        0 0 25px ${({ theme }) => theme.orange}; 
        
    } 
`

export const ContactLink = styled.a`
    cursor: pointer;
    z-index: 1;
`

export const LinkedIn = styled(AiFillLinkedin)`
    cursor: pointer;
    color: #FFBA08;
    font-size: 4rem;
    transition: all ease-in-out .3s;
    &:hover {
        color: white; 
        
    }
`

export const GitHub = styled(FaGithubSquare)`
    color: #FFBA08;
    cursor: pointer;
    font-size: 4rem;
    transition: all ease-in-out .3s;
    &:hover {
        color: white; 
        
    }
`

export const ContactImg = styled.img`
    filter: invert(83%) sepia(19%) saturate(6854%) hue-rotate(352deg) brightness(104%) contrast(104%);
    margin-top: -2rem;
    width: 450px;
    height: 450px;

    @media screen and (max-width: 605px) {
        width: 350px;
        height: 350px;
        margin-top: -2.8rem;
    }

    @media screen and (max-width: 400px) {
        width: 300px;
        height: 300px;
        margin-top: -5rem;
    }
`

export const Credit = styled.p`
    color: white;
    font-family: "Jost", sans-serif;
    font-size: 1.1rem;
    
`


