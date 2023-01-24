import styled from 'styled-components';
import { ThreeCircles } from 'react-loader-spinner';

export const StyledSpiner = styled(ThreeCircles).attrs(props => ({
  outerCircleColor: 'var(--main-color-bg',
  middleCircleColor: 'var(--main-color-bg',
  innerCircleColor: '#2ccac1',
}))`
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  margin: 20px auto;
  height: 70px;
  width: 70px;
  ${({ $styled }) => $styled}

  @media screen and (min-width: 768px) {
    margin: 60px auto;
    height: 120px;
    width: 120px;
    ${({ $styled }) => $styled}
  }
`;
