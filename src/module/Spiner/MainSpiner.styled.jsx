import styled from 'styled-components';
import { ThreeCircles } from 'react-loader-spinner';

export const StyledSpiner = styled(ThreeCircles).attrs(props => ({
  outerCircleColor: 'var(--main-color-bg',
  middleCircleColor: 'var(--main-color-bg',
  innerCircleColor: '#2ccac1',
}))``;

export const Container = styled.div`
  margin: 20px auto;
  height: 70px;
  width: 70px;
`;
