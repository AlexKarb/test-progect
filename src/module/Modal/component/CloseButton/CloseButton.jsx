import styled from 'styled-components';

import { IoIosCloseCircleOutline } from 'react-icons/io';

export const CloseButton = styled(IoIosCloseCircleOutline).attrs(prop => ({
  type: 'button',
}))`
  color: #abbaf7;
  position: absolute;
  top: 9px;
  right: 9px;
  width: 30px;
  height: 31px;
  cursor: pointer;
  border: none;
  background-color: transparent;

  &:hover {
    color: #5e5e5e;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
