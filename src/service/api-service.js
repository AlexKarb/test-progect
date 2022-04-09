import axios from 'axios';
axios.defaults.baseURL = 'https://621faf0dce99a7de19458441.mockapi.io/ua-help';

export const getAllPublications = async () => {
  const response = await axios.get('/help');
  return response?.data;
};

export const getPublicationById = async id => {
  const response = await axios.get(`/help/${id}`);
  return response?.data;
};

export const getSortedPublications = async type => {
  const data = await getAllPublications();

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

export const postPublication = async data => {
  await axios.post('/help', data).then(console.log).catch(console.log);
};

export const editPublication = async (id, data) => {
  await axios
    .put(`/help/${id}`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
