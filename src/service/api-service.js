import axios from 'axios';
axios.defaults.baseURL = 'https://621faf0dce99a7de19458441.mockapi.io/ua-help';

export const getAllPublications = async () => {
  const response = await axios.get('/help');
  return response?.data;
};

export const getPendingPublications = async () => {
  const data = await getAllPublications();
  return data?.filter(({ status }) => status === 'pending');
};

// export const getInProgressPublications = async () => {
//   const data = await getAllPublications();
//   return data?.filter(({ status }) => status === 'in progress');
// };

// export const getCompletedPublications = async () => {
//   const data = await getAllPublications();
//   return data?.filter(({ status }) => status === 'completed');
// };

// export const getDeletedPublications = async () => {
//   const data = await getAllPublications();
//   return data?.filter(({ status }) => status === 'deleted');
// };

export const postPublication = async data => {
  axios.post('/help', data).then(console.log).catch(console.log);
};

// export const editPublication = async (id, data) => {
//   axios
//     .put(`/help/${id}`, data)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };
