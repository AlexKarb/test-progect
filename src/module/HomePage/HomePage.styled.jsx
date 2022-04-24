import styled from 'styled-components';
import hero from '../static/Photo/hero2.jpg';

export const Container = styled.main`
  padding-top: 32px;
  padding-bottom: 90px;
  font-size: 20px;
  position: relative;
`;

export const Hero = styled.div`
  height: 265px;
  margin-bottom: 22px;
  border-radius: 28px 28px 0 0;
  background-image: linear-gradient(rgba(181, 185, 230, 0) 30%, rgb(88 123 227)),
    url(${hero});
  background-repeat: no-repeat;
  background-position: 50% 24%;
  background-size: cover;
`;
