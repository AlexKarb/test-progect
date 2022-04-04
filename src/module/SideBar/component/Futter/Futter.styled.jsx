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
  background-color: var(--accent-color-bg);
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

export const CreateByBlock = styled.div`
  font-size: 10px;
  display: flex;
  line-height: 1.13;
`;

export const CopySymbol = styled.span`
  margin-right: 4px;
  font-size: 14px;
`;

export const Text = styled.a`
  text-decoration: none;
  color: var(--accent-text-color);
  cursor: pointer;
`;

export const MyLink = styled.span`
  color: #002fff;
  text-decoration: underline;
`;
