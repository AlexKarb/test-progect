import {
  TypeList,
  TypeItem,
} from 'module/Card/component/TypeHelpList/TypeHelpList.styled';
import { nameEngUkrObjectTypeOfHelp } from 'service/typeOfHelp/dataFromTypeOfHelp';

export const TypeHelpList = ({ types }) => {
  const namesOfService = nameEngUkrObjectTypeOfHelp();
  return (
    <TypeList>
      {types.map(el => {
        const label = namesOfService[el];
        return (
          <TypeItem key={el} type={el} color={label}>
            {namesOfService[el]}
          </TypeItem>
        );
      })}
    </TypeList>
  );
};
