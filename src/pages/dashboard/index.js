import React  from "react";
import  {useEffect,useState} from "react";
import Menu from '../../components/Menu';
import {InfoCard,ContainerPage,Container,ContainerMenu,ContainerFundo,ContainerSuperior,ContainerInferior,Card,TituloCard} from './style'
function Dashboard(){
    const [unidades, setUnidades] = useState([])
    const [totalUnidades, setTotalUnidades] = useState('')
    const [unidadesAtivas, setUnidadesAtivas] = useState('')
    const [media, setMedia] = useState('')

    useEffect(() => {
        async function handleGetUnits() {
            const response = await fetch(
                `http://localhost:3333/unidades`
            )
            const data = await response.json()
            setUnidades(data)
            setTotalUnidades(data.length)
            setUnidadesAtivas(data.filter(x => x.ativo === "true").length)
        }
        async function handleGetTotal() {
            const response = await fetch(
                `http://localhost:3333/geracoes`
            )
            const data = await response.json()
            setMedia(data.reduce((a,b) => a+parseInt(b.total),0))
        }
        handleGetUnits();
        handleGetTotal();
    }, [])
   return (
        <Container>
            <ContainerMenu>
                <Menu/>
            </ContainerMenu>
            <ContainerPage>
                <h2>Dashboard</h2>
                <ContainerFundo>
                    <ContainerSuperior>
                        <Card>
                            <TituloCard>Total Unidades</TituloCard>    
                            <InfoCard>{totalUnidades}</InfoCard>    
                       </Card>
                        <Card>
                            <TituloCard>Unidades Ativas</TituloCard>    
                            <InfoCard>{unidadesAtivas}</InfoCard>    
                        </Card>
                        <Card>
                            <TituloCard>Unidades Inativas</TituloCard>    
                            <InfoCard>{totalUnidades-unidadesAtivas}</InfoCard>    
                        </Card>
                        <Card>
                            <TituloCard>Media de Energia</TituloCard>    
                            <InfoCard>{(media/totalUnidades).toFixed(2)}</InfoCard>    
                        </Card>
                   </ContainerSuperior>
                    <h3>Consumo Mensal</h3>
                    <ContainerInferior>
                    </ContainerInferior>
               </ContainerFundo>
            </ContainerPage>

        </Container>
    );
}
export default Dashboard