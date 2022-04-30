import styled from 'styled-components';
import hero from 'static/Photo/hero2.jpg';

export const Hero = styled.div`
  max-width: 560px;
  height: 265px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 22px;
  border-radius: 28px 28px 0 0;
  background-image: linear-gradient(rgba(181, 185, 230, 0) 30%, rgb(88 123 227)),
    url(${hero});
  background-repeat: no-repeat;
  background-position: 50% 24%;
  background-size: cover;

  @media screen and (min-width: 410px) {
    height: 266px;
    margin-bottom: 92px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 90px;
    border-radius: 28px;
    height: 357px;
    max-width: 700px;
  }
`;
