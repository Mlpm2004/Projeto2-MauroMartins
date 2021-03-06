import React from "react";
import { useState,useContext } from "react";
import {Container,RigthSide,LeftSide,Logotipo,SolarImagem,ContainerHome,AlignForm} from './style';
import ImgSolar from '../../images/solar.png';
import ImgLogo from '../../images/logosolar.png';
import Input from '../../forms/input';
import Button from '../../forms/button';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom'
function Login(){
    const [email,setEmail]=useState('');
    const [senha,setSenha]=useState('');
    let nome=""
    const history = useNavigate()
    function handleRedirect() { //Encaminha para esta rota quando login ok
        
        history('/dashboard')
    }
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch( // Verifica se email corresponde
                `http://localhost:3333/login?email=${email}`
            )
            const data = await response.json()
            if (data.map((senha)=>senha.senha)==senha && senha!=""){ //Confere a senha
                nome=data.map((nome)=>nome.nome)
                toast.success('Bem Vindo '+nome)
                sessionStorage.setItem('username',nome)
                handleRedirect()
            }else{
                if (senha==""){ //Testa campos obrigatorios
                    toast.warning('Campo Senha não pode ser vazio')
                }else if(email==""){
                    toast.warning('Campo Email não pode ser vazio')
                } else{
                    toast.warning('Usuario ou Senha Incorretos')
                }
            }
        } catch (error) {
            toast.error('Erro Interno, contae Administrador do sistema')
        }
    }
    return(
        <Container>
            <ContainerHome>
                <LeftSide>
                    <SolarImagem src={ImgSolar} alt="Logotipo"/>
                </LeftSide>
                <RigthSide>
                    <ContainerHome>
                        <Logotipo src={ImgLogo} alt="Logotipo"/>
                    </ContainerHome>
                    <AlignForm>
                        <form onSubmit={handleSubmit}>
                            <h3>Seja bem vindo!</h3>
                            <Input 
                                value={email}
                                type="mail"
                                placeholder="E-mail"
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                            <Input 
                                value={senha}
                                type="password"
                                placeholder="Senha"
                                onChange={(e)=>{setSenha(e.target.value)}}
                            />
                            <Button 
                                type="submit"
                                colorBackground="#4CAF50"
                                colorText="white"
                                width="184px"
                                
                            >Entrar</Button>
                        </form>
                    </AlignForm>
                </RigthSide>
            </ContainerHome>
        </Container>

    );

}

export default Login;