import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Schema } from './schema';

export type ParamsQuery = {
  path: string;
  id?: string;
  pageAndFilter?: object;
};

export const graphiqlAPI = createApi({
  reducerPath: 'graphiqlAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: (build) => ({
    graphiqlAPI: build.query<Schema, ParamsQuery>({
      query: ({ path, id, pageAndFilter }) => ({
        url: `${path}/${id}`,
        params: pageAndFilter,
      }),
    }),
  }),
});
