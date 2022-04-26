import { Title, CheckBoxDelivery, ContainerBlock } from '../Utils';
import { TextInput } from '../TextInput/TextInput';
import { Wrapper, ContainerInput } from './UserData.styled';

export const UserData = () => (
  <ContainerBlock line={true}>
    <Title text="*Дані про замовника:" />
    <Wrapper>
      <ContainerInput>
        <TextInput
          label={'Імя'}
          name={'contacts.name'}
          placeholder={'введіть організацію / імя '}
        />
      </ContainerInput>
      <ContainerInput>
        <TextInput
          label={'Контакт'}
          name={'contacts.tel'}
          placeholder={'введіть номер телефону / аккаунт'}
        />
      </ContainerInput>
      <ContainerInput>
        <TextInput
          label={'Адреса'}
          name={'contacts.adress'}
          placeholder={'введіть адресу'}
        />
      </ContainerInput>
    </Wrapper>
    <CheckBoxDelivery />
  </ContainerBlock>
);
