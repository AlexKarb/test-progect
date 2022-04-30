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

export const OptionButton = ({ delivery, id, contacts, onChange, type }) => {
  return (
    <>
      <IconBlock>
        <DeliveryButton delivery={delivery} />
        <CallButton tel={contacts.tel} />
        <PendingButton id={id} onChange={onChange} type={type} />
        <InProgressButton id={id} onChange={onChange} type={type} />
        <CompletedButton id={id} onChange={onChange} type={type} />
        <EditButton id={id} onChange={onChange} />
        <DeletedButton id={id} type={type} onChange={onChange} />
      </IconBlock>
    </>
  );
};
