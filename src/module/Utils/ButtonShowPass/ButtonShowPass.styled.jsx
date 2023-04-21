import styled from 'styled-components';
import { RiEyeCloseLine } from 'react-icons/ri';

export const ButtonShowPassword = styled(RiEyeCloseLine)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #5553539f;
  cursor: pointer;

  ${({ $activetype }) => {
    return $activetype
      ? 'transform: translateY(-50%) rotate(180deg); color: #0916ba'
      : 'none';
  }};

  width: 15px;
  height: 15px;

  &:active {
    width: 16px;
    height: 16px;
  }
`;
