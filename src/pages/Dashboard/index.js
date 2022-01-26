import React  from "react";
import  {useEffect,useState} from "react";
import Menu from '../../components/Menu';
import {ContainerPage,Container,ContainerMenu,ContainerFundo} from '../../style'
import {InfoCard,ContainerSuperior,ContainerInferior,Card,TituloCard,CentralizaGrafico} from './style'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// RENDERIZA TELA DASHBOARD
function Dashboard(){
    const urlBuscaGeracao=`http://localhost:3333/geracoes`;
    const [unidades, setUnidades] = useState([])
    const [totalUnidades, setTotalUnidades] = useState('')
    const [unidadesAtivas, setUnidadesAtivas] = useState('')
    const [potenciaConsumida, setPotenciaConsumida] = useState([])
    const [media, setMedia] = useState('')
    const [valoresMeses,setValoresMeses]= useState([])
    const dt = new Date();
    let somaConsumoMes=[]
    const mesCorrenteInt = parseInt(String(dt.getMonth() + 1). padStart(2, '0'));
    const anoCorrente = dt.getFullYear();
    const mesesAno =["Jan", "Feb", "Mar", "Apr", "Mai", "Jun","Jul","Ago","Set","Out","Nov","Dez"]
    let reiniciaMes=11
    let meses=[]
    // O gráfico deve mostrar os últimos 12 meses
    for (let i=0;i<=11;i++){ //REORGANIZA VETOR DE MESES CONFORME O MES CORRENTE
        if  ((mesCorrenteInt-i)>=1) {
            meses.push(mesesAno[mesCorrenteInt-1-i])
        }else{
            meses.push(mesesAno[reiniciaMes])
            reiniciaMes--
        } 
    }
    meses.reverse()
    // cria array com os dados necessários para o gráfico
    useEffect(()=>{
        async function handleGetPower(){
            const response = await fetch(urlBuscaGeracao);
            const data = await response.json();
            const medicoes = data.map((item)=>{
                return{
                    periodo :item.periodo,
                    total   :item.total
               }
            })
            setPotenciaConsumida(medicoes);
        }
        handleGetPower();
    },[])
    // array de dados pronto dispara o próximo useEffect que filtra e soma as informações de consumo mês a mês e cria array para plotagem
    useEffect(()=>{
        let reiniciaMes=12
        let mes=""
        function somaTotalMes(){
            for (let i=1;i<=12;i++){ //REORGANIZA VETOR DE MESES CONFORME O MES CORRENTE
                if  ((mesCorrenteInt)>=i) { // organiza dados do ano corrente
                    mes=mesDoisDigitos(mesCorrenteInt) 
                    somaTotalInsereVetor(potenciaConsumida.filter((unidade)=>unidade.periodo==anoCorrente+"-"+(mes)))
               }else{ // organiza dados no ano anterior
                    mes=mesDoisDigitos(reiniciaMes)
                    somaTotalInsereVetor(potenciaConsumida.filter((unidade)=>unidade.periodo==(anoCorrente-1)+"-"+(mes)))
                    reiniciaMes--
                } 
            }
            setValoresMeses(somaConsumoMes.reverse())
            function mesDoisDigitos(valor){ //Transforma mes integer em mes string com 2 digitos
                if ((valor)<=9){
                    return '0'+(valor).toString()
                }else{
                    return valor.toString()
                }
            }
            function somaTotalInsereVetor(consumoMes){ //Soma os totais do mes/ano e adiciona no array
                somaConsumoMes.push(consumoMes.reduce((a,b) => a+parseInt(b.total),0))
            }

        }
        somaTotalMes();
    },[potenciaConsumida])
// array de configuração do gráfico
    const data = {
        labels: meses,
        datasets: [
            {
            label: "Consumo",
            data: valoresMeses,
            borderColor: "rgba(75,192,192,1)"
            }
        ]
    };
// Coleta dados das unidades, calcula o número de unidades e quais estão ativas 
// Coleta dados de consumo e soma o total geral
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
   // Monta a tela
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
                            <TituloCard>Total de Unidades</TituloCard>    
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
                        <CentralizaGrafico>
                            <Line data={data}/>
                        </CentralizaGrafico>
                   </ContainerInferior>
               </ContainerFundo>
            </ContainerPage>

        </Container>
    );
}
export default Dashboard