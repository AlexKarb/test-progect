const { useState, useEffect } = require('react');

export const useFilterByType = data => {
  const [itemsOfList, setItemsOfList] = useState();
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const sorted = data?.filter(({ typeHelp, delivery }) =>
      filter.every(filter => {
        const checkDelivery = filter === 'delivery' && delivery === true;
        const checkType = typeHelp.includes(filter);

        return checkType || checkDelivery;
      })
    );

    setItemsOfList(sorted || data);
  }, [data, filter, setItemsOfList]);

  const toggleFilter = (value, prop = { deteleValue: false }) => {
    const haveMatch = filter.find(filterValue => filterValue === value);

    const addValue = () => setFilter(prS => [...prS, value]);
    const deleteValue = () =>
      setFilter(prS => prS.filter(filterValue => filterValue !== value));

    if (prop.deteleValue) {
      return deleteValue(value);
    } else if (haveMatch) {
      deleteValue();
    } else {
      addValue();
    }
  };

  return [itemsOfList, toggleFilter, filter, setFilter];
};
