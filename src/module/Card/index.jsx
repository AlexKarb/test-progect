import { Main, Item, Block } from './component/Card.styled';
import { useEffect, useState } from 'react';
import { Contact } from './component/Contact/Contact';
import { MoreInfo } from './component/MoreInfo/MoreInfo';
import { TypeHelpList } from './component/TypeHelpList/TypeHelpList';
import { DateSet } from './component/Date/DateSet/DateSet';
import { ShowMoreButton } from './component/ShowMoreButton/ShowMoreButton';
import { OptionButton } from 'module/OptionsButton';

export const Card = ({
  type,
  data: {
    _id = '',
    contacts = {},
    typeHelp = [],
    additional = {},
    delivery = false,
    info = '',
    dataAdd = '',
    dataClose = '',
    dataInProgress = '',
    dataCompleted = '',
  },
}) => {
  const [openMoreInfo, setOpenMoreInfo] = useState(false);

  const mql = window.matchMedia(`(min-width: 1024px)`);
  useEffect(() => {
    mql.matches && setOpenMoreInfo(true);
  }, [mql]);

  return (
    <Item>
      <Block>
        <Main>
          <DateSet
            dates={{ dataAdd, dataClose, dataInProgress, dataCompleted }}
            type={type}
          />

          <Contact contact={contacts} />
          <TypeHelpList types={typeHelp} />

          <ShowMoreButton
            isOpen={openMoreInfo}
            onClick={() => setOpenMoreInfo(ps => !ps)}
          />
        </Main>
        <OptionButton delivery={delivery} id={_id} contacts={contacts} type={type} />
      </Block>
      {openMoreInfo && (
        <MoreInfo
          additional={additional}
          info={info}
          dates={{ dataAdd, dataInProgress, dataCompleted }}
          type={type}
        />
      )}
    </Item>
  );
};
