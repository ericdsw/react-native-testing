import React from 'react';
import { render } from '@testing-library/react-native';

import App from './App';

it('correctly renders app', () => {
  const { container } = render(<App />);
  expect(container).toBeDefined();
});