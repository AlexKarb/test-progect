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
      <Wrapp size={size}>
        <IconContainer size={size}>{icon}</IconContainer>
        <BoxBlock>
          <Number size={size}>{number} </Number>
          <Text>{'замовлень(я)'}</Text>
        </BoxBlock>
      </Wrapp>
    </BoxContainer>
  );
};
