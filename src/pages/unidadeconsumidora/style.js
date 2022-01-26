import styled from 'styled-components'

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

export const Rolagem = styled.div`
    height:500px; 
    overflow-x: hidden; 
    overflow-y: auto;
`;

export const Row = styled.tr`
`;

export const RowItem = styled.td`
  border-bottom: 1px solid #585656;
  width: ${(props) => props.width};
  background-color:${(props) => props.cor};
`;

export const Status = styled.div`
  background-color:${(props) => (props.cor)=='true'?"green":"red"};
  width:5px;
  height:5px; 
  border:1px solid;
  border-radius:50%
`;
