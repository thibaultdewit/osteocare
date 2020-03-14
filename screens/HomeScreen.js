import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { ActiveSessionBar} from '../components/ActiveSessionBar';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize : 32, color : '#2aafc0'}}>OsteoCare</Text>
        </View>
        <View style={styles.buttonViewStyle}>
          <TouchableOpacity 
            onPress={props.startBluetooth} 
            style={styles.buttonStyle}>
            <Text style={{fontSize : 25, color : '#2aafc0'}}>Start session</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonViewStyle}>
          <TouchableOpacity 
            onPress={props.startBluetooth} 
            style={styles.buttonStyle}>
            <Text style={{fontSize : 25, color : '#2aafc0'}}>Setup device</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems : 'center'}}>{props.isSessionActive ? <ActiveSessionBar/> : null}</View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection : 'column',
    height : 400
  },
  buttonViewStyle : {
    flex: 5, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor : '#ffffff', 
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
