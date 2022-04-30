import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

export const BurgerIcon = styled(FiMenu)`
  width: 100%;
  height: 100%;
  color: white;
`;

export const StyledButtonIcon = styled.button`
  width: 38px;
  border: none;
  background-color: transparent;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: 60px;
  }
`;
