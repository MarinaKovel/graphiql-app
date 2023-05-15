import { CSSProperties } from 'react';

export const override: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10%',
};

export const developers = [
  {
    name: 'Vladimir',
    subheader: 'Front-End Developer',
    image: 'https://www.meme-arsenal.com/memes/cdd51d667ac5f6b6ab3e4efc22c9ba73.jpg',
    github: 'https://github.com/Satancrew',
  },
  {
    name: 'Marina',
    subheader: 'Team Lead',
    image:
      'https://avatars.mds.yandex.net/i?id=81ce3d6b7b948b46491b9412329dacf7bc557ddb-4821391-images-thumbs&n=13',
    github: 'https://github.com/MarinaKovel',
  },
  {
    name: 'Veronica',
    subheader: 'Front-End Developer',
    image:
      'https://avatars.mds.yandex.net/i?id=4e5028328801a096238e5c06e9ad4d53-5344946-images-thumbs&n=13',
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
