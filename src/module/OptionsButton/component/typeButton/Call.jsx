import { Button } from '../Button/Button';

export const CallButton = ({ tel }) => (
  <Button data={tel} text={'Дзвінок'} currentAction={'call'} />
);
