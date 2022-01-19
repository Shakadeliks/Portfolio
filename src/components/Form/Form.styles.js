import styled from "styled-components"

export const FormContainer = styled.form`
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;

    @media only screen and (max-width: 900px) {
        width: 80%;
    }

    @media only screen and (max-width: 500px) {
        width: 95%;
    }

    @media only screen and (max-width: 400px) {
        width: 105%;
    }
`
export const FormDataGroup = styled.div`

    width: 100%;
    margin-bottom: 2rem;

`

export const Label = styled.label`
    font-family: "jost", sans-serif;
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.3);
    color: ${({ theme }) => theme.orange};
    font-style: italic;
    font-size: 1.2rem;
`


export const Input = styled.input`
    width: 100%;
    padding: 1rem;
    color: ${({ theme }) => theme.orange};
    background-color: black;
    border: none;
    border-radius: 2rem;
    font-size: 1.2rem;
    outline: none;
    margin-top: 1rem;
    font-family: "jost", sans-serif;
    overflow: hidden;
`

export const TextField = styled.textarea`
    width: 100%;
    padding: 1.2rem;
    color: ${({ theme }) => theme.orange};
    background-color: black;
    border: none;
    border-radius: 2rem;
    font-size: 1.2rem;
    outline: none;
    margin-top: 1rem;
    overflow: hidden;
    min-height: 250px;
    resize: vertical;
    font-family: "jost", sans-serif;

`

export const SubmitBtn = styled.button`
    background: #FFBA08; 
    color: black;
    text-decoration: none;
    cursor: pointer;
    transition: all ease-in-out .3s;
    border-radius: 1rem;
    outline: none;
    border: none;
    width: 8.5rem;
    height: 2rem;
    font-family: "jost", sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    text-align: center;

    &:hover {
        background-color: white;
    }
`