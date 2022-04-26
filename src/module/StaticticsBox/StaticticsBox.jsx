import {
  BoxBlock,
  BoxBlock2,
  BoxContainer,
  Name,
  Number,
  Text,
} from './StaticticsBox.styled';

export const StaticticsBox = ({ number, title, icon, size }) => {
  return (
    <BoxContainer size={size}>
      <Name>{title}</Name>
      <BoxBlock>
        {icon}
        <BoxBlock2>
          <Number>{number} </Number>
          <Text>{'замовлень(я)'}</Text>
        </BoxBlock2>
      </BoxBlock>
    </BoxContainer>
  );
};
