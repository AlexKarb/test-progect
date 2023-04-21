import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    height: 40px;
  }

  @media screen and (min-width: 1024px) {
    height: 24px;
  }
`;

export const ErrorText = styled.span`
  font-size: 12px;
  color: red;
  position: absolute;
  left: 150px;
  top: 2px;
`;
