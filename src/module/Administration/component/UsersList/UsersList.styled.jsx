import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -15px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 1px;
    background-color: #fff;
    border-radius: 25px;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
    &::before {
      display: none;
    }
  }
`;

export const List = styled.ol`
  margin: 0 auto;
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 203px;

  @media screen and (min-width: 768px) {
    width: 722px;
    padding: 10px 30px;
  }

  @media screen and (min-width: 1024px) {
    width: auto;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  text-align: center;
  color: #fff;
  text-shadow: 0px 0px 6px #0000a3;
  margin-bottom: ${({ margin }) => (margin ? '0px' : '30px')};

  @media screen and (min-width: 768px) {
    font-size: 23px;
    margin-bottom: ${({ margin }) => (margin ? '0px' : '50px')};
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const Content = styled.div`
  /* min-width: 170px;
  min-height: 175px; */
`;
