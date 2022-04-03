import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';

export const Container = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 14px;
  border-top: 1px solid black;
  display: flex;
  justify-content: space-between;
  background-color: #e1e8e8;
`;

export const LogoutButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  display: flex;
  font-size: 18px;
`;

export const IconLogout = styled(FiLogOut)`
  width: 20px;
  height: 20px;
`;

export const Label = styled.span`
  margin-left: 12px;
`;
