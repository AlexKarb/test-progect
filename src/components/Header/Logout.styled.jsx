import styled from 'styled-components';
import { ImExit } from 'react-icons/im';

export const LogOutBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: #854e4e;
  }

  @media screen and (min-width: 768px) {
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
  }
`;

export const ExitIcon = styled(ImExit)`
  width: 20px;
  height: 20px;
`;
