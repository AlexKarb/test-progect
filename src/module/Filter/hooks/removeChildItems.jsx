export const removeChildItems = async toggleFilter => {
  await toggleFilter('clothes_child', { deleting: true });
  await toggleFilter('children_food', { deleting: true });
  await toggleFilter('diapers', { deleting: true });
};
