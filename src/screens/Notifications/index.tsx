import {View, Text, Button} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

type RootDrawerParamList = {
  Profile: undefined;
};

type CustomDrawerNavigationProps = StackNavigationProp<RootDrawerParamList>;

type Props = {
  navigation: CustomDrawerNavigationProps;
};

const Notifications = ({navigation}: Props) => {
  return (
    <View>
      <Text>Notifications screen</Text>
      <Button
        onPress={() => {
          navigation.push('Profile');
        }}
        title="Go to Profile"
      />
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Go back"
      />
    </View>
  );
};

export default Notifications;
