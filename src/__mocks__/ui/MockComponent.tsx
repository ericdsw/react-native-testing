/* eslint-disable */
import React from 'react';
import { View } from 'react-native';

type Props = {
  testID?: string;
  children?: React.ReactNode;
};

/**
 * Mock component instance that we will use in place of external UI dependencies. It will replace the
 * component with a plain "View" that forwards all the children elements and has all the original object's
 * properties.
 *
 * We use forwardRef so that we can mock components that accept a "ref" property without it generating
 * a warning
 */
const MockComponent = React.forwardRef(
  ({ testID, children, ...other }: Props, _): React.ReactElement => (
    <View testID={testID} {...other}>
      {children}
    </View>
  ),
);

export default MockComponent;
