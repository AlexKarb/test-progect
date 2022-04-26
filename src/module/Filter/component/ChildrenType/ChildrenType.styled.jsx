import styled from 'styled-components';
import { FaBabyCarriage } from 'react-icons/fa';

export const BabyIcon = styled(FaBabyCarriage)`
  color: white;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin: 0 4px;
`;

export const Wrapp = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid;
  padding: 8px;
  border-radius: 5px;
`;
