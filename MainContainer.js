import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import HomeScreen from "./screens/HomeScreen"
import WorkoutSelectionScreen from "./screens/WorkoutSelectionScreen";

export default function MainContainer() {

    const startNewSession = () => {
        setScreen('workoutselection')
    }

    const [screen, setScreen] = useState('home');

    switch(screen) {
        case 'home':
            return (<HomeScreen startNewSession={startNewSession}/>)
        case 'workoutselection':
            return (<WorkoutSelectionScreen />)
        case 'setupdevice':
            return (
            <View>
                <Text>This is the device set up page</Text>
            </View>
            )    
    }
}
   