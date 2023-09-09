import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://orizona.stepzen.net/api/invited-manta/__graphql',
  headers: {
    Authorization:
      'apikey orizona::stepzen.io+1000::cc0019c6b3a97e664830a64921adb1cfd24ead24ba2c8f65d4beccd9aefc3264',
  },
  cache: new InMemoryCache(),
});

export default client;
