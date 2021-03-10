/**
 * Mock general libraries that try to communicate with native components
 */
import 'react-native';
import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-native/extend-expect';
import fetchMock from 'jest-fetch-mock';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// Mock fetch will be used in our tests instead of the regular one
fetchMock.enableMocks();
