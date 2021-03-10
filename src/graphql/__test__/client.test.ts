import {InMemoryCache} from '@apollo/client';
import client from '../client';

it('correctly creates client', () => {
  expect(client.link).toBeDefined();
  expect(client.cache).toBeInstanceOf(InMemoryCache);
});
