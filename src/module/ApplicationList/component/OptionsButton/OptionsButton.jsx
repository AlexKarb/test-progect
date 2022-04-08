import { IconBlock } from 'module/ApplicationList/component/OptionsButton/OptionsButton.styled';
import {
  CallButton,
  CompletedButton,
  DeletedButton,
  DeliveryButton,
  EditButton,
  PendingButton,
  InProgressButton,
} from './typeButton';

export const OptionButton = ({ delivery, id, contacts, onChange, type }) => {
  return (
    <>
      <IconBlock>
        <DeliveryButton delivery={delivery} />
        <CallButton tel={contacts.tel} />
        <PendingButton id={id} onClick={onChange} type={type} />
        <InProgressButton id={id} onClick={onChange} type={type} />
        <CompletedButton id={id} onClick={onChange} type={type} />
        <EditButton />
        <DeletedButton id={id} onClick={onChange} type={type} />
      </IconBlock>
    </>
  );
};
