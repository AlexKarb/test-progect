import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  position: relative;
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid gray;
  /* background: var(--main-color-bg); */

  font-size: 18px;
  border: none;

  @media screen and (min-width: 768px) {
    width: 360px;
    font-size: 28px;
  }

  @media screen and (min-width: 1024px) {
    width: 230px;
    font-size: 16px;
    justify-content: space-between;
  }
`;
