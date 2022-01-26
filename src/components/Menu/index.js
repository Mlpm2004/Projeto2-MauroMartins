// DEPENDÊNCIAS
import { Link } from 'react-router-dom';
import {Container,Nav,Logotipo,BotaoMenu,LinhaBotao,Centraliza,Saudacao}  from './style';
import ImgLogo from '../../images/logosolar.png';

function Menu() {
  const username=sessionStorage.getItem('username'); //carrega o nome do usuário logado em uma sessionstorage
  return (
    <Container>
        <Nav >
            <Logotipo src={ImgLogo} alt="logotipo"/>
            <Centraliza><Saudacao>Bem Vindo {username}</Saudacao></Centraliza>
            <LinhaBotao ><Link to="/dashboard" className='remove '><BotaoMenu><Centraliza>Dashboard</Centraliza></BotaoMenu></Link></LinhaBotao>
            <LinhaBotao><Link to="/unidades" className='remove '><BotaoMenu><Centraliza>Unidade Consumidora</Centraliza></BotaoMenu></Link></LinhaBotao>
            <LinhaBotao><Link to="/geracoes" className='remove'><BotaoMenu><Centraliza>Cadastro de Energia Gerada</Centraliza></BotaoMenu></Link></LinhaBotao>
       </Nav>
    </Container>
  );
}

export default Menu;