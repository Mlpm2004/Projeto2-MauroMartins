import React from "react";
import ImgSolar from '../../images/solar.png';
import Menu from '../../components/Menu';
import {ContainerPage,Container,ContainerMenu} from './style'
function Home(){
    console.log("home")
    return (
        <Container>
            <ContainerMenu>
                <Menu/>
            </ContainerMenu>
            <ContainerPage>
                <img  width='100%' src={ImgSolar} alt="logotipo"/>
            </ContainerPage>

        </Container>
    );
}
export default Home