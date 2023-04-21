import axios from 'axios';
axios.defaults.baseURL = 'https://621faf0dce99a7de19458441.mockapi.io/ua-help';

export const keysOfTypes = () => [
  'pending',
  'in progress',
  'completed',
  'deleted',
  'all',
];

export const getSortedPublications = async (type, data) => {
  if (!data) return;

  switch (type) {
    case 'pending':
      return data?.filter(({ status }) => status === 'pending');

    case 'in progress':
      return data?.filter(({ status }) => status === 'in progress');

    case 'completed':
      return data?.filter(({ status }) => status === 'completed');

    case 'deleted':
      return data?.filter(({ status }) => status === 'deleted');

    default:
      return data;
  }
};

export const getLengthOfSortedPublication = async type => {
  const data = await getSortedPublications(type);
  return data.length;
};
