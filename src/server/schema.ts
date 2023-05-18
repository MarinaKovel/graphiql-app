import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { introspectionQueryBody } from '@/utils/const';

type SchemaEnumValues = {
  deprecationReason: object;
  description: string;
  isDeprecated: boolean;
  name: string;
};

interface SchemaFields extends SchemaEnumValues {
  args: object[];
  type: object;
}

type SchemaType = {
  description: string;
  enumValues: SchemaEnumValues[];
  fields: SchemaFields[];
  inputFields: object;
  interfaces: object[];
  kind: string;
  name: string;
  possibleTypes: object;
};

export type Schema = {
  data: {
    __schema: {
      directives: object[];
      queryType: { name: 'Query' };
      types: SchemaType[];
    };
  };
};

export const getSchema = createApi({
  reducerPath: 'schema',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.graphcdn.app/',
  }),
  endpoints: (build) => ({
    fetchSchema: build.mutation<Schema, string>({
      query: () => ({
        url: '',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(introspectionQueryBody),
      }),
    }),
  }),
});
