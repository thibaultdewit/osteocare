import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export function CustomButton(props) {


  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress} >
      <Text style={styles.text}>{props.title}</Text>
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

      backgroundColor: '#2aafc0',
      shadowColor: '#2aafc0',
      shadowOpacity: 0.4,
      shadowOffset: { height: 10, width: 0 },
      shadowRadius: 20,
  },

  text: {
      fontSize: 16,
      textTransform: 'uppercase',
      color: '#FFFFFF',
      paddingLeft: 10,
      paddingRight: 10
  },
});
