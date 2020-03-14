import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';

export function BackNavHeader(props) {
  return (
    <View style={styles.tabBarInfoContainer}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={props.onPress}>
          <Ionicons size={30} name='md-arrow-round-back' style={{marginLeft : 10, marginRight : 10}}/>
      </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', flex: 6}}>
        <Text style={{fontSize: 25, color : '#2aafc0'}}>{props.title}</Text>
      </View>
      <View style={{flex: 1}}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarInfoContainer: {
      alignSelf : 'stretch',
      alignItems : 'start',
      ...Platform.select({
    }),
    alignItems: 'center',
    // backgroundColor: '#13fc03',
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