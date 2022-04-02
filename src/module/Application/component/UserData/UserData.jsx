import { dataInput } from 'module/Application/service/dataInputUserData';
import { Title } from '../Title/Title';
import { ContactsInfo } from './ContactInfo';

export const UserData = () => (
  <div>
    <Title text="*Дані про замовника:" />
    {dataInput.map(data => (
      <ContactsInfo key={data.label} info={data} />
    ))}
  </div>
);
