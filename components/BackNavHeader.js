import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';

export function BackNavHeader(props) {
  return (
    <TouchableOpacity style={styles.tabBarInfoContainer} onPress={props.onPress}>
        <Ionicons size={30} name='md-arrow-round-back' style={{marginLeft : 10, marginRight : 10}}/>
        {/* <MonoText style={styles.tabBarInfoText}>
          Click here to go back!
        </MonoText> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabBarInfoContainer: {
      alignSelf : 'stretch',
      alignItems : 'start',
      ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#13fc03',
    // opacity : 0.1,
    paddingVertical: 20,
    flexDirection : 'row'
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  text: {
      fontSize: 16,
      textTransform: 'uppercase',
      color: '#FFFFFF',
      paddingLeft: 10,
      paddingRight: 10
  },
});