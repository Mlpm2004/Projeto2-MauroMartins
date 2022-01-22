import styled from "styled-components";

export const Externo= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin:10px;
`;

export const Buttonformat=styled.button`
  background: ${(props) => props.cor};
  color: ${(props) => props.colorText};
  height: 50px;
  width: ${(props) => props.width};
       
`;


export const ButtonDescription=styled.label`
    font-size:16px;
    font-weight: bold;
    padding-left: 10px;
`;



