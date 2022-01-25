import styled from 'styled-components'

export const Container = styled.div`
    margin:0 auto;
    
    display:flex;
    flex-direction:row;
    
`;
export const ContainerMenu = styled.div`
    display:flex;
    width:250px;
    margin-rigth:50px;
`;
export const ContainerPage = styled.div`
    display:flex;
    flex-direction:column;
  width:100%
`;

export const ContainerFundo = styled.div`
    background-color: aliceblue;
    
    padding: 20px;

`;
export const Table = styled.table`
  width: 100%;
  background: #FFF;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
`;

export const THeader = styled.thead`
  background: #fafcf9c2;
`;

export const AlignRigth = styled.div`
  display:flex;
  flex-direction-row;
  justify-content: flex-end;
`;
export const TBody = styled.tbody`
`;

export const Row = styled.tr`
`;

export const RowItem = styled.td`
  padding: 12px;
  border-bottom: 1px solid #585656;
  width: ${(props) => props.width};
`;
export const ContainerSuperior=styled.div`
  display:flex;
  flex-direction-row;
  
`;
export const ContainerInferior=styled.div`
  display:flex;
  flex-direction-row;
  justify-content: flex-end;
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

