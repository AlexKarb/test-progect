import { Wrapp, Text, MyLink } from './Footer.styled';

export const Footer = () => (
  <Footer>
    <div>&#169; "We are from Ukraine", 2022</div>

    <Wrapp>
      <Text href="https://github.com/AlexKarb" target="_blank" rel="noreferrer">
        Додаток створено
      </Text>
      <MyLink>AlexKarb</MyLink>
    </Wrapp>
  </Footer>
);
