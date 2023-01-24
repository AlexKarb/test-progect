import { IconBlock } from './component/Container/Container';
import {
  CallButton,
  CompletedButton,
  DeletedButton,
  DeliveryButton,
  EditButton,
  PendingButton,
  InProgressButton,
} from './component/typeButton';

export const OptionButton = ({ delivery, id, contacts, type }) => {
  return (
    <>
      <IconBlock>
        <DeliveryButton delivery={delivery} />
        <CallButton tel={contacts.tel} />
        <PendingButton id={id} type={type} />
        <InProgressButton id={id} type={type} />
        <CompletedButton id={id} type={type} />
        <EditButton id={id} />
        <DeletedButton id={id} type={type} />
      </IconBlock>
    </>
  );
};
