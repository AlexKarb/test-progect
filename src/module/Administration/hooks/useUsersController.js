import { notifyChange } from 'module/Toaster/Toaster';
import { useState } from 'react';

export const useUsersController = () => {
  const [users, setUsers] = useState([]);

  const usersController = {
    registration: (name, password) => {
      setUsers([...users, { name, password }]);
      notifyChange(`Зареєстровано нового користувача: ${name}!`);
    },

    removeByName: name => {
      setUsers([...users.filter(user => user.name !== name)]);
      notifyChange(`Видалено користувача: ${name}!`);
    },

    updatePassword: (name, newPassword) => {
      const updatedUsers = users.map(user =>
        user.name === name ? { name, password: newPassword } : user
      );
      setUsers([...updatedUsers]);
      notifyChange(`Пароль користувача ${name} оновлено!`);
    },

    set: setUsers,
  };

  return [users, usersController];
};
