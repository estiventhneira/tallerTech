import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

export default function StackHome() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}
