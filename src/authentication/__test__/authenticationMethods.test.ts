import AsyncStorage from '@react-native-async-storage/async-storage';
import {mocked} from 'ts-jest/utils';

// System under test
import {
  registerToken,
  refreshToken,
  eraseToken,
  getToken,
  TOKEN_KEY,
  TOKEN_HEADER_KEY,
} from '../authenticationMethods';

const mockToken = 'foo-token';

it('correctly registers the token', async () => {
  await registerToken(mockToken);
  expect(AsyncStorage.setItem).toHaveBeenCalledWith(TOKEN_KEY, mockToken);
});

it('correctly erases the token', async () => {
  await eraseToken();
  expect(AsyncStorage.removeItem).toHaveBeenCalledWith(TOKEN_KEY);
});

it('correctly retrieves the token', async () => {
  mocked(AsyncStorage.getItem).mockResolvedValue(mockToken);
  const token = await getToken();
  expect(AsyncStorage.getItem).toHaveBeenCalledWith(TOKEN_KEY);
  expect(token).toEqual(mockToken);
});

it('correctly refreshes the token with valid source context', async () => {
  const validContext = {
    response: {
      headers: {
        [TOKEN_HEADER_KEY]: mockToken,
      },
    },
  };
  await refreshToken(validContext);
  expect(AsyncStorage.setItem).toHaveBeenCalledWith(TOKEN_KEY, mockToken);
});

it('will not refresh the token if the provided context has no token', async () => {
  const contextWithoutToken = {
    response: {
      headers: {},
    },
  };
  await refreshToken(contextWithoutToken);
  expect(AsyncStorage.setItem).not.toHaveBeenCalled();
});

it('will not refresh the token if the provided context has no headers', async () => {
  const contextWithoutHeaders = {
    response: {},
  };
  await refreshToken(contextWithoutHeaders);
  expect(AsyncStorage.setItem).not.toHaveBeenCalled();
});
