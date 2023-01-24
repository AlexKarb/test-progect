import { baseApi } from './api';

export const usersApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCurrentUser: build.query({
      query: () => `/users/current`,
    }),

    getAllUser: build.query({
      query: () => `/users/all`,
      providesTags: ['Users'],
    }),

    addUser: build.mutation({
      query(body) {
        return {
          url: `/users/signup`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Users'],
    }),

    updatePasswordUser: build.mutation({
      query({ body, userId }) {
        return {
          url: `/users/updatePassword/${userId}`,
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: ['Users'],
    }),

    removeUser: build.mutation({
      query({ userId }) {
        return {
          url: `/users/${userId}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: user => [{ type: 'Users', id: user?.id }],
    }),

    loginUser: build.mutation({
      query(body) {
        return {
          url: `/users/login`,
          method: 'POST',
          body,
        };
      },
    }),

    logoutUser: build.mutation({
      query: () => ({ url: `/users/logout` }),
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useGetAllUserQuery,
  useAddUserMutation,
  useUpdatePasswordUserMutation,
  useRemoveUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = usersApi;
