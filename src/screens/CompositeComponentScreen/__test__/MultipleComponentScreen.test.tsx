import React from 'react';
import { render } from '@testing-library/react-native';

import MultipleComponent from '../MultipleComponent';

it('correctly renders with testID', () => {
  const { container } = render(
    <MultipleComponent
      testID="foo-test-id"
      currentValue={10}
    />
  );

  expect(container.children[0].props.testID).toBe('foo-test-id');
});

it('correctly renders for valid multiple', () => {
  const { queryByText } = render(
    <MultipleComponent
      currentValue={10}
    />
  );
  expect(queryByText('El valor: 10 es multiplo de 5?: sí')).toBeTruthy();
});

it('correctly renders for invalid multiple', () => {
  const { queryByText } = render(
    <MultipleComponent
      currentValue={9}
    />
  );
  expect(queryByText('El valor: 9 es multiplo de 5?: no')).toBeTruthy();
});
