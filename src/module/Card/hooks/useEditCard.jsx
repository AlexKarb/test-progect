import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getRoleValue } from 'redux/authSlice';
import { notifyChange } from 'module/Toaster/Toaster';

export const useEditCard = (setValues, onChange) => {
  const [noAccess, setNoAccess] = useState(false);
  const role = useSelector(getRoleValue);

  if (role === 'GUEST') {
    setNoAccess(true);
    return;
  }

  const editCard = async values => {
    const { id, ...data } = values;
    await onChange({ id, data });
    setValues(values);
    notifyChange('Зміни внесено!');
  };

  return [editCard, noAccess];
};
