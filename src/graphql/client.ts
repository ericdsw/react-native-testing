import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client';
import { baseLink, authenticationLink } from './links';

const rootLink = ApolloLink.from([authenticationLink, baseLink]);

const client = new ApolloClient({
  link: rootLink,
  cache: new InMemoryCache(),
});

export default client;
