import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export function CustomGridButton(props) {
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
      width : 150,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom : 5,
      marginTop : 10, 
      marginRight : 10,
      marginLeft : 10,

      backgroundColor: '#ffffff',
      borderColor : '#2aafc0',
      borderWidth : 1,
  },
  text: {
      fontSize: 12,
      textTransform: 'uppercase',
      color: '#2aafc0',
      paddingLeft: 10,
      paddingRight: 10
  },
});
