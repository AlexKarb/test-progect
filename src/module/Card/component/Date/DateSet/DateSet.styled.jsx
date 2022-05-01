import styled from 'styled-components';

export const Date = styled.div`
  font-size: 12px;
  color: #808080;
  display: flex;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }

  @media screen and (min-width: 2220px) {
    font-size: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
