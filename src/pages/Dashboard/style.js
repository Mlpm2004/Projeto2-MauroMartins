import styled from 'styled-components'

export const ContainerSuperior=styled.div`
    display:flex;
    flex-direction-row;
`;
export const ContainerInferior=styled.div`
    display:flex;
    justify-content:center; 
`;

export const Card=styled.div`
    width:20%;
    heigth:200px;
    border:1px solid #afafaf;
    border-radius: 0.5rem;
    padding:10px;
    margin : 10px;
    background-color:white;
`;

export const TituloCard=styled.div`
    display:flex;
    justify-content:center;
    font-size:12px;
    padding:10px;
`;

export const InfoCard=styled.div`
    display:flex;
    justify-content:center;
    font-size:40px;
    font-weight: bold;
    padding:10px;
`;

export const CentralizaGrafico=styled.div`
    width:50%;
    heigth:50%
`;