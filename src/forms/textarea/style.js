import styled from "styled-components";

export const Externo= styled.div`
    display:flex;
    flex-direction:column;

`;

export const TextAreaformat=styled.textarea`
    height: 60px;
    border:1px solid green;
    border-radius:0.3rem;
    padding: 5px 10px;
    resize: none;
    &:focus{
        color-border:#EC6D08;
    }

`;

export const TextAreaDescription=styled.label`
    font-size:16px;
    font-weight: bold;
    padding: 5px;
`;



