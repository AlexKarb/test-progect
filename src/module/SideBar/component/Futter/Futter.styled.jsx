import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';

export const Container = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(44 202 193 / 50%);
  color: var(--accent-text-color);
`;

export const LogoutButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  color: var(--accent-text-color);
  cursor: pointer;
`;

export const IconLogout = styled(FiLogOut)`
  width: 20px;
  height: 20px;
`;

export const Label = styled.span`
  margin-left: 7px;
  font-size: 17px;
`;
