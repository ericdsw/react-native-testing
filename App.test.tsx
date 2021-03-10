import React from 'react';
import App from './App';
import { render } from '@testing-library/react-native';

it('correctly renders app', () => {
  const { container } = render(<App />);
  expect(container).toBeDefined();
});