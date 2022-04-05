import {
  Container,
  Label,
  TypeList,
  TypeItem,
} from 'module/ApplicationList/component/TypeHelpList/TypeHelpList.styled';

export const TypeHelpList = ({ types }) => {
  return (
    <Container>
      <TypeList>
        {types.map(el => (
          <TypeItem key={el} type={el}>
            {el}
          </TypeItem>
        ))}
      </TypeList>
    </Container>
  );
};
