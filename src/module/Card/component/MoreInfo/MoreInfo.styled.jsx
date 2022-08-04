import styled from 'styled-components';

export const Block = styled.div`
  padding: 15px 0;

  @media screen and (min-width: 768px) {
    padding: 0;
    padding-bottom: 15px;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
  }
`;

export const FirstLine = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
