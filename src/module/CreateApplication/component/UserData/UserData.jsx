import { dataInput } from 'module/CreateApplication/service/dataInputUserData';
import { Title } from '../Title/Title';
import { ContactsInfo } from './ContactInfo';
import { Wrapper, Container } from './UserData.styled';
import { CheckBoxDelivery } from '../CheckBoxDelivery/CheckBoxDelivery';

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
