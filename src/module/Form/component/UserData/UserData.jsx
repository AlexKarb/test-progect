import { Title, CheckBoxDelivery, ContainerBlock } from '../Utils';
import { TextInput } from '../TextInput/TextInput';
import { Wrapper, ContainerInput } from './UserData.styled';

export const UserData = ({ options: { errors, touched, isSubmitting } }) => {
  return (
    <ContainerBlock line={true}>
      <Title text="*Дані про замовника:" />
      <Wrapper>
        <ContainerInput>
          <TextInput
            label={'Імя'}
            name={'contacts.name'}
            placeholder={'введіть організацію / імя '}
            options={{
              touched: touched?.contacts?.name,
              errors: errors?.contacts?.name,
              isSubmitting,
            }}
          />
        </ContainerInput>
        <ContainerInput>
          <TextInput
            label={'Контакт'}
            name={'contacts.tel'}
            placeholder={'введіть номер телефону / аккаунт'}
            options={{
              touched: touched?.contacts?.tel,
              errors: errors?.contacts?.tel,
              isSubmitting,
            }}
          />
        </ContainerInput>
        <ContainerInput>
          <TextInput
            label={'Адреса'}
            name={'contacts.adress'}
            placeholder={'введіть адресу'}
            options={{
              touched: touched?.contacts?.adress,
              errors: errors?.contacts?.adress,
              isSubmitting,
            }}
          />
        </ContainerInput>
      </Wrapper>
      <CheckBoxDelivery />
    </ContainerBlock>
  );
};
