import styled from 'styled-components';

import { FaBabyCarriage } from 'react-icons/fa';

export const BabyIcon = styled(FaBabyCarriage)`
  color: white;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin: 0 4px;

  @media screen and (min-width: 768px) {
    margin-left: auto;
    width: 40px;
    height: 40px;
    margin-right: 1px;
  }
`;
