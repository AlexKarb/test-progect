import {
  DeliveryIcon,
  CallIcon,
  PendingIcon,
  WaitIcon,
  DoneIcon,
  EditIcon,
  DeleteIcon,
  TelLink,
  IconContainer,
} from './Icon.styled';

export const Icon = ({ styleIcon, currentPage, data }) => {
  switch (styleIcon) {
    case 'delivery': {
      return (
        <IconContainer>
          <DeliveryIcon type={data ? 'needDel' : null} />
        </IconContainer>
      );
    }

    case 'call': {
      return (
        <TelLink href={`tel:${data}`}>
          <IconContainer>
            <CallIcon />
          </IconContainer>
        </TelLink>
      );
    }

    case 'pending': {
      return (
        <IconContainer>
          <PendingIcon type={currentPage} />
        </IconContainer>
      );
    }

    case 'in progress': {
      return (
        <IconContainer>
          <WaitIcon type={currentPage} />
        </IconContainer>
      );
    }

    case 'completed': {
      return (
        <IconContainer>
          <DoneIcon type={currentPage} />
        </IconContainer>
      );
    }

    case 'edit': {
      return (
        <IconContainer>
          <EditIcon />
        </IconContainer>
      );
    }

    case 'deleted': {
      return (
        <IconContainer>
          <DeleteIcon type={currentPage} />
        </IconContainer>
      );
    }

    default:
      return null;
  }
};
