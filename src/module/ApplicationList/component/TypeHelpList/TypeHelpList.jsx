import {
  Container,
  TypeList,
  TypeItem,
} from 'module/ApplicationList/component/TypeHelpList/TypeHelpList.styled';
import { namesOfServiceTypesObject } from 'service/dataFromServiceType';

export const TypeHelpList = ({ types }) => {
  return (
    <Container>
      <TypeList>
        {types.map(el => {
          const label = namesOfServiceTypesObject[el];
          return (
            <TypeItem key={el} type={el} color={label}>
              {namesOfServiceTypesObject[el]}
            </TypeItem>
          );
        })}
      </TypeList>
    </Container>
  );
};
