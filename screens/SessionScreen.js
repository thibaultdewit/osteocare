import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BackNavHeader } from '../components/BackNavHeader'

export default function SessionScreen(props) {

  const [timeLeft, setTimeLeft] = useState(20)

  var count = 20
  const startTimer = () => {
      var intervalObject = setInterval(function () { 
      count--; 
      setTimeLeft(count)
      console.log(count, 'count'); 
      if (count == 0) { 
          console.log('exiting'); 
          clearInterval(intervalObject); 
      } 
    }, 1000); 
  }

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <BackNavHeader onPress={props.navigateBack} title={'Active session'}/>
      <View style={{flex:1, flexDirection:'column'}}>
        <View style={{flex:1, flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 60, color: '#2aafc0'}}>{Math.floor((timeLeft/60) % 60)} : {(timeLeft % 60)}</Text>
        </View>
        <View style={{flex:1, flexDirection: 'row', alignItems:'center', justifyContent : 'space-around'}}>
          <TouchableOpacity onPress={startTimer} style={{backgroundColor:'#2aafc0', borderRadius: 10, width: 100, height : 70, alignItems : 'center', justifyContent : 'center'}}><Text style={{fontSize: 20}}>Start</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#2aafc0', borderRadius: 10, width : 100, height : 70, alignItems : 'center', justifyContent : 'center'}}><Text style={{fontSize: 20}}>Pause</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#2aafc0', borderRadius: 10, width : 100, height : 70, alignItems : 'center', justifyContent : 'center'}}><Text style={{fontSize: 20}}>Stop</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
