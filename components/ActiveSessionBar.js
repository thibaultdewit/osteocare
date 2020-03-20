import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';

export function ActiveSessionBar(props) {
  return (
    <TouchableOpacity style={styles.tabBarInfoContainer} onPress={props.onPress}>
        <View>
          <Text style={{fontFamily: 'Arial', color : '#ffffff'}}>
            Time remaining in session: {Math.floor((props.timeLeft/60) % 60)} min {(props.timeLeft % 60)} sec
          </Text>
        </View>        
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height : 60,
    alignItems: 'center',
    backgroundColor: '#2aafc0',
    paddingVertical: 20,
  },
  text: {
      fontSize: 16,
      textTransform: 'uppercase',
      color: '#ffffff',
      paddingLeft: 10,
      paddingRight: 10
  },
});
