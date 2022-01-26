import styled from "styled-components";
/* Estiliza botaõ conforme a necessidade */
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
  height: 40px;
  border:1px solid green;
  border-radius:0.3rem;
  text-decoration:none;
      
`;





