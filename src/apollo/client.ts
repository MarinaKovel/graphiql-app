import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.graphcdn.app/',
  cache: new InMemoryCache({ addTypename: false }),
});
