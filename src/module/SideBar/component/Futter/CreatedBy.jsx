// MdVolunteerActivism; иконка волонтера

import { CreateByBlock, Text, CopySymbol, MyLink } from './Futter.styled';

export const CreatedBy = () => (
  <CreateByBlock>
    <CopySymbol>&#169; </CopySymbol>
    <Text href="https://github.com/AlexKarb" target="_blank" rel="noreferrer">
      Додаток створено
      <br />
      <MyLink>AlexKarb</MyLink>
    </Text>
  </CreateByBlock>
);
