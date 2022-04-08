import {
  IconBlock,
  WaitIcon,
  IconContainer,
  DoneIcon,
  EditIcon,
  IconInfo,
  DeleteIcon,
  CallIcon,
  DeliveryIcon,
  IconPending,
} from 'module/ApplicationList/component/OptionsButton/OptionsButton.styled';
// import { editPublication } from 'service/api-service';

export const OptionButton = ({ delivery, id, contacts, onChange, type }) => {
  return (
    <>
      <IconBlock>
        <IconContainer>
          <DeliveryIcon delivery={delivery ? 'needDel' : null} />
          <IconInfo>
            {delivery ? 'Потрібна доставка' : 'Доставка непотрібна'}
          </IconInfo>
        </IconContainer>

        <IconContainer>
          <a href={`tel:${contacts.tel}`}>
            <CallIcon />
          </a>
          <IconInfo>Дзвінок</IconInfo>
        </IconContainer>

        {type === 'in progress' ? (
          <IconContainer
            onClick={() =>
              onChange({
                id,
                data: { status: 'pending' },
              })
            }
          >
            <IconPending />
            <IconInfo>Повернути до активних</IconInfo>
          </IconContainer>
        ) : (
          <IconContainer
            onClick={() =>
              onChange({
                id,
                data: { status: 'in progress' },
              })
            }
          >
            <WaitIcon />
            <IconInfo>У роботі</IconInfo>
          </IconContainer>
        )}

        {type === 'completed' ? (
          <IconContainer
            onClick={() =>
              onChange({
                id,
                data: { status: 'pending' },
              })
            }
          >
            <IconPending />
            <IconInfo>Повернути до активних</IconInfo>
          </IconContainer>
        ) : (
          <IconContainer
            onClick={() =>
              onChange({
                id,
                data: { status: 'completed' },
              })
            }
          >
            <DoneIcon />
            <IconInfo>Заявка виконана</IconInfo>
          </IconContainer>
        )}

        <IconContainer>
          <EditIcon />
          <IconInfo>Редагувати</IconInfo>
        </IconContainer>

        {type === 'deleted' ? (
          <IconContainer
            onClick={() =>
              onChange({
                id,
                data: { status: 'pending' },
              })
            }
          >
            <IconPending />
            <IconInfo>Повернути до активних</IconInfo>
          </IconContainer>
        ) : (
          <IconContainer
            onClick={() =>
              onChange({
                id,
                data: { status: 'deleted' },
              })
            }
          >
            <DeleteIcon />
            <IconInfo>Видалити</IconInfo>
          </IconContainer>
        )}
      </IconBlock>
    </>
  );
};
