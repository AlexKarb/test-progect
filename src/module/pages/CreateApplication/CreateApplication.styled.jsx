import styled from 'styled-components';

export const Title = styled.h1`
  padding: 16px;
  color: white;
  font-size: 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 20px;
    font-size: 30px;
  }

  @media screen and (min-width: 1024px) {
    position: absolute;
    top: -60px;
    left: 0px;
    font-size: 28px;
    background-color: #3685bd;
    width: 316px;
    height: 59px;
  }

  @media screen and (min-width: 1440px) {
    width: 416px;
  }
`;

export const Container = styled.div`
  padding: 20px;
`;
