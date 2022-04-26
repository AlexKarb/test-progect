import {
  Container,
  TypeList,
  TypeItem,
} from 'module/ApplicationList/component/TypeHelpList/TypeHelpList.styled';
import { nameEngUkrObjectTypeOfHelp } from 'service/typeOfHelp/dataFromTypeOfHelp';

export const TypeHelpList = ({ types }) => {
  const namesOfService = nameEngUkrObjectTypeOfHelp();
  return (
    <Container>
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
    </Container>
  );
};
