import { Button } from 'module/OptionsButton/component/Button/Button';
import { Icon } from './DeletedIcon.styled';

export const DeletedIcon = ({ onClick }) => {
  return (
    <Icon>
      <Button
        onClick={onClick}
        currentAction={'deleted'}
        currentPage={false}
        text={'Видалити користувача?'}
      />
    </Icon>
  );
};
