import React  from "react";
import  {useEffect,useState} from "react";
import Menu from '../../components/Menu';
import Input from '../../forms/input';
import Select from "../../forms/select";
import {ContainerPage,Container,ContainerMenu,ContainerFundo} from './style'
import Button from "../../forms/button";
function EnergiaGerada(){
    const [unidadeOptions,setUnidadeOptions]=useState([]);
    const [periodo,setPeriodo]= useState('');
    const [total,setTotal]= useState('');
    const [optionUnidadeGeradora,setOptionUnidadeGeradora] =useState('')
    const urlBuscaoptions=`http://localhost:3333/unidades`;
    const urlGravaGeracao=`http://localhost:3333/geracoes`;
    console.log(optionUnidadeGeradora)
    useEffect(()=>{
        async function handleGetOptions(){
            const response = await fetch(urlBuscaoptions);
            const data = await response.json();
            const options = data.map((item)=>{
                return{
                    valor:item.id,
                    texto:item.apelido
               }
            })
            setUnidadeOptions(options);
        }
        handleGetOptions();
    },[])
    async function handleSaveUnit(){
        try {
            await fetch(urlGravaGeracao,
                {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    idgerador: optionUnidadeGeradora,
                    periodo: periodo,
                    total: total
                })},
            )
        } catch (error) {
            
        }

    }
    return (
        <Container>
            <ContainerMenu>
                <Menu/>
            </ContainerMenu>
            <ContainerPage>
                <h2>Unidades</h2>
                <ContainerFundo>
                    <h3>Lançamento de Geração Mensal</h3>
                             <Select
                                label="Unidade Geradora"
                                description="Selecione a Unidade"
                                options={unidadeOptions}
                                onChange={(e)=>setOptionUnidadeGeradora(e.target.value)}
                            />
                            <Input
                                label="Mes/Ano"
                                type="month"
                                key='2'
                                value={periodo}
                                onChange={(e)=>setPeriodo(e.target.value)}
                            />
                            <Input
                                label="Total KW Gerado"
                                type="number"
                                min="0"
                                key='3'
                                value={total}
                                onChange={(e)=>setTotal(e.target.value)}
                            />
                          <Button
                                colorText="#fafcf9"
                                colorBackground="#8175eb"
                                width="200px"
                                key='6'
                                onClick={() => handleSaveUnit()}

                            >Cadastrar</Button>
                   
               </ContainerFundo>
            </ContainerPage>
        </Container>
    );
}
export default EnergiaGerada