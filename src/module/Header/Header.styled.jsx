import styled from 'styled-components';

export const HeaderContainer = styled.header`
  border-bottom: 1px solid var(--main-color-bg);
  display: flex;
  justify-content: space-between;
  padding: 3px 12px;
  background-color: var(--main-color-bg);
  color: white;

  @media screen and (min-width: 768px) {
    padding: 10px 22px;
  }
`;
