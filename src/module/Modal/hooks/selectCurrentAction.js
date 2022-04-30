export const selectCurrentAction = currentAction => {
  switch (currentAction) {
    case 'pending':
      return ' АКТИВНІ';

    case 'in progress':
      return ' РОБОТУ';

    case 'completed':
      return ' ВИКОНАНІ';

    default:
      return null;
  }
};
