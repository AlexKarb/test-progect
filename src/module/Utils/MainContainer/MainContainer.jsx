import styled from 'styled-components';

export const MainContainer = styled.main`
  font-size: 20px;
  position: relative;
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 20px;

    flex-grow: 1;
  }

  @media screen and (min-width: 2220px) {
    padding: 0 40px;
  }
`;
