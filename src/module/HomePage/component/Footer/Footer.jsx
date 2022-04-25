import { Text, MyLink, FooterContainer } from './Footer.styled';

export const Footer = () => (
  <FooterContainer>
    <div>&#169; "We are from Ukraine", 2022</div>

    <Text>
      Додаток створено
      <MyLink href="https://github.com/AlexKarb">AlexKarb</MyLink>
    </Text>
  </FooterContainer>
);
