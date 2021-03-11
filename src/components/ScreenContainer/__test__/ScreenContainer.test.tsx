import React from 'react';
import { render } from '@testing-library/react-native';

// System under test
import ScreenContainer, { styles } from '../ScreenContainer';

const testString = 'this is a test';

const containerId = 'screenContainer';

it('renders correctly with no props', () => {
  const { getByTestId } = render(<ScreenContainer />);
  expect(getByTestId(containerId).children.length).toBe(0);
  expect(getByTestId(containerId).props.style).toMatchObject(styles.container);
});

it('renders correctly with children', () => {
  const { getByTestId } = render(
    <ScreenContainer>{testString}</ScreenContainer>,
  );
  expect(getByTestId(containerId).children.length).toBe(1);
});

it('renders with customm style', () => {
  const mockStyle = {
    foo: 'bar',
  };
  const { getByTestId } = render(<ScreenContainer style={mockStyle} />);
  expect(getByTestId(containerId).props.style).toEqual({
    ...styles.container,
    ...mockStyle,
  });
});
