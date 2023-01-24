import { StatInfo, SubsInfo } from '../Info';
import { Item, QuestionIcon, TypeAcc, Number, Container } from './StatisticsPart.styled';

export const StatisticsPart = ({ jogsEfectivity = '100', usersAccounts = '0' }) => {
  return (
    <Container>
      <Item>
        Тип підписки:
        <TypeAcc>
          START <QuestionIcon />
          <SubsInfo />
        </TypeAcc>
      </Item>

      <Item>
        Кількість зарегестрованих користувачів:
        <Number>{usersAccounts}/5 </Number>
      </Item>

      <Item>
        Ефективність роботи:
        <Number>
          {jogsEfectivity}%
          <QuestionIcon />
          <StatInfo />
        </Number>
      </Item>
    </Container>
  );
};
