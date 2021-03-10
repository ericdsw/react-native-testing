import {mocked} from 'ts-jest/utils';

import {getToken} from '../../../authentication';
import mockAssertForLink from '../../../__mocks__/graphql/mockAssertForLink';
import authenticationLink from '../authenticationLink';

jest.mock('../../../authentication', () => ({
  getToken: jest.fn(),
}));

const mockToken = 'foo';

it('correctly injects authorization header', async () => {
  mocked(getToken).mockResolvedValue(mockToken);
  await mockAssertForLink(authenticationLink, (operation) => {
    expect(operation.getContext().headers.Authorization).toBe(
      `Bearer ${mockToken}`,
    );
  });
});

it('correctly ignores authorization header if nothing is present', async () => {
  mocked(getToken).mockResolvedValue(null);
  await mockAssertForLink(authenticationLink, (operation) => {
    expect(operation.getContext().header).toBeUndefined();
  });
});
