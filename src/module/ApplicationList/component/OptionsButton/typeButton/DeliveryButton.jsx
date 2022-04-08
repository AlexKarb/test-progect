import { DeliveryIcon, IconContainer, IconInfo } from '../OptionsButton.styled';

export const DeliveryButton = ({ delivery }) => (
  <IconContainer>
    <DeliveryIcon delivery={delivery ? 'needDel' : null} />
    <IconInfo>
      {delivery ? 'Потрібна доставка' : 'Доставка непотрібна'}
    </IconInfo>
  </IconContainer>
);
