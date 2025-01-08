import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../Screens/Home';
import Messages from '../../Screens/Messages';
import Profile from '../../Screens/Profile';

export type stackScreens = {
  Home: undefined;
  Message: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<stackScreens>();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Message" component={Messages} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
