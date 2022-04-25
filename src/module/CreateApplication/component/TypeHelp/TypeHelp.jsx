import { allDataServicesType } from 'service/dataFromServiceType';
import { Title } from '../Title/Title';
import { CheckBoxItems } from './CheckBoxItems';

export const TypeHelp = ({ selectedTypes }) => {
  return (
    <div>
      <Title text="Вид допомоги:" />
      <CheckBoxItems
        allTypes={allDataServicesType()}
        selectedTypes={selectedTypes}
      />
      <hr />
    </div>
  );
};
