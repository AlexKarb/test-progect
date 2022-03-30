import axios from 'axios';
axios.defaults.baseURL = 'https://621faf0dce99a7de19458441.mockapi.io/ua-help';

export const getAllPublication = async () => {
  const response = await axios.get('/help');
  return response?.data;
};

export const getPublicationOfHelper = async () => {
  const data = await getAllPublication();
  console.log('~ data', data);
  return data?.filter(({ dataType }) => dataType === 'helper');
};

export const getPublicationOfHelp = async () => {
  const data = await getAllPublication();
  console.log('~ data', data);
  return data?.filter(({ dataType }) => dataType === 'help');
};

export const postPublication = async data => {
  axios
    .post('/help', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const editPublication = async (id, data) => {
  axios
    .put(`/help/${id}`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
