import styled from "styled-components";

export const AboutContainer = styled.div`
    color: white;
    background-color: rgba(255, 186, 8, 0.7);
`
export const AboutWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 4rem 24px;
    justify-content: center;
`

export const Row = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 980px) {
        flex-direction: row;
    }
`

export const Column1 = styled.div`
    padding: 0 15px;
    margin: auto 0;
`

export const Column2 = styled.div`
    width: 50%;
    display: table;
    margin-left: 2rem;

    @media screen and (max-width: 600px) {
       order: 1;
    }
  
`

export const Heading = styled.h2`
    font-family: "Jost", sans-serif;
    font-style: italic;
    color: #FFBA08;
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.3); 
`



export const Bio = styled.p`
    color: white;
    font-family: "Jost", sans-serif;
    vertical-align: middle;
    font-size: 1.2rem;
    line-height: 200%;
`
export const Hieroglyph = styled.img`
    filter: invert(83%) sepia(19%) saturate(6854%) hue-rotate(352deg) brightness(104%) contrast(104%);
    height: 350px;
    width: 350px;

    @media screen and (max-width: 600px) {
       height: 350px;
       width: 350px; 
    }

    @media screen and (max-width: 450px) {
       height: 300px;
       width: 300px; 
    }
`