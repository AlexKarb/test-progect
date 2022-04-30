import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--hover-color-bg);

  @media screen and (min-width: 768px) {
    height: 120px;
  }
`;

export const UserName = styled.p`
  font-weight: 700;
  height: auto;
  text-transform: uppercase;
  color: white;
  margin-bottom: 2px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const Role = styled.p`
  font-size: 10px;
  color: #2ccac1;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
