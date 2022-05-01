import { isPendingPage } from 'root/isPage';
import { DateHistory } from '../Date/DateHistory/DateHistory';
import { DetailsComment } from '../DetailsComment/DetailsComment';
import { OrderDescription } from '../OrderDescription/OrderDescription';
import { Line } from 'module/Utils/Line/Line';
import { Block, FirstLine } from './MoreInfo.styled';

export const MoreInfo = ({ additional, info, dates, type }) => {
  return (
    <Block>
      <FirstLine>
        <Line />
      </FirstLine>
      <OrderDescription data={additional} />
      {info && (
        <>
          <Line />
          <DetailsComment data={info} />
        </>
      )}
      {!isPendingPage(type) && (
        <>
          <Line />
          <DateHistory dates={dates} type={type} />
        </>
      )}
    </Block>
  );
};
