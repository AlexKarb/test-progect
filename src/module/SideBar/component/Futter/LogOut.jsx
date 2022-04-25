// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/authSlice';
import { LogoutButton, IconLogout, Label } from './Futter.styled';

export const LogOut = () => {
  // const dispatch = useDispatch();

  return (
    <LogoutButton
      type="button"
      // onClick={() => dispatch(logOut())}
    >
      <IconLogout />
      <Label> Вийти</Label>
    </LogoutButton>
  );
};
