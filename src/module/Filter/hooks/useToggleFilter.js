import { useState } from 'react';

export const useToggleFilter = () => {
  const [filter, setFilter] = useState([]);

  const toggleFilter = (value, action = { deleting: false }) => {
    const haveMatch = filter.find(filterValue => filterValue === value);
    if (action.deleting || haveMatch) {
      setFilter(prS => prS.filter(filterValue => filterValue !== value));
      return;
    } else {
      setFilter(prS => [...prS, value]);
    }
  };

  return [filter, toggleFilter];
};
