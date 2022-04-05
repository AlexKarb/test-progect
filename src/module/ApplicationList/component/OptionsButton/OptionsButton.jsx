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
} from 'module/ApplicationList/component/OptionsButton/OptionsButton.styled';

export const OptionButton = ({ delivery }) => {
  return (
    <>
      <IconBlock>
        <IconContainer>
          <DeliveryIcon />
          <IconInfo>Можлива (часткова) самодоставка</IconInfo>
        </IconContainer>

        <IconContainer>
          <CallIcon />
          <IconInfo>Дзвінок</IconInfo>
        </IconContainer>
        <IconContainer>
          <WaitIcon />
          <IconInfo>У роботі</IconInfo>
        </IconContainer>
        <IconContainer>
          <DoneIcon />
          <IconInfo>Заявка виконана</IconInfo>
        </IconContainer>
        <IconContainer>
          <EditIcon />
          <IconInfo>Редагувати</IconInfo>
        </IconContainer>
        <IconContainer>
          <DeleteIcon />
          <IconInfo>Видалити</IconInfo>
        </IconContainer>
      </IconBlock>
    </>
  );
};
