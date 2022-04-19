import {
  Container,
  TypeList,
  TypeItem,
} from 'module/ApplicationList/component/TypeHelpList/TypeHelpList.styled';
import { namesOfServiceTypesObject } from 'service/dataFromServiceType';

export const TypeHelpList = ({ types }) => {
  const namesOfService = namesOfServiceTypesObject();
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
