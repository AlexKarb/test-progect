import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 300px;
  padding: 30px 15px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 500px;
    padding: 40px 35px;
  }

  @media screen and (min-width: 1024px) {
    width: 443px;
    padding: 30px 25px;
  }
`;

export const Text = styled.div`
  margin-bottom: 30px;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    padding: 0 60px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 24px;
    padding: 0 70px;
    margin-bottom: 40px;
  }
`;
