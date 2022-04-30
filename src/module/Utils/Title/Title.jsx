import styled from 'styled-components';

export const TitleStyle = styled.div`
  padding: 16px;
  color: white;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;

export const Text = styled.h1`
  font-size: 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const Title = ({ text, children }) => (
  <TitleStyle>
    {children}
    {text && <Text>{text}</Text>}
  </TitleStyle>
);
