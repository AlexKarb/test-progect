import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 4px;

  @media screen and (min-width: 1024px) {
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    margin-left: 0px;
  }

  @media screen and (min-width: 1250px) {
    margin-left: 30px;
  }

  @media screen and (min-width: 1700px) {
    margin-left: 0px;
    align-items: center;
  }
`;
