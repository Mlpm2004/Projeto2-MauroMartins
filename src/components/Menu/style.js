import styled from 'styled-components'

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
    height: 50px;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background: white;
    color: gray;
    width: 180
    height: 50px;
    border:1px solid green;
    border-radius:0.3rem;
    text-decoration: none;
    &:focus{
        color:withe;
        background-color:"#4CAF50"
    }
`;

export const LinhaBotao=styled.div`
    margin:20px;
    heigth:50px;
text-decoration: none
`;