import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import HomeScreen from "./screens/HomeScreen"
import WorkoutSelectionScreen from "./screens/WorkoutSelectionScreen";
import BluetoothScreen from './screens/BluetoothScreen';
import { BleManager } from 'react-native-ble-plx';

export default function MainContainer() {

    this.manager = new BleManager();

    const subscription = this.manager.onStateChange((state) => {
        if (state === 'PoweredOn') {
            this.scanAndConnect();
            subscription.remove();
        }
    }, true);

    const startNewSession = () => {
        console.log('start new workout session')
        setScreen('workoutselection')
    }

    const startBluetooth = () => {
        console.log('start bluetooth function')
        setScreen('bluetooth')
    }

    const [screen, setScreen] = useState('home'); 

    switch(screen) {
        case 'home':
            return (<HomeScreen startNewSession={startNewSession} startBluetooth={startBluetooth}/>)
        case 'workoutselection':
            return (<WorkoutSelectionScreen />)
        case 'bluetooth':
            return (<BluetoothScreen manager={this.manager} subscription={subscription}/>)    
    }
}