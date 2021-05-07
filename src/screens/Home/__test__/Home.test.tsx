import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { MockComponent } from '../../../__mocks__/ui';

import Home from '../Home';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual<object>('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));
jest.mock('../../../components/ScreenContainer', () => MockComponent);

it('correctly renders with text', () => {
  const { getByText } = render(<Home />);
  expect(getByText('This is the home screen')).toBeDefined();
});

it('correctly navigates to the detail screen', () => {
  const { getByTestId } = render(<Home />);
  fireEvent(getByTestId('detailsButton'), 'press');
  expect(mockNavigate).toHaveBeenCalledWith('Detail');
});

it('correctly navigates to the form screen', () => {
  const { getByTestId } = render(<Home />);
  fireEvent(getByTestId('formButton'), 'press');
  expect(mockNavigate).toHaveBeenCalledWith('FormScreen');
});

it('correctly navigates to composite component screen', () => {
  const { getByTestId } = render(<Home />);
  fireEvent(getByTestId('compositeComponent'), 'press');
  expect(mockNavigate).toHaveBeenCalledWith('CompositeComponentScreen');
});
