import styled from 'styled-components';

const StyledTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;

  color: ${({ $inValid }) => ($inValid ? 'red' : 'ingerit')};

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const Title = ({ text, $inValid }) => (
  <StyledTitle $inValid={$inValid}>{text}</StyledTitle>
);
