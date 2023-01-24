import { baseApi } from './api';

export const organisationApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCount: build.query({
      query: () => '/organisation/current',
      providesTags: ['Organisation'],
    }),

    addOrganisation: build.mutation({
      query(body) {
        return {
          url: `/organisation/signup`,
          method: 'POST',
          body,
        };
      },
    }),
    invalidatesTags: ['Organisation'],
  }),
});

export const { useAddOrganisationMutation } = organisationApi;
