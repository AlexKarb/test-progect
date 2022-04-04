import styled from 'styled-components';
import { FaUserTie, FaUserNurse, FaUserSecret } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid var(--main-text-color);

  /* * {
    outline: 1px solid red;
  } */
`;

export const InfoContainer = styled.div`
  text-align: center;
`;

export const UserName = styled.p`
  height: auto;
  /* font-size: 24px; */
  color: var(--main-text-color);
  margin-bottom: 2px;
`;
export const Role = styled.p`
  font-size: 10px;
  color: #a4a4a4c8;
`;

export const IconAdmin = styled(FaUserTie)`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  margin-bottom: 12px;
  border: 1px solid var(--main-text-color);
  border-radius: 50%;
  padding: 5px;
  color: #939496d9;
`;

export const IconVolonter = styled(FaUserNurse)`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  margin-bottom: 12px;
  border: 1px solid var(--main-text-color);
  border-radius: 50%;
  padding: 5px;
  color: #939496d9;
`;

export const IconGuest = styled(FaUserSecret)`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  margin-bottom: 12px;
  border: 1px solid var(--main-text-color);
  border-radius: 50%;
  padding: 5px;
  color: #939496d9;
`;
