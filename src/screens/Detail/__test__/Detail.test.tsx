import React from 'react';
import { render } from '@testing-library/react-native';

import { MockComponent } from '../../../__mocks__/ui';

import Detail from '../Detail';

jest.mock('../../../components/ScreenContainer', () => MockComponent);

it('renders correctly with content', () => {
  const { getByText } = render(<Detail />);
  expect(getByText('This is the details screen')).toBeDefined();
});
