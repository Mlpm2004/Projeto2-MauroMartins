import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../context/login';
import {Container,Nav,Logotipo,BotaoMenu,LinhaBotao,Centraliza}  from './style';
import ImgLogo from '../../images/logosolar.png';
function Menu() {

  const {username} = useContext(LoginContext)

  return (
    <Container>
        <Nav >
            <Logotipo src={ImgLogo} alt="logotipo"/>
            <h5 >Bem Vindo {username}</h5>
            <LinhaBotao ><Link to="/dashboard" className='remove '><BotaoMenu><Centraliza>Dashboard</Centraliza></BotaoMenu></Link></LinhaBotao>
            <LinhaBotao><Link to="/unidades" className='remove '><BotaoMenu><Centraliza>Unidade Consumidora</Centraliza></BotaoMenu></Link></LinhaBotao>
            <LinhaBotao><Link to="/geracoes" className='remove'><BotaoMenu><Centraliza>Cadastro de Energia Gerada</Centraliza></BotaoMenu></Link></LinhaBotao>
       </Nav>
    </Container>
  );
}

export default Menu;