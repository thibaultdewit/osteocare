import React from 'react';
import {ScrollView, StyleSheet, View, Text, TouchableOpacity, ShadowPropTypesIOS} from 'react-native';
import { CustomGridButton } from '../components/CustomGridButton'
import { BackNavHeader } from '../components/BackNavHeader'

export default function WorkoutSelectionScreen(props) {
  return (
    <View style={{flex: 1, flexDirection : 'column'}}>
      <BackNavHeader onPress={props.navigateBack} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{marginTop : 10, marginBottom : 10, fontSize : 18}}>
          Select body part
        </Text>
        <View style={{flexDirection: 'row'}}>
          <CustomGridButton title='Lower left leg'/>
          <CustomGridButton title='Lower right leg'/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CustomGridButton title='Upper left leg'/>
          <CustomGridButton title='Upper right leg'/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CustomGridButton title='Left side of hip'/>
          <CustomGridButton title='Right side of hip'/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CustomGridButton title='Left forearm'/>
          <CustomGridButton title='Right forearm'/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CustomGridButton title='Left upper arm'/>
          <CustomGridButton title='Right upper arm'/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CustomGridButton title='Left torso'/>
          <CustomGridButton title='Right torso'/>
        </View>
        <TouchableOpacity style={styles.startButton}>
          <Text style={{alignItems : 'center', justifyContent : 'center'}}>
            Start session!
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems : 'center',
    flexDirection : 'column'
  },
  startButton : {
    width : 320, 
    height : 75,
    flexDirection: 'row', 
    backgroundColor : 'green', 
    marginTop : 20, 
    alignItems : 'center',
    justifyContent : 'center', 
    borderRadius : 5
  }
});