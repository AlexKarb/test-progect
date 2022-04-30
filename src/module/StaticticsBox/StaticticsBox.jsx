import {
  BoxBlock,
  Wrapp,
  BoxContainer,
  Name,
  Number,
  Text,
  IconContainer,
} from './StaticticsBox.styled';

export const StaticticsBox = ({ number, title, icon, size }) => {
  return (
    <BoxContainer size={size}>
      <Name>{title}</Name>
      <Wrapp>
        <IconContainer>{icon}</IconContainer>
        <BoxBlock>
          <Number>{number} </Number>
          <Text>{'замовлень(я)'}</Text>
        </BoxBlock>
      </Wrapp>
    </BoxContainer>
  );
};
