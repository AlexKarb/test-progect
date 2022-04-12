import { CheckBoxIcon } from '../TypeHelp/TypeHelp.styled';
import { DeliveryCheck, DeliverBox } from './Details.styled';

export const CheckBoxDelivery = () => (
  <DeliverBox>
    <DeliveryCheck type="checkbox" name="delivery" />
    <CheckBoxIcon />
    доставка
  </DeliverBox>
);
