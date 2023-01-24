import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 14px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(16 136 198);
  color: var(--accent-text-color);

  @media screen and (min-width: 768px) {
    height: 70px;
  }

  @media screen and (min-width: 1024px) {
    height: 40px;
  }
`;
