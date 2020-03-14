import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';

export function ActiveSessionBar(props) {
  return (
    <TouchableOpacity style={styles.tabBarInfoContainer} onPress={props.onPress}>
        <View>
          <Text style={{fontFamily: 'Arial'}}>
            Time remaining in session: 11 min 24 sec
          </Text>
        </View>        
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
      display: 'flex',
      height: 75,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom : 5,
      marginTop : 10, 
      marginRight : 10,
      marginLeft : 10,

      backgroundColor: '#2AC062',
      shadowColor: '#2AC062',
      shadowOpacity: 0.4,
      shadowOffset: { height: 10, width: 0 },
      shadowRadius: 20,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
