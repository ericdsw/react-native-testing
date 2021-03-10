import AsyncStorage from '@react-native-async-storage/async-storage';

export const TOKEN_KEY = '';
export const TOKEN_HEADER_KEY = '';

/**
 * Registers the token to the local storage
 *
 * @param token - The token provided by the server
 * @returns - Promise that will be resolved once the async storage finishes
 */
export async function registerToken(token: string): Promise<void> {
  return AsyncStorage.setItem(TOKEN_KEY, token);
}

/**
 * Refreshes the token in the local storage with the one provided by the
 * request's context, if any.
 *
 * @param sourceContext - The context provided by the client's response
 * @returns - Promise that will be resolved once the async storage finishes
 */
export async function refreshToken(
  sourceContext: Record<string, any>,
): Promise<void> {
  const {
    response: {headers},
  } = sourceContext;
  if (headers) {
    const token = headers[TOKEN_HEADER_KEY];
    if (token) {
      return AsyncStorage.setItem(TOKEN_KEY, token);
    }
  }
}

/**
 * Removes the token from local storage
 */
export async function eraseToken(): Promise<void> {
  AsyncStorage.removeItem(TOKEN_KEY);
}

/**
 * Fetches the token from local storage
 *
 * @returns - Promise that resolves in the current token's value
 */
export function getToken(): Promise<string | null> {
  return AsyncStorage.getItem(TOKEN_KEY);
}
