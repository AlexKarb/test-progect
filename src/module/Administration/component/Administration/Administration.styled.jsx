import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 10px;

  @media screen and (min-width: 768px) {
    padding: 30px;
  }

  @media screen and (min-width: 1024px) {
    padding: 30px 0px;
  }
`;

export const Line = styled.div``;

export const Wrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    position: relative;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -14px;
      left: 0;
      right: 0;
      z-index: -1;
      height: 1px;
      background-color: #fff;
      border-radius: 25px;
    }
  }
`;
