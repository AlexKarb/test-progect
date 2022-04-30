import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
    width: 150px;
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  justify-content: space-around;

  &:first-child {
    margin-bottom: 4px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;

    &:first-child {
      margin-bottom: 0px;
      flex-direction: column;
    }
  }
`;
