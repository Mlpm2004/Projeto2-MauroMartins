import React  from "react";
import  {useEffect,useState} from "react";
import Menu from '../../components/Menu';
import {ContainerPage,Container,ContainerMenu,ContainerFundo} from '../../style'
import { Table, THeader, Rolagem,  Row, RowItem,AlignRigth,Status } from './style';
import Button from '../../forms/button'
import { Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom'
function UnidadeConsumidora(){
    const [unidades, setUnidades] = useState([])
    const [changes, setChanges] = useState(0)
    const history = useNavigate()
    useEffect(() => {//Coleta unidades no JSON e toda vez que um item é removido é chamado novamente
        async function handleGetUnits() {
        const response = await fetch(
            `http://localhost:3333/unidades`
        )
        const data = await response.json()
        setUnidades(data)
        }
    handleGetUnits();
    }, [changes])
    async function removeItem(id){ //Remove item do JSON conforme id especificado
        const response = await fetch(" http://localhost:3333/unidades/"+id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        toast.error('Removendo Unidade id : '+id)
        setChanges((changes) => changes + 1)   
    }
    function handleNewUnit(){ //Encaminha para esta rota quando for nova unidade
        history('/editaunidade')
    }
    return (
        <Container>
            <ContainerMenu>
                <Menu/>
            </ContainerMenu>
            <ContainerPage>
                <h2>Unidades</h2>
                <ContainerFundo>
                <h3>Lista de Unidades</h3>
                <Rolagem>
                    <Table>
                        <THeader>
                            <th>Atv</th>
                            <th>ID</th>
                            <th>Apelido</th>
                            <th>Local</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th></th>
                            <th></th>
                        </THeader>
                        { React.Children.toArray(
                        unidades.map(item =>
                        <Row>
                            <RowItem width="2%" ><Status cor={item.ativo}/></RowItem>
                            <RowItem width="8%" >{item.id}</RowItem>
                            <RowItem width="15%">{item.apelido}</RowItem>
                            <RowItem width="35%">{item.local}</RowItem>
                            <RowItem width="10%">{item.marca}</RowItem>
                            <RowItem width="10%">{item.modelo}</RowItem>
                            <RowItem width="10%">
                                <Link  to={`/editaunidade/${item.id}`} className='remove'>
                                    <Button
                                        colorText="#fafcf9"
                                        colorBackground="#25ce0f"
                                        width="100px"
                                        
                                    >Editar</Button>
                                </Link>
                            </RowItem>
                            <RowItem width="10%">
                                <Button
                                    colorText="#fafcf9"
                                    colorBackground="#db332d"
                                    width="100px"
                                    onClick={() => removeItem(item.id)}
                                >Remover</Button>
                            </RowItem>
                        </Row>
                        ))}
                    </Table>
                    </Rolagem>
                    <AlignRigth>
                        <Button
                            colorText="#fafcf9"
                            colorBackground="#8175eb"
                            width="200px"
                            key='6'
                            onClick={() => handleNewUnit()}

                        >Nova Unidade</Button>
                    </AlignRigth>

               </ContainerFundo>
            </ContainerPage>

        </Container>
    );
}
export default UnidadeConsumidora