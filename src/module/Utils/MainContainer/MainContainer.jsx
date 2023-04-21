import styled from 'styled-components';
import field from 'static/media/field.jpg';

export const MainContainer = styled.main`
  font-size: 20px;
  position: relative;
  padding-bottom: 60px;

  background-image: url(${field});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-grow: 1;
  width: 100%;
  /* height: 100%; */

  @media screen and (min-width: 768px) {
    /* width: 768px; */
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 2220px) {
    padding: 0 40px;
  }
`;

export const MainContainerWithoutBg = styled(MainContainer)`
  /* * {
    outline: 1px solid red;
  } */
  background-image: none;
`;
