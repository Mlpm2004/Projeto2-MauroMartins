import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../context/login';
import {Container,Nav,Logotipo,BotaoMenu,LinhaBotao}  from './style';
import ImgLogo from '../../images/logosolar.png';
function Menu() {

  const {username} = useContext(LoginContext)

  return (
    <Container>
        <Nav >
            <Logotipo src={ImgLogo} alt="logotipo"/>
            <h5 >Bem Vindo {username}</h5>
            <LinhaBotao><Link to="/dashboard" className='remove'><BotaoMenu>Dashboard</BotaoMenu></Link></LinhaBotao>
            <LinhaBotao><Link to="/unidades" className='remove'><BotaoMenu>Unidades</BotaoMenu></Link></LinhaBotao>
            <LinhaBotao><Link to="/geracoes" className='remove'><BotaoMenu>Cadastro de Energia Gerada</BotaoMenu></Link></LinhaBotao>
       </Nav>
    </Container>
  );
}

export default Menu;