import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import HomeScreen from "./screens/HomeScreen"

export default function MainContainer() {

    console.log('printing in main container');
    const [homeScreen, setHomeScreen] = useState(true)
    const [isSessionActive, setSessionActive] = useState(false);
    const [configDevice, setConfigDevice] = useState(false)
    
    //todo: function to change isSessionActive
    if(homeScreen) { 
        return (<HomeScreen isSessionActive={isSessionActive}/>)
    } else if (isSessionActive) {
        return (
            <View><Text>This is the active session page!</Text></View>
        )
    } else if (configDevice) {
        return (
            <View><Text>This is the device setup page!</Text></View>
        )
    }
}
   