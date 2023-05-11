import { introspectionQueryBody } from '@/utils/const';

type TSchemaEnumValues = {
  deprecationReason: object;
  description: string;
  isDeprecated: boolean;
  name: string;
};

interface ISchemaFields extends TSchemaEnumValues {
  args: object[];
  type: object;
}

type TSchemaType = {
  description: string;
  enumValues: TSchemaEnumValues[];
  fields: ISchemaFields[];
  inputFields: object;
  interfaces: object[];
  kind: string;
  name: string;
  possibleTypes: object;
};

export type TSchema = {
  data: {
    __schema: {
      directives: object[];
      queryType: { name: 'Query' };
      types: TSchemaType[];
    };
  };
};

export const API = {
  getSchema() {
    return fetch(`https://rickandmortyapi.com/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(introspectionQueryBody),
    })
      .then((response: Response): Promise<Partial<TSchema>> => response.json())
      .catch((error: Error) => console.log(error));
  },
};
