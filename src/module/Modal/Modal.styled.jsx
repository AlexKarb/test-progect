import styled from 'styled-components';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export const MainContainer = styled.div`
  position: relative;
`;

export const CloseButton = styled(IoIosCloseCircleOutline)`
  display: none;
  color: var(--unactive-color-bg);
  position: absolute;
  top: 0;
  right: -40px;
  width: 25px;
  height: 25px;
  cursor: pointer;

  &:hover {
    color: black;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
