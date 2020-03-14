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
          <Ionicons size={32} color = '#2aafc0' name='md-arrow-round-back' style={{marginLeft : 10, marginRight : 10}}/>
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
    alignItems: 'center',
    paddingVertical: 20,
    flexDirection : 'row',
    // borderBottomColor : '#2aafc0', 
    // borderBottomWidth : 1 
  }
});