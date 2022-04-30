import {
  DeliveryIcon,
  CallIcon,
  PendingIcon,
  WaitIcon,
  DoneIcon,
  EditIcon,
  DeleteIcon,
  TelLink,
} from './Icon.styled';

export const Icon = ({ styleIcon, currentPage, data }) => {
  switch (styleIcon) {
    case 'delivery': {
      return <DeliveryIcon type={data ? 'needDel' : null} />;
    }

    case 'call': {
      return (
        <TelLink href={`tel:${data}`}>
          <CallIcon />
        </TelLink>
      );
    }

    case 'pending': {
      return <PendingIcon type={currentPage} />;
    }

    case 'in progress': {
      return <WaitIcon type={currentPage} />;
    }

    case 'completed': {
      return <DoneIcon type={currentPage} />;
    }

    case 'edit': {
      return <EditIcon />;
    }

    case 'deleted': {
      return <DeleteIcon type={currentPage} />;
    }

    default:
      return null;
  }
};
