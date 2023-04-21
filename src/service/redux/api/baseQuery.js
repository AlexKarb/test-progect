const { fetchBaseQuery } = require('@reduxjs/toolkit/dist/query');

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://attractive-erin-sunbonnet.cyclic.app/api',

  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
