import React  from "react";
import  {useEffect,useState} from "react";
import Menu from '../../components/Menu';
import Input from '../../forms/input';
import Check from "../../forms/checkbox";
import {useParams} from 'react-router-dom';
import {ContainerPage,Container,ContainerMenu,ContainerFundo,DivComponent,DivComponentButton} from './style'
import Button from "../../forms/button";
import {toast} from 'react-toastify';
function Cadastro(){
    const params = useParams();
    const [unit,setUnit]=useState([]);
    const [apelido,setApelido]= useState('');
    const [local,setLocal]= useState('');
    const [marca,setMarca]= useState('');
    const [ativo,setAtivo]= useState('');
    const [modelo,setModelo]= useState('');
    const urlBusca=`http://localhost:3333/unidades?id=${params.id}`;
    const urlAtualiza=`http://localhost:3333/unidades/${params.id}`;
    const urlInsere=`http://localhost:3333/unidades`;
    useEffect(()=>{
        async function handleGetUnit(){
            const response = await fetch(urlBusca);
            const data = await response.json();
            setUnit(data);
        }
        handleGetUnit();
    },[])
    useEffect(()=>{
        if (params){
            unit.map(item => {
                (item.ativo=="true")?setAtivo(true):setAtivo(false) 
                setApelido(item.apelido)
                setLocal(item.local)
                setMarca(item.marca)
                setModelo(item.modelo)
            })
        }
    },[unit])
    async function handleSaveUnit(event){
        event.preventDefault();
        if (params.id!=undefined){
            try {
                await fetch(urlAtualiza, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        apelido: apelido,
                        local: local,
                        marca: marca,
                        modelo: modelo,
                        ativo:ativo.toString()
                    })
                })
                toast.success('Unidade Alterada')
            } catch (error) {
            }
        }else{
            if (apelido=="") {
                toast.warning('Campo Apelido não pode ser vazio')
            }else if (local=="") {
                toast.warning('Campo Local não pode ser vazio')
            }else if (marca=="") {
                toast.warning('Campo Marca não pode ser vazio')
            }else if (modelo=="") {
                toast.warning('Campo Modelo não pode ser vazio')
            }else{                    
                try {
                    await fetch(urlInsere,
                        {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            apelido: apelido,
                            local: local,
                            marca: marca,
                            modelo: modelo,
                            ativo: ativo.toString()
                        })},
                    )
                    toast.success('Unidade Cadastrada')
                } catch (error) {
                    
                }
                
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
                    <h3>Cadastro de Unidade Geradora</h3>
                    
                        <form  onSubmit={handleSaveUnit} key='7'>
                            <DivComponent>
                                <Input
                                    label="Apelido"
                                    key='1'
                                    value={apelido}
                                    onChange={(e)=>setApelido(e.target.value)}
                                />
                            </DivComponent>
                            <DivComponent>
                                <Input
                                    label="Local"
                                    key='2'
                                    value={local}
                                    onChange={(e)=>setLocal(e.target.value)}
                                />
                            </DivComponent>
                            <DivComponent>
                                <Input
                                    label="Marca"
                                    key='3'
                                    value={marca}
                                    onChange={(e)=>setMarca(e.target.value)}
                                />
                            </DivComponent>
                            <DivComponent>
                                <Input
                                    label="Modelo"
                                    key='4'
                                    value={modelo}
                                    onChange={(e)=>setModelo(e.target.value)}
                                />
                            </DivComponent>
                            <DivComponent>
                                <Check
                                    label="Ativo"
                                    type="checkbox"
                                    checked={ativo}
                                    key='5'
                                    onChange={(e)=>setAtivo(e.target.checked)}
                                />
                            </DivComponent>
                            <DivComponentButton>
                                <Button
                                    colorText="#fafcf9"
                                    colorBackground="#8175eb"
                                    width="150px"
                                    key='6'
                                    type="submit"

                                >Salvar</Button>
                            </DivComponentButton>
                        </form>
                    
               </ContainerFundo>
            </ContainerPage>
        </Container>
    );
}
export default Cadastro