import styled from 'styled-components';

const StyledTitle = styled.h3`
  margin-right: 25px;
  font-size: 16px;
  font-weight: 700;
`;

export const Title = ({ text }) => <StyledTitle>{text}</StyledTitle>;
