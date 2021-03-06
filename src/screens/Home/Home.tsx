import React from 'react';
import { Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import RootStackParamList from '../../routes/RootStackParamList';
import ScreenContainer from '../../components/ScreenContainer';

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

const Home = (): React.ReactElement => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ScreenContainer style={styles.container}>
      <Text>This is the home screen</Text>
      <Button
        testID="detailsButton"
        title="Go to details"
        onPress={(): void => navigation.navigate('Detail')}
      />
      <Button
        testID="formButton"
        title="Go to form"
        onPress={(): void => navigation.navigate('FormScreen')}
      />
      <Button
        testID="compositeComponent"
        title="Go to composite component"
        onPress={(): void => navigation.navigate('CompositeComponentScreen')}
      />
    </ScreenContainer>
  );
};

export default Home;
