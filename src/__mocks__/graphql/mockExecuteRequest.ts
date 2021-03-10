import {execute, gql, ApolloLink} from '@apollo/client';

/** Any query would be fine here */
const MockQuery = gql`
  query {
    foo
  }
`;

/**
 * Forces the link to "treat" the request's context
 *
 * @param link - The apollo link to execute
 */
export default async function mockExecuteRequest(
  link: ApolloLink,
): Promise<void> {
  return new Promise<void>((resolve): void => {
    const lastLink = new ApolloLink(() => {
      resolve();
      return null;
    });
    execute(ApolloLink.from([link, lastLink]), {query: MockQuery}).subscribe(
      (): void => {
        // Not required for our tests, subscribe merely fires the request
      },
    );
  });
}
