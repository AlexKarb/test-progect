import { Button } from '../Button/Button';

export const DeliveryButton = ({ delivery }) => (
  <Button
    currentAction={'delivery'}
    data={delivery}
    text={delivery ? 'Потрібна доставка' : 'Доставка непотрібна'}
  />
);
