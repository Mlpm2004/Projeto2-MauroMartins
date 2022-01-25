import styled from "styled-components";

export const Externo= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin:10px;
`;

export const Buttonformat=styled.button`
  background: ${(props) => props.colorBackground};
  color: ${(props) => props.colorText};
  width: ${(props) => props.width};
  name: ${(props) => props.name};
  height: 40px;
  border:1px solid green;
  border-radius:0.3rem;
  text-decoration:none;
      
`;


export const ButtonDescription=styled.label`
    font-size:16px;
    font-weight: bold;
    padding-left: 10px;
`;



