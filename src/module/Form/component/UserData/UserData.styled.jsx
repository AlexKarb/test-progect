import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;

export const ContainerInput = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 12px;
`;
