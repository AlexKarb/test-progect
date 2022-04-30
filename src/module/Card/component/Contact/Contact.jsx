import {
  Container,
  Wrap,
  Name,
  Tel,
  AdressIcon,
  Adress,
} from './Contact.styled';

export const Contact = ({ contact: { name, tel, adress } }) => {
  return (
    <Container>
      <Wrap>
        <Name>{name}</Name>
        <Tel>{tel}</Tel>
      </Wrap>
      <Adress>
        <AdressIcon />
        {adress}
      </Adress>
    </Container>
  );
};
