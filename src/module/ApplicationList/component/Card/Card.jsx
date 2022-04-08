import { Main, Item, Block } from './Card.styled';
import { useState } from 'react';
import { Contact } from '../Contact/Contact';
import { MoreInfo } from '../MoreInfo/MoreInfo';
import { OptionButton } from '../OptionsButton/OptionsButton';
import { TypeHelpList } from '../TypeHelpList/TypeHelpList';
import { DataSet } from '../DataSet/DataSet';
import { OpenMoreInfoButton } from '../MoreInfo/OpenMoreInfoButton';

export const Card = ({
  onChange,
  type,
  data: {
    id = '',
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
    <Item>
      <Block>
        <Main>
          <DataSet data={dataAdd} />

          <Contact contact={contacts} />
          <TypeHelpList types={typeHelp} />

          <OpenMoreInfoButton
            isOpen={openMoreInfo}
            onClick={() => setOpenMoreInfo(ps => !ps)}
          />
        </Main>
        <OptionButton
          delivery={delivery}
          id={id}
          contacts={contacts}
          onChange={onChange}
          type={type}
        />
      </Block>
      {openMoreInfo && <MoreInfo additional={additional} info={info} />}
    </Item>
  );
};
