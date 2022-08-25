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
    width: 45px;
    height: 45px;
    top: 2px;
    right: 20px;
  }

  @media screen and (min-width: 1024px) {
    width: 34px;
    height: 34px;
    top: 5px;
    right: 19px;
  }
`;
