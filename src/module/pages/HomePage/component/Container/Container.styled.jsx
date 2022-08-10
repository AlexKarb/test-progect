import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 32px;
  padding-bottom: 90px;

  @media screen and (min-width: 768px) {
    padding-top: 61px;
  }
`;

export const HeroWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 62px;
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
