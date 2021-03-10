import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {MockComponent} from '../../../__mocks__/ui';

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
  const {getByText} = render(<Home />);
  expect(getByText('This is the home screen')).toBeDefined();
});

it('corectly navigates to the detail screen', () => {
  const {getByTestId} = render(<Home />);
  fireEvent(getByTestId('detailsButton'), 'press');
  expect(mockNavigate).toHaveBeenCalledWith('Detail');
});
