import styled from 'styled-components';

export const HeaderContainer = styled.header`
  border-bottom: 1px solid rgb(103 139 248);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 12px;

  background-color: #36096d;
  background-image: linear-gradient(315deg, #36096d 0%, #3697c9 74%);
  color: white;

  @media screen and (min-width: 768px) {
    padding: 5px 22px;
  }

  @media screen and (min-width: 1024px) {
    padding: 5px 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 5px 40px 5px 140px;
  }
`;

export const Title = styled.p`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    font-size: 24px;
    font-weight: 700;
    text-shadow: 2px 2px 4px #ffda44;
    color: #2a006d;
    margin-right: 140px;
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;
