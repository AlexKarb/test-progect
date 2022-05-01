import styled from 'styled-components';

export const HeaderContainer = styled.header`
  border-bottom: 1px solid var(--main-color-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 12px;
  background-color: var(--main-color-bg);
  color: white;

  @media screen and (min-width: 768px) {
    padding: 10px 22px;
  }

  @media screen and (min-width: 2220px) {
    padding: 10px 140px;
  }
`;

export const Title = styled.p`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    font-size: 34px;
    color: yellow;
    margin-right: 140px;
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
  }
`;
