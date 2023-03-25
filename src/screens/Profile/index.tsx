import {View, Text, Button} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

type RootDrawerParamList = {
  Notifications: undefined;
};

type CustomDrawerNavigationProps = StackNavigationProp<RootDrawerParamList>;

type Props = {
  navigation: CustomDrawerNavigationProps;
};

const Profile = ({navigation}: Props) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        onPress={() => {
          navigation.push('Notifications');
        }}
        title="Go to Notifications"
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

export default Profile;
