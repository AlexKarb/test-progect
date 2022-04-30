import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 300px;
  padding: 30px 15px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 500px;
    padding: 60px 35px;
  }
`;

export const Text = styled.div`
  margin-bottom: 30px;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 40px;
  }
`;
