import React from 'react';

import Stack from './Stack';
import { Home, Detail } from '../screens';

/**
 * This is the main file that will handel our app's navigation requirements.
 * It will be relative to what we define in AndroidManifest.xml or in the Storyboard, as all
 * screens must be registered here
 *
 * @returns - React element containing the entire navigation stack
 */
const RouteContainer = (): React.ReactElement => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);

export default RouteContainer;
