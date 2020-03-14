import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import {List, ListItem} from 'react-native-elements'
import { BackNavHeader } from '../components/BackNavHeader'


export default function BluetoothScreen(props) {

  const [device, setDevice] = useState('empty_device');

  const [loading, setLoading]  = useState(false)

  const devices = [
    {
      name : 'device 1'
    },
    {
      name : 'device 2'
    },
    {
      name : 'device 3'
    }
  ]

  const renderRow = ({item}) => {
    return (
      <Text>{item.name}</Text>
      // <ListItem title={item.name} />
    )
  }

  return (
    <View style={{flex : 1, flexDirection : 'column'}}>
      <BackNavHeader onPress={props.navigateBack} title={'Setup remote device'}/>
      <View></View>
      <View style={styles.buttonViewStyle}>
        {loading ? 
        <ActivityIndicator size='large' /> : 
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
            <Text style={{fontSize : 25, color : '#2aafc0'}}>Search device</Text>
        </TouchableOpacity>}
      </View>
      {/* <FlatList
        data={devices}
        renderItem={renderRow}
        keyExtractor={item => item.name}
      /> */}
    </View>
    );
}

const styles = StyleSheet.create({
  buttonViewStyle : {
      flex : 0.6,
      justifyContent: 'center', 
      alignItems: 'center', 
  },
  buttonStyle : {
      alignItems : 'center', 
      justifyContent : 'center', 
      height : 220, width : 300, 
      backgroundColor : 'blue', 
      borderRadius : 15, 
      backgroundColor : '#ffffff',
      borderColor : '#2aafc0',
      borderWidth : 1
  }
});
