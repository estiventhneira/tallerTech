/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import Home from '../screens/Home/index';
import BottomTabNavigator from './BottomTabNavigator';
import {
  DrawerContentComponentProps,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

type RootDrawerParamList = {
  Home: undefined;
  Contact: undefined;
  BottomTabNavigator: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const CustomDrawerContent = ({navigation}: DrawerContentComponentProps) => {
  const progress = useDrawerProgress();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(progress, [0, 1], [100, 0]),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {flex: 1, backgroundColor: 'black', padding: 20} /* animatedStyle */,
      ]}>
      <DrawerItem
        labelStyle={{color: 'white'}}
        label={'Bottom Tab Navigator'}
        onPress={() => {
          navigation.navigate('BottomTabNavigator');
        }}
      />
      <DrawerItem
        labelStyle={{color: 'white'}}
        label={'Home Stack'}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <DrawerItem
        labelStyle={{color: 'white'}}
        label={'Contact'}
        onPress={() => {
          navigation.navigate('Contact');
        }}
      />
    </Animated.View>
  );
};

const drawerContent = (props: DrawerContentComponentProps) => (
  <CustomDrawerContent {...props} />
);

const DrawerMenu = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerStyle: {flex: 1, width: '60%', backgroundColor: 'transparent'},
        sceneContainerStyle: {backgroundColor: 'transparent'},
      }}
      initialRouteName="Home"
      drawerContent={drawerContent}>
      <Drawer.Screen name="Home">{() => <Home />}</Drawer.Screen>
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Drawer.Screen name="Contact">{() => <Home />}</Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerMenu;
