import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View
} from 'react-native';

import MulitpleComponent from './MultipleComponent';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  separator: {
    marginVertical: 2,
  }
});

const CompositeComponentScreen = (): React.ReactElement => {

  const [value, updateValue] = useState<number>(0);

  return (
    <SafeAreaView style={styles.root}>
      <MulitpleComponent
        testID="multipleComponent"
        currentValue={value}
      />
      <Button
        testID="addOne"
        title="add 1"
        onPress={() => updateValue(value + 1)}
      />
      <View style={styles.separator} />
      <Button
        testID="addTwo"
        title="add 2"
        onPress={() => updateValue(value + 2)}
      />
      <View style={styles.separator} />
      <Button
        testID="substractOne"
        title="substract 1"
        onPress={() => updateValue(value - 1)}
      />
    </SafeAreaView>
  );
}

export default CompositeComponentScreen;