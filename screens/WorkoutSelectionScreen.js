import React from 'react';
import {ScrollView, StyleSheet, View, Text, Picker} from 'react-native';

export default function WorkoutSelectionScreen() {
  return (
    <View>
      
      <Text>This is the workout selection screen</Text>
      <Picker
        selectedValue={'js'}
        style={{height: 50, width: 100}}
        >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
