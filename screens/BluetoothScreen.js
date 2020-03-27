import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import { BackNavHeader } from '../components/BackNavHeader'

export default function BluetoothScreen(props) {

  console.log('in bluetooth')

  const [device, setDevice] = useState('empty');

  const delayAndRun = () => {
    setDevice('loading')

    setTimeout(function(){ setDevice('loaded') }, 3000);
  }

  switch(device) {
      case 'empty':
        return (
          <View style={{flex : 1, flexDirection : 'column'}}>
            <BackNavHeader onPress={props.navigateBack} title={'Setup remote device'}/>
            <View></View>
            <View style={styles.buttonViewStyle}>
              <TouchableOpacity onPress={delayAndRun} style={styles.buttonStyle}>
                  <Text style={{fontSize : 25, color : '#2aafc0'}}>Search device</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      case 'loading':
        return(
          <View style={{flex : 1, flexDirection : 'column'}}>
            <BackNavHeader onPress={props.navigateBack} title={'Setup remote device'}/>
            <View></View>
            <View style={styles.buttonViewStyle}>
              <ActivityIndicator size='large' />
            </View>
          </View>
        )
      case 'loaded':
        return(
          <View style={{flex : 1, flexDirection : 'column'}}>
          <BackNavHeader onPress={props.navigateBack} title={'Setup remote device'}/>
          <View></View>
          <View style={styles.buttonViewStyle}>
            <TouchableOpacity onPress={delayAndRun} style={styles.buttonStyleGreen}>
                <Text style={{fontSize : 25, color : 'green'}}>Device connected</Text>
            </TouchableOpacity>
          </View>
        </View>
        )
  }
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
      borderRadius : 15, 
      backgroundColor : '#ffffff',
      borderColor : '#2aafc0',
      borderWidth : 2
  },
  buttonStyleGreen : {
    alignItems : 'center', 
    justifyContent : 'center', 
    height : 220, width : 300, 
    borderRadius : 15, 
    backgroundColor : '#ffffff',
    borderColor : 'green',
    borderWidth : 2
}
});
