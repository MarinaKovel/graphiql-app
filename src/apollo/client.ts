import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client';
import { customHeaders } from '@/components/editor/editor-section';

const httpLink = new HttpLink({ uri: 'https://rickandmortyapi.graphcdn.app/' });

const middlewareAuthLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: customHeaders,
  });
  return forward(operation);
});

export const client = new ApolloClient({
  link: from([middlewareAuthLink, httpLink]),
  cache: new InMemoryCache({ addTypename: false }),
});
