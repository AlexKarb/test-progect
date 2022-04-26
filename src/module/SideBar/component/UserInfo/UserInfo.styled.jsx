import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: flex-start;
  background-color: var(--hover-color-bg);
`;

export const UserName = styled.p`
  font-weight: 700;
  height: auto;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  margin-bottom: 2px;
`;

export const Role = styled.p`
  font-size: 10px;
  color: #2ccac1;
`;
