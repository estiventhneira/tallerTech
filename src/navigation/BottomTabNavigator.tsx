import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackHome from './StackHome';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={StackHome} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
