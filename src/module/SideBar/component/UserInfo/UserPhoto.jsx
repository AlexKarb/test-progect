import { IconAdmin, IconVolonter, IconGuest } from './UserInfo.styled';

export const UserPhoto = ({ role }) => {
  switch (role) {
    case 'ADMIN':
      return <IconAdmin />;

    case 'VOLONTER':
      return <IconVolonter />;

    case 'GUEST':
      return <IconGuest />;

    default:
      return <IconGuest />;
  }
};
