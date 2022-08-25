import styled from 'styled-components';

export const IconBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 320px;
  }

  @media screen and (min-width: 1024px) {
    position: initial;
    width: auto;
    padding: 5px;
  }
`;
