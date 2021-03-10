import React from 'react';
import {View} from 'react-native';

type Props = {
  children?: React.ReactNode;
};

/**
 * Mock component instance that we will use in place of external UI
 * dependencies
 */
const MockComponent = ({children}: Props): React.ReactElement => (
  <View>{children}</View>
);

export default MockComponent;
