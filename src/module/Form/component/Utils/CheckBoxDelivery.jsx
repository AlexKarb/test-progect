import styled from 'styled-components';
import { CheckBox } from 'module/Utils/CheckBox/CheckBox';

const DeliverBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CheckBoxDelivery = () => (
  <DeliverBox>
    <CheckBox name="delivery" label="доставка" theme="ligth" />
  </DeliverBox>
);
