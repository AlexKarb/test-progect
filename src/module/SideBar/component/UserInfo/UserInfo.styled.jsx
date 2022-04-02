import styled from 'styled-components';
import { FaUserTie, FaUserNurse, FaUserSecret } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  padding: 15px 30px;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const InfoContainer = styled.div``;

export const UserName = styled.p`
  font-size: 24px;
`;
export const Role = styled.p`
  font-size: 12px;
`;

export const IconAdmin = styled(FaUserTie)``;
export const IconVolonter = styled(FaUserNurse)``;
export const IconGuest = styled(FaUserSecret)`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
`;
