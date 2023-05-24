import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { introspectionQueryBody } from '@/utils/const';

type SchemaEnumValues = {
  deprecationReason: object;
  description: string;
  isDeprecated: boolean;
  name: string;
};

type Type = {
  kind: string;
  name: string;
  ofType: Type | null;
};

export type Args = {
  name: string;
  description: string;
  defaultValue: object;
  type: Type;
};

export type SchemaFields = SchemaEnumValues & {
  args: Args[];
  type: Type;
};

export type SchemaType = {
  description: string;
  enumValues: SchemaEnumValues[];
  fields: SchemaFields[];
  inputFields: object;
  interfaces: object[];
  kind: string;
  name: string;
  possibleTypes: object;
};

type SchemaData = {
  data: {
    __schema: {
      directives: object[];
      queryType: { name: 'Query' };
      types: SchemaType[];
    };
  };
};

export type Schema = {
  data: SchemaData;
  requestId: string;
  status: string;
  endpointName: string;
  fulfilledTimeStamp: number;
  startedTimeStamp: number;
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
