/**
 * This file performs the required initial configurations to use AsyncStorage
 * on our tests. This file needs to be a 'js' file, as this library has no exported
 * types and thus, doesn't support typescript.
 */
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
