import { allDataServicesType } from 'service/dataFromServiceType';
import { Title } from '../Title/Title';
import { CheckBoxes } from './CheckBoxes';

export const TypeHelp = ({ selectedTypes }) => {
  return (
    <>
      <Title text="Вид допомоги:" />
      <CheckBoxes
        allTypes={allDataServicesType}
        selectedTypes={selectedTypes}
      />
    </>
  );
};
