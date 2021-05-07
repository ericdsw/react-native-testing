import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { MockComponent } from '../../../__mocks__/ui';

import CompositeComponentScreen from '../CompositeComponentScreen';

jest.mock('../MultipleComponent', () => MockComponent);

const multipleComponentId = 'multipleComponent';

it('correctly renders with initial value', () => {
  const { getByTestId } = render(<CompositeComponentScreen />);
  expect(getByTestId(multipleComponentId).props.currentValue).toBe(0);
});

it('correctly adds one', () => {
  const { getByTestId } = render(<CompositeComponentScreen />);
  fireEvent(getByTestId("addOne"), "press");
  expect(getByTestId(multipleComponentId).props.currentValue).toBe(1);
});

it('correctly adds two', () => {
  const { getByTestId } = render(<CompositeComponentScreen />);
  fireEvent(getByTestId("addTwo"), "press");
  expect(getByTestId(multipleComponentId).props.currentValue).toBe(2);
});

it('correctly substracts one', () => {
  const { getByTestId } = render(<CompositeComponentScreen />);
  fireEvent(getByTestId("substractOne"), "press");
  expect(getByTestId(multipleComponentId).props.currentValue).toBe(-1);
});
