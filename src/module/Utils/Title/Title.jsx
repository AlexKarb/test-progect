import styled from 'styled-components';

export const TitleStyle = styled.div`
  padding: 16px;
  color: white;
  position: relative;
`;

export const Text = styled.h1`
  font-size: 20px;
  text-align: center;
`;

export const Title = ({ text, children }) => (
  <TitleStyle>
    {children}
    {text && <Text>{text}</Text>}
  </TitleStyle>
);
