import { ExclamationPoint, Text } from './NoFound.styled';

export const NoFound = ({ text = 'заявок не знайдено' }) => (
  <div>
    <ExclamationPoint />
    <Text>{text}</Text>
  </div>
);
