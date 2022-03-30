import styled from 'styled-components';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export const CloseButton = styled(IoIosCloseCircleOutline)`
  color: black;
  position: absolute;
  top: 0;
  right: -40px;
  width: 25px;
  height: 25px;
  cursor: pointer;

  &:hover {
    color: #525252;
  }
`;

export const Container = styled.div`
  position: relative;
`;
