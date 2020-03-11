import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import { CustomButton } from '../components/CustomButton';
import {List, ListItem} from 'react-native-elements'

export default function BluetoothScreen(props) {

  const [device, setDevice] = useState('empty_device'); 

  const scanAndConnect = () => {
    console.log('start of the scan and connect function')
    props.manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
            // Handle error (scanning will be stopped automatically)
            console.log('error in scan devices: ' + error)
            return
        }

        console.log('devices')
        console.log(device.name)

        // Check if it is a device you are looking for based on advertisement data
        // or other criteria.
        if (device.name === 'name of the device' || device.name === 'HC-05') {
            
            // Stop scanning as it's not necessary if you are scanning for one device.
            props.manager.stopDeviceScan();

            // Proceed with connection.
            device.connect()

              .then((device) => {
                  return device.discoverAllServicesAndCharacteristics()
              })
              .then((device) => {
                // Do work on device with services and characteristics
                setDevice(device)
              })
              .catch((error) => {
                  // Handle errors
              });
        }
    });
  }

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

  renderRow =  ({ item }) => {
    return (
      <Text>{item.name}</Text>
      // <ListItem title={item.name} />
    )
  }

  return (
    <View>
      <Text>This is the bluetooth screen</Text>
      <CustomButton title='Scan devices' onPress={scanAndConnect}/>
      <FlatList
        data={devices}
        renderItem={renderRow}
        keyExtractor={item => item.name}
      />
    </View>
    );
}