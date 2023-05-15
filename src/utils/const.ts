import { CSSProperties } from 'react';
import vladimircat from '@/assets/images/vladimircat.jpeg';
import marinacat from '@/assets/images/marinacat.webp';
import veronicacat from '@/assets/images/veronicacat.webp';

export const override: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10%',
};

export const developers = [
  {
    name: 'Vladimir',
    subheader: 'Front-End Developer',
    image: vladimircat,
    github: 'https://github.com/Satancrew',
  },
  {
    name: 'Marina',
    subheader: 'Team Lead',
    image: marinacat,
    github: 'https://github.com/MarinaKovel',
  },
  {
    name: 'Veronica',
    subheader: 'Front-End Developer',
    image: veronicacat,
    github: 'https://github.com/Veronchi',
  },
];

export const introspectionQueryBody = {
  query: `query IntrospectionQuery {
      __schema {
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
          ...FullType
        }
        directives {
          name
          description
          locations
          args {
            ...InputValue
          }
        }
      }
    }
    fragment FullType on __Type {
      kind
      name
      description
      fields(includeDeprecated: true) {
        name
        description
        args {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        description
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }
    fragment InputValue on __InputValue {
      name
      description
      type { ...TypeRef }
      defaultValue
    }
    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                  }
                }
              }
            }
          }
        }
      }
    }`,
  operationName: 'IntrospectionQuery',
};
