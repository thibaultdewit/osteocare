import React from 'react';
import {View, Text} from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default function SettingsScreen() {
  return (
    <View>
      <Text>This is the setting screen</Text>
    </View>);
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
