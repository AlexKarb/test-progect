import {
  BoxBlock,
  BoxBlock2,
  BoxContainer,
  Name,
  Number,
  Text,
} from './Statistics.styled';

export const StaticticsBox = ({ number, title, icon, width }) => {
  return (
    <BoxContainer width={width}>
      <Name>{title}</Name>
      <BoxBlock>
        {icon}
        <BoxBlock2>
          <Number>{number} </Number>
          <Text>замовлення</Text>
        </BoxBlock2>
      </BoxBlock>
    </BoxContainer>
  );
};
