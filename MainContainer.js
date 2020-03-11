import * as WebBrowser from 'expo-web-browser';
import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import HomeScreen from "./screens/HomeScreen"
import WorkoutSelectionScreen from "./screens/WorkoutSelectionScreen";
import BluetoothScreen from './screens/BluetoothScreen';
import { BleManager } from 'react-native-ble-plx';

export default function MainContainer() {

    const [screen, setScreen] = useState('home'); 

    manager = new BleManager();

    // insert scan and connect function here


    const navigateBack = () => {
        setScreen('home')
    }

    const startNewSession = () => {
        setScreen('workoutselection')
    }

    const startBluetooth = () => {
        setScreen('bluetooth')
    }

    switch(screen) {
        case 'home':
            return (<HomeScreen startNewSession={startNewSession} startBluetooth={startBluetooth}/>)
        case 'workoutselection':
            return (<WorkoutSelectionScreen navigateBack={navigateBack} />)
        case 'bluetooth':
            return (<BluetoothScreen navigateBack={navigateBack}/>)    
    }
}