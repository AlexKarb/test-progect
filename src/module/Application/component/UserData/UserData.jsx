import { dataInput } from 'module/Application/service/dataInputUserData';
import { Title } from '../Title/Title';
import { ContactsInfo } from './ContactInfo';
import { Wrapper, Container } from './UserData.styled';
import { CheckBoxDelivery } from '../Details/CheckBoxDelivery';

export const UserData = () => (
  <Container>
    <Title text="*Дані про замовника:" />
    <Wrapper>
      {dataInput.map(data => (
        <ContactsInfo key={data.label} info={data} />
      ))}
    </Wrapper>
    <CheckBoxDelivery />
    <hr />
  </Container>
);
