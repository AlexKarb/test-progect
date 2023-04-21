import { Item, Name, Wrapper } from './UserItem.styled';

import { DeletedUser } from '../DeletedUser/DeletedUser';
import { UpdatePassword } from '../UpdatePassword/UpdatePassword';

export const UserItem = ({ user }) => {
  return (
    <Item>
      <Name>{user.login}</Name>
      <Wrapper>
        <UpdatePassword userId={user._id} />
        <DeletedUser user={user} />
      </Wrapper>
    </Item>
  );
};
