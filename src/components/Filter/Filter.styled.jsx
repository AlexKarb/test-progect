import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;

  @media screen and (min-width: 540px) {
    flex-direction: row;
    justify-content: flex-start;
    height: 90px;
    width: 504px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 44px;
  }
`;

export const Label = styled.label`
  margin-right: 25px;
`;

export const Line = styled.div`
  border: 1px solid blue;
  /* width: 100%; */
`;
