import styled from 'styled-components';

export const Wrapp = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid;
  padding: 8px;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    height: 200px;
    border: none;
    margin-top: 20px;
  }
`;
