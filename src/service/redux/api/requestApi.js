import { baseApi } from './api';

export const requestApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getAll: build.query({
      query: () => `/requests/`,
      providesTags: ['Requests'],
    }),

    getById: build.mutation({
      query(id) {
        return {
          url: `/requests/${id}`,
          method: 'GET',
        };
      },
      invalidatesTags: ['Requests'],
    }),

    add: build.mutation({
      query(body) {
        return {
          url: `/requests/`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Requests'],
    }),

    update: build.mutation({
      query(body) {
        return {
          url: `/requests/`,
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: ['Requests'],
    }),

    updateStatus: build.mutation({
      query({ body, id }) {
        return {
          url: `/requests/status/${id}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: ['Requests'],
    }),
  }),
});

const {
  useGetByIdMutation,
  useGetAllQuery,
  useAddMutation,
  useUpdateMutation,
  useUpdateStatusMutation,
} = requestApi;

export const Request = {
  getAll: useGetAllQuery,
  getById: useGetByIdMutation,
  add: useAddMutation,
  update: useUpdateMutation,
  updateStatus: useUpdateStatusMutation,
};
