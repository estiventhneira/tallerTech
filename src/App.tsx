import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerMenu from './navigation/DrawerMenu';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerMenu />
    </NavigationContainer>
  );
}
