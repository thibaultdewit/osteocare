import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import { CustomButton } from '../components/CustomButton';
import {List, ListItem} from 'react-native-elements'
import { BackNavHeader } from '../components/BackNavHeader'


export default function BluetoothScreen(props) {

  const [device, setDevice] = useState('empty_device'); 

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
    <View>
      <BackNavHeader onPress={props.navigateBack} title={'Setup remote device'}/>
      <Text></Text>
      <CustomButton title='Scan devices' />
      <FlatList
        data={devices}
        renderItem={renderRow}
        keyExtractor={item => item.name}
      />
    </View>
    );
}