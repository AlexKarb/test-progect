export const filteringItems = (data, filter) => {
  const sorted = data?.filter(({ typeHelp, delivery }) =>
    filter.every(filter => {
      const checkDelivery = filter === 'delivery' && delivery === true;
      const checkType = typeHelp.includes(filter);

      return checkType || checkDelivery;
    })
  );

  return sorted;
};
