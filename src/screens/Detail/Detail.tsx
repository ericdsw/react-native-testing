import React from 'react';
import { Text, StyleSheet } from 'react-native';

import ScreenContainer from '../../components/ScreenContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Detail(): React.ReactElement {
  return (
    <ScreenContainer style={styles.container}>
      <Text testID="content">This is the details screen</Text>
    </ScreenContainer>
  );
}
