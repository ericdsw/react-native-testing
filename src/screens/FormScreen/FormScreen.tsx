import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Button,
  Alert
} from 'react-native';
import { useFormik } from 'formik';

import makeFormValidationSchema from './makeFormValidationSchema';

type FormShape = {
  firstName: string;
  lastName: string;
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20
  },
  label: {
    fontSize: 20,
    lineHeight: 20,
  },
  input: {
    height: 40,
    flex: 1,
    marginLeft: 20,
    lineHeight: 20,
    fontSize: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10
  },
  button: {
    flex: 1
  }
})

type Props = {
  initialFirstName?: string;
  initialLastName?: string;
}
const FormScreen = ({
  initialFirstName = '',
  initialLastName = ''
}: Props): React.ReactElement => {

  const {
    handleChange,
    handleSubmit,
    values,
  } = useFormik<FormShape>({
    initialValues: {
      firstName: initialFirstName,
      lastName: initialLastName
    },
    validationSchema: makeFormValidationSchema(),
    onSubmit: ({ firstName, lastName }) => {
      Alert.alert(
        "Generated data",
        `FirstName: ${firstName}, LastName: ${lastName}`
      );
    }
  });

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.dataRow}>
        <Text style={styles.label}>First Name: </Text>
        <TextInput
          testID="firstNameInput"
          value={values.firstName}
          onChangeText={handleChange('firstName')}
          style={styles.input}
        />
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.label}>Last Name: </Text>
        <TextInput
          testID="lastNameInput"
          value={values.lastName}
          onChangeText={handleChange('lastName')}
          style={styles.input}
        />
      </View>
      <View style={[styles.dataRow, { flexDirection: 'column' }]}>
        <Button
          testID="submitButton"
          title="Submit"
          onPress={() => handleSubmit()}
        />
      </View>
    </SafeAreaView>
  );
} 

export default FormScreen;
