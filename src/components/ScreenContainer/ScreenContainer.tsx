import React from 'react';
import { View, StyleSheet } from 'react-native';

type ScreenContainerProps = {
  children?: React.ReactNode;
  style?: Record<string, unknown>;
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function ScreenContainer({
  children,
  style,
}: ScreenContainerProps): React.ReactElement {
  return (
    <View
      testID="screenContainer"
      style={{
        ...styles.container,
        ...style,
      }}
    >
      {children}
    </View>
  );
}
