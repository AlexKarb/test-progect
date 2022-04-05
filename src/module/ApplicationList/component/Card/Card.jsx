import { Main, Item, Block } from './Card.styled';
import { useState } from 'react';
import { Contact } from '../Contact/Contact';
import { MoreInfo } from '../MoreInfo/MoreInfo';
import { OptionButton } from '../OptionsButton/OptionsButton';
import { TypeHelpList } from '../TypeHelpList/TypeHelpList';
import { DataSet } from '../DataSet/DataSet';
import { OpenMoreInfoButton } from '../MoreInfo/OpenMoreInfoButton';

export const Card = ({
  data: {
    // id = '',
    contacts = {},
    typeHelp = [],
    additional = {},
    delivery = false,
    info = '',
    dataAdd = '',
    // dataClose = '',
    // deletedInfo = '',
    // status = '',
  },
}) => {
  const [openMoreInfo, setOpenMoreInfo] = useState(false);

  return (
    <Block>
      <Item>
        <Main>
          <DataSet data={dataAdd} />
          <Contact contact={contacts} />
          <TypeHelpList types={typeHelp} />

          <OpenMoreInfoButton onClick={() => setOpenMoreInfo(ps => !ps)} />

          {openMoreInfo && <MoreInfo additional={additional} info={info} />}
        </Main>
        <OptionButton delivery={delivery} />
      </Item>
    </Block>
  );
};
