import styled from 'styled-components';

export const IconBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;

  @media screen and (min-width: 768px) {
    width: 300px;
    flex-direction: row;
    flex-wrap: wrap;
    position: absolute;
    top: 10px;
    right: 5px;
  }
`;
