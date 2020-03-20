import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BackNavHeader } from '../components/BackNavHeader'
import ProgressBar from 'react-native-progress/Bar';

export default function SessionScreen(props) {

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <BackNavHeader onPress={props.navigateBack} title={'Active session'}/>
      <View style={{flex:1, flexDirection:'column'}}>
        <View style={{flex:1, flexDirection:'row'}}>
          <View style={{flex: 2}}></View>
          <View style={{flex: 3, borderRadius : 7, justifyContent : 'center', alignItems : 'center', marginBottom : 35, marginTop : 35, borderColor: '#2aafc0', borderWidth: 1}}>
            <Text style={{fontSize: 40, color: '#2aafc0'}}>{Math.floor((props.timeLeft/60) % 60)} : {(props.timeLeft % 60)}</Text>
          </View>
          <View style={{flex: 2}}></View>
        </View>
        <View style={{flex:1, flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
          <ProgressBar progress={props.timeLeft/props.duration} width={200} color='#2aafc0'/>
        </View>
        {props.timerOn ? 
        <View style={{flex:1, flexDirection: 'row', alignItems:'center', justifyContent : 'space-around'}}>
          <TouchableOpacity onPress={props.pauseTimer} style={{backgroundColor:'#2aafc0', borderRadius: 10, width : 100, height : 70, alignItems : 'center', justifyContent : 'center'}}><Text style={{fontSize: 20}}>Pause</Text></TouchableOpacity>
          <TouchableOpacity onPress={props.stopTimer} style={{backgroundColor:'#2aafc0', borderRadius: 10, width : 100, height : 70, alignItems : 'center', justifyContent : 'center'}}><Text style={{fontSize: 20}}>Stop</Text></TouchableOpacity>
        </View> 
        : 
        <View style={{flex:1, flexDirection: 'row', alignItems:'center', justifyContent : 'space-around'}}>
          <TouchableOpacity onPress={props.startTimer} style={{backgroundColor:'#2aafc0', borderRadius: 10, width: 100, height : 70, alignItems : 'center', justifyContent : 'center'}}><Text style={{fontSize: 20}}>Start</Text></TouchableOpacity>
        </View>}
      </View>
    </View>
  );
}
