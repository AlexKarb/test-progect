import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: flex-start;
  justify-content: center;
  background-color: #2333b2;

  @media screen and (min-width: 768px) {
    height: 120px;
  }

  @media screen and (min-width: 1024px) {
    height: 60px;
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

  @media screen and (min-width: 1024px) {
    font-size: 21px;
  }
`;

export const Role = styled.p`
  font-size: 10px;
  color: #2ccac1;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 12px;
  }
`;
