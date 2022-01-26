import styled from 'styled-components'
/* folhas de estilo que irão formatar a tela de Menu*/
export const Container = styled.div`
    width:200px;
    heigth:100%;
`;
export const Nav = styled.nav`
    
`;

export const Logotipo=styled.img`
    width:200px;
`;

export const BotaoMenu=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin:10px;
    background: white;
    color: gray;
    width: 150px;
    height: 50px;
    border:1px solid green;
    border-radius:0.3rem;
    &:hover{
        color:white;
        background-color:#4CAF50;
    }
`;
export const Centraliza=styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`;
export const LinhaBotao=styled.div`
    display: flex;
    justify-content: center;
    margin:20px;
    heigth:50px;

`;
export const Saudacao=styled.div`
    heigth:30px;
    padding:10px;
    border-radius:0.5rem;
    background-color:orange;
    font-size:12px;
    font-weight:bold;
`;