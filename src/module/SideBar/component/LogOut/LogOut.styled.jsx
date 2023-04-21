import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';

export const LogoutButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  color: var(--accent-text-color);
  cursor: pointer;
  width: 100%;
  padding: 12px 0px;

  &:active {
    color: #475094b8;
  }
`;

export const IconLogout = styled(FiLogOut)`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    height: 35px;
    width: 35px;
  }
  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`;

export const Label = styled.span`
  margin-left: 7px;
  font-size: 17px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-left: 17px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
    margin-left: 10px;
  }
`;
