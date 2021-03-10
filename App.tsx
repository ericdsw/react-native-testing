import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';

import client from './src/graphql/client';
import { RouteContainer } from './src/routes';

export default function App(): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RouteContainer />
      </NavigationContainer>
    </ApolloProvider>
  );
}
