import styled from 'styled-components';

export const TitleStyle = styled.h1`
  font-size: 20px;
  text-align: center;
  padding: 16px;
  color: white;
`;

export const Title = ({ text, children }) => (
  <TitleStyle>
    {children}
    {text && text}
  </TitleStyle>
);
