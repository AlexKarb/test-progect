import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 300px;

  @media screen and (min-width: 768px) {
    width: 700px;
    margin: 30px auto 0;
    justify-content: space-around;
  }

  @media screen and (min-width: 1024px) {
    width: auto;
    margin-top: 5px;
    justify-content: space-evenly;
  }

  @media screen and (min-width: 1250px) {
    max-width: 1200px;
  }
`;

export const Wrapp = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  margin: 0 auto;
  align-items: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    padding: 0 30px 30px;
  }
  @media screen and (min-width: 1250px) {
    flex-direction: row;
    align-items: flex-start;
    max-width: 1200px;
  }
`;
