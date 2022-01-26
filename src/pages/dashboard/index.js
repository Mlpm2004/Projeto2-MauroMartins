import React  from "react";
import  {useEffect,useState} from "react";
import Menu from '../../components/Menu';
import {InfoCard,ContainerPage,Container,ContainerMenu,ContainerFundo,ContainerSuperior,ContainerInferior,Card,TituloCard} from './style'
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
    const mesCorrenteStr = String(dt.getMonth() + 1). padStart(2, '0');
//    const mesCorrenteInt = 12
//    const mesCorrenteStr = '12'
    const anoCorrente = dt.getFullYear();
    const mesesAno =["Jan", "Feb", "Mar", "Apr", "Mai", "Jun","Jul","Ago","Set","Out","Nov","Dez"]
    let reiniciaMes=11
    let meses=[]
    for (let i=0;i<=11;i++){ //REORGANIZA VETOR DE MESES CONFORME O MES CORRENTE
        if  ((mesCorrenteInt-i)>=1) {
            meses.push(mesesAno[mesCorrenteInt-1-i])
        }else{
            meses.push(mesesAno[reiniciaMes])
            reiniciaMes--
        } 
        
    }
    meses.reverse()
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
    useEffect(()=>{
        let reiniciaMes=12
        let mes=""
        function somaTotalMes(){
            for (let i=1;i<=12;i++){ //REORGANIZA VETOR DE MESES CONFORME O MES CORRENTE
                if  ((mesCorrenteInt)>=i) {
                    ((mesCorrenteInt)<=9)?mes='0'+(mesCorrenteInt).toString():mes=(mesCorrenteInt).toString()
                    const consumoMes = potenciaConsumida.filter((unidade)=>unidade.periodo==anoCorrente+"-"+(mes))
                    const somaUnidades = consumoMes.reduce((a,b) => a+parseInt(b.total),0)
                    somaConsumoMes.push(somaUnidades)
               }else{
                    (reiniciaMes<=9)?mes='0'+reiniciaMes.toString():mes=reiniciaMes.toString()
                    const consumoMes = potenciaConsumida.filter((unidade)=>unidade.periodo==(anoCorrente-1)+"-"+(mes))
                    const somaUnidades = consumoMes.reduce((a,b) => a+parseInt(b.total),0)
                    somaConsumoMes.push(somaUnidades)
                    reiniciaMes--
                    console.log((mesCorrenteInt-i).toString())
                } 
                 
            }
            setValoresMeses(somaConsumoMes.reverse())
        }
        somaTotalMes();
    },[potenciaConsumida])

   //console.log(valoresMeses)
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
                        <Line data={data}/>
                        
                   </ContainerInferior>
               </ContainerFundo>
            </ContainerPage>

        </Container>
    );
}
export default Dashboard