import { InfoWrap, InfoText, InfoSubText } from './Info.styled';

export const StatInfo = () => (
  <InfoWrap size="medium" position="left">
    <InfoText>
      Ефективність роботи - це оцінка співвідношення виконаних до невиконаних
      замовлень.
      <InfoSubText>*Видалені замовлення не враховуються.</InfoSubText>
    </InfoText>
    <InfoText>100%-75% - відмінно</InfoText>
    <InfoText>74%-50% - добре</InfoText>
    <InfoText>49%-25% - погано</InfoText>
    <InfoText>24%-0% - недопустимий результат</InfoText>
  </InfoWrap>
);
