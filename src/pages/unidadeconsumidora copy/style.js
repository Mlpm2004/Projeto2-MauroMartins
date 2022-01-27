import styled from 'styled-components'

export const Container = styled.div`
    margin:0 auto;
    width:80%;
    display:flex;
    flex-direction:row;
    
`;
export const ContainerMenu = styled.div`
    display:flex;
    width:250px;
    margin-right:50px;
`;
export const ContainerPage = styled.div`
    display:flex;
    flex-direction:column;

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
  th {
  
  text-align: left;
  padding: 12px;
  }
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

export const Retformat = styled.div`
  text-decoration: none;
`;

