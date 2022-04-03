import styled from 'styled-components';
import { FaUserTie, FaUserNurse, FaUserSecret } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const InfoContainer = styled.div``;

export const UserName = styled.p`
  width: 120px;
  height: auto;
  font-size: 24px;
`;
export const Role = styled.p`
  font-size: 12px;
`;

export const IconAdmin = styled(FaUserTie)``;
export const IconVolonter = styled(FaUserNurse)``;
export const IconGuest = styled(FaUserSecret)`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
`;
