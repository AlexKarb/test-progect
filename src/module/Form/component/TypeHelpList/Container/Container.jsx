import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px 0;

  @media screen and (min-width: 768px) {
    margin: 25px 0;
  }

  @media screen and (min-width: 1024px) {
    margin: 10px 0;
  }
`;
