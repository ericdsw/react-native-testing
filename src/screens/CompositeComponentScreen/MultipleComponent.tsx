import React, { useMemo } from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  testID?: string;
  currentValue: number;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 20
  },
})

const MulitpleComponent = ({
  testID,
  currentValue
}: Props): React.ReactElement => {

  const isMultiple = useMemo(() => currentValue % 5 === 0, [currentValue]);

  return (
    <Text testID={testID} style={styles.text}>
      El valor: {currentValue} es multiplo de 5?: {isMultiple ? 'sí' : 'no'}
    </Text>
  );
}

export default MulitpleComponent;