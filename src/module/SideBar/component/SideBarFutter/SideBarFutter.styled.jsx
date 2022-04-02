import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';

export const Container = styled.div`
  padding: 6px 14px;
  border-top: 1px solid black;
  display: flex;
  justify-content: space-between;
`;

export const LogoutButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  display: flex;
  font-size: 16px;
`;

export const IconLogout = styled(FiLogOut)`
  width: 20px;
  height: 20px;
`;

export const Label = styled.span`
  margin-left: 12px;
`;
