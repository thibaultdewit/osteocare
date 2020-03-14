import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BackNavHeader } from '../components/BackNavHeader'

export default function SessionScreen(props) {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <BackNavHeader onPress={props.navigateBack} title={'Active session'}/>
      <Text>Session page</Text>
    </View>
  );
}
