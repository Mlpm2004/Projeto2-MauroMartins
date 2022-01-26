import React  from "react";
import  {useEffect,useState} from "react";
import Menu from '../../components/Menu';
import Input from '../../forms/input';
import Select from "../../forms/select";
import {ContainerPage,Container,ContainerMenu,ContainerFundo,DivComponent,DivComponentButton} from './style'
import Button from "../../forms/button";
import {toast} from 'react-toastify';
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
    async function handleSaveUnit(event){
        event.preventDefault();
        if (optionUnidadeGeradora=="") {
            toast.warning('Selecione uma Unidade Geradora')
        }else if (periodo=="") {
            toast.warning('Mes/Ano é Obrigatório')
        }else if (total=="") {
            toast.warning('Total Kw é Obrigatório')
        }else{                    
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
                toast.success('Lançamento Realizado com Sucesso')
            } catch (error) {
                
            }
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
                        <form onSubmit={handleSaveUnit}>
                            <DivComponent>
                                <Select
                                    label="Unidade Geradora"
                                    description="Selecione a Unidade"
                                    options={unidadeOptions}
                                    onChange={(e)=>setOptionUnidadeGeradora(e.target.value)}
                                />
                            </DivComponent>
                            <DivComponent>
                                <Input
                                    label="Mes/Ano"
                                    type="month"
                                    key='2'
                                    value={periodo}
                                    onChange={(e)=>setPeriodo(e.target.value)}
                                />
                            </DivComponent>
                            <DivComponent>
                                <Input
                                    label="Total KW Gerado"
                                    type="number"
                                    min="0"
                                    key='3'
                                    value={total}
                                    onChange={(e)=>setTotal(e.target.value)}
                                />
                            </DivComponent>
                            <DivComponentButton>
                                <Button
                                    colorText="#fafcf9"
                                    colorBackground="#8175eb"
                                    width="200px"
                                    key='6'
                                    type="submit"
                                >Cadastrar</Button>
                            </DivComponentButton>
                            
                        </form>
               </ContainerFundo>
            </ContainerPage>
        </Container>
    );
}
export default EnergiaGerada