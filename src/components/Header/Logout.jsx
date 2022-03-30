import { ExitIcon, LogOutBtn } from './Logout.styled';
import { logOut } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const LogOut = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleClick = () => {
    dispatch(logOut());
    navigate('/', { replace: true });
  };
  return (
    <LogOutBtn type="button" onClick={handleClick}>
      <ExitIcon />
    </LogOutBtn>
  );
};
