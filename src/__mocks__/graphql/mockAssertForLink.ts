import {ApolloLink, Operation} from '@apollo/client';
import mockExecuteRequest from './mockExecuteRequest';

/**
 * Helper method that allows us to assert modifications to a
 * request's contex
 *
 * @param link - The ApolloLink instance to test
 * @param assertionCallback - The callback that will be run after the
 * link executes
 */
export default async function mockAssertForLink(
  link: ApolloLink,
  assertionCallback: (operation: Operation) => void,
): Promise<void> {
  return mockExecuteRequest(
    ApolloLink.from([
      link,
      new ApolloLink((operation, forward) => {
        assertionCallback(operation);
        return forward(operation);
      }),
    ]),
  );
}
